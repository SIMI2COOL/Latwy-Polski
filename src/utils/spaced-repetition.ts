import { FlashcardState } from '@/types';

/**
 * Implementación del algoritmo SM-2 (SuperMemo 2) para repetición espaciada
 * Este algoritmo ajusta el intervalo de revisión basado en la dificultad de recordar la palabra
 */

export type Quality = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Calcula el próximo estado de la flashcard basado en la calidad de la respuesta
 * 
 * @param currentState - Estado actual de la flashcard
 * @param quality - Calidad de la respuesta (0-5)
 *   0 - No recordado completamente
 *   1 - Respuesta incorrecta, pero al ver la correcta se recuerda
 *   2 - Respuesta incorrecta, difícil de recordar
 *   3 - Respuesta correcta con dificultad
 *   4 - Respuesta correcta con hesitación
 *   5 - Respuesta perfecta
 * 
 * @returns Nuevo estado de la flashcard
 */
export function calculateNextReview(
  currentState: FlashcardState,
  quality: Quality
): FlashcardState {
  let { easeFactor, interval, repetitions } = currentState;
  
  // Si la respuesta fue menor a 3, reiniciar el intervalo
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // Incrementar repeticiones
    repetitions += 1;
    
    // Calcular nuevo intervalo basado en repeticiones
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }
  
  // Actualizar el factor de facilidad
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  // El factor de facilidad no puede ser menor a 1.3
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }
  
  // Calcular la próxima fecha de revisión
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  
  return {
    ...currentState,
    easeFactor,
    interval,
    repetitions,
    nextReview,
    lastReviewed: new Date(),
  };
}

/**
 * Convierte el resultado de un ejercicio a una puntuación de calidad (0-5)
 * 
 * @param isCorrect - Si la respuesta fue correcta
 * @param attempts - Número de intentos realizados
 * @param timeSpent - Tiempo empleado en segundos
 * @returns Puntuación de calidad
 */
export function mapResultToQuality(
  isCorrect: boolean,
  attempts: number = 1,
  timeSpent: number = 0
): Quality {
  if (!isCorrect) {
    return attempts > 2 ? 0 : 1;
  }
  
  // Respuesta correcta
  if (attempts === 1) {
    // Respuesta perfecta en el primer intento
    // Ajustar basado en tiempo de respuesta
    if (timeSpent < 3) return 5; // Menos de 3 segundos = perfecto
    if (timeSpent < 5) return 4; // Menos de 5 segundos = con hesitación
    return 3; // Más tiempo = con dificultad
  }
  
  // Múltiples intentos pero finalmente correcta
  return 2;
}

/**
 * Obtiene el intervalo legible para mostrar al usuario
 */
export function getIntervalDisplay(interval: number): string {
  if (interval === 0) return 'Hoy';
  if (interval === 1) return 'Mañana';
  if (interval < 7) return `En ${interval} días`;
  if (interval < 30) {
    const weeks = Math.floor(interval / 7);
    return `En ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
  }
  const months = Math.floor(interval / 30);
  return `En ${months} ${months === 1 ? 'mes' : 'meses'}`;
}

/**
 * Determina si una flashcard debe ser revisada hoy
 */
export function isDueForReview(state: FlashcardState): boolean {
  return state.nextReview <= new Date();
}

/**
 * Calcula el progreso del usuario con una palabra específica
 * Retorna un porcentaje de 0 a 100
 */
export function calculateWordMastery(state: FlashcardState): number {
  const { easeFactor, repetitions, interval } = state;
  
  // Factor de facilidad contribuye 40% (normalizado de 1.3-2.5 a 0-100)
  const efScore = ((easeFactor - 1.3) / 1.2) * 40;
  
  // Repeticiones contribuyen 30% (máximo 10 repeticiones)
  const repScore = Math.min(repetitions / 10, 1) * 30;
  
  // Intervalo contribuye 30% (máximo 180 días = 6 meses)
  const intervalScore = Math.min(interval / 180, 1) * 30;
  
  return Math.round(efScore + repScore + intervalScore);
}
