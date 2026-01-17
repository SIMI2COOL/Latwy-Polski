import { VocabularyWord } from '@/types';

export const healthVocabulary: VocabularyWord[] = [
  // CHOROBY (Enfermedades)
  { id: 'illness_001', polish: 'choroba', spanish: 'enfermedad', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_002', polish: 'przeziębienie', spanish: 'resfriado', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_003', polish: 'grypa', spanish: 'gripe', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_004', polish: 'gorączka', spanish: 'fiebre', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_005', polish: 'kaszel', spanish: 'tos', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_006', polish: 'ból głowy', spanish: 'dolor de cabeza', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_007', polish: 'ból gardła', spanish: 'dolor de garganta', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_008', polish: 'ból brzucha', spanish: 'dolor de estómago', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_009', polish: 'nudności', spanish: 'náuseas', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_010', polish: 'biegunka', spanish: 'diarrea', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_011', polish: 'zaparcie', spanish: 'estreñimiento', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_012', polish: 'alergia', spanish: 'alergia', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_013', polish: 'astma', spanish: 'asma', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_014', polish: 'cukrzyca', spanish: 'diabetes', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },
  { id: 'illness_015', polish: 'nadciśnienie', spanish: 'hipertensión', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },

  // LEKARZ (Médico)
  { id: 'doctor_001', polish: 'lekarz', spanish: 'médico', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_002', polish: 'pielęgniarka', spanish: 'enfermera', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_003', polish: 'pacjent', spanish: 'paciente', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_004', polish: 'gabinet lekarski', spanish: 'consultorio médico', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_005', polish: 'wizyta', spanish: 'cita', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_006', polish: 'recepta', spanish: 'receta', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_007', polish: 'badanie', spanish: 'examen', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_008', polish: 'diagnoza', spanish: 'diagnóstico', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_009', polish: 'leczenie', spanish: 'tratamiento', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_010', polish: 'zastrzyk', spanish: 'inyección', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_011', polish: 'szczepionka', spanish: 'vacuna', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_012', polish: 'termometr', spanish: 'termómetro', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },

  // URAZY (Lesiones)
  { id: 'injury_001', polish: 'rana', spanish: 'herida', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_002', polish: 'skaleczenie', spanish: 'corte', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_003', polish: 'oparzenie', spanish: 'quemadura', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_004', polish: 'siniak', spanish: 'moretón', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_005', polish: 'zwichnięcie', spanish: 'esguince', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_006', polish: 'złamanie', spanish: 'fractura', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_007', polish: 'krwawienie', spanish: 'sangrado', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_008', polish: 'opatrunek', spanish: 'vendaje', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_009', polish: 'plaster', spanish: 'tirita', category: 'health', subcategory: 'injuries', difficulty: 'beginner' },
  { id: 'injury_010', polish: 'gips', spanish: 'yeso', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },

  // SZPITAL (Hospital)
  { id: 'hospital_001', polish: 'szpital', spanish: 'hospital', category: 'health', subcategory: 'hospital', difficulty: 'beginner' },
  { id: 'hospital_002', polish: 'pogotowie', spanish: 'emergencia', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_003', polish: 'izba przyjęć', spanish: 'urgencias', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_004', polish: 'oddział', spanish: 'sala', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_005', polish: 'sala operacyjna', spanish: 'quirófano', category: 'health', subcategory: 'hospital', difficulty: 'advanced' },
  { id: 'hospital_006', polish: 'operacja', spanish: 'cirugía', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_007', polish: 'chirurg', spanish: 'cirujano', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_008', polish: 'karetka', spanish: 'ambulancia', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_009', polish: 'wózek inwalidzki', spanish: 'silla de ruedas', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_010', polish: 'kule', spanish: 'muletas', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },

  // DENTYSTA (Dentista)
  { id: 'dentist_001', polish: 'dentysta', spanish: 'dentista', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_002', polish: 'ząb', spanish: 'diente', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_003', polish: 'dziąsło', spanish: 'encía', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_004', polish: 'próchnica', spanish: 'caries', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_005', polish: 'plomba', spanish: 'empaste', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_006', polish: 'korona', spanish: 'corona', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_007', polish: 'ból zęba', spanish: 'dolor de muelas', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_008', polish: 'aparat ortodontyczny', spanish: 'ortodoncia', category: 'health', subcategory: 'dentist', difficulty: 'advanced' },
  { id: 'dentist_009', polish: 'nić dentystyczna', spanish: 'hilo dental', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_010', polish: 'płyn do płukania ust', spanish: 'enjuague bucal', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },

  // APTEKA (Farmacia)
  { id: 'pharmacy_001', polish: 'apteka', spanish: 'farmacia', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_002', polish: 'farmaceuta', spanish: 'farmacéutico', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_003', polish: 'lek', spanish: 'medicamento', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_004', polish: 'tabletka', spanish: 'pastilla', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_005', polish: 'kapsułka', spanish: 'cápsula', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_006', polish: 'syrop', spanish: 'jarabe', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_007', polish: 'maść', spanish: 'pomada', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_008', polish: 'krople', spanish: 'gotas', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_009', polish: 'antybiotyk', spanish: 'antibiótico', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_010', polish: 'środek przeciwbólowy', spanish: 'analgésico', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_011', polish: 'witaminy', spanish: 'vitaminas', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_012', polish: 'suplement diety', spanish: 'suplemento dietético', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
];

export async function seedHealthVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing health vocabulary IDs
    const existingHealth = await db.vocabulary.where('category').equals('health').toArray();
    const existingIds = new Set(existingHealth.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = healthVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new health words`);
    }
    
    // Always update total word count
    const totalCount = await db.vocabulary.where('category').equals('health').count();
    await db.categories.update('health', { totalWords: totalCount });
    console.log(`✅ Health vocabulary: ${totalCount} total words (${healthVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingHealth = await db.vocabulary.where('category').equals('health').toArray();
      const existingIds = new Set(existingHealth.map(w => w.id));
      const newWords = healthVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining health words:', e);
        }
      }
      
      // Always update total word count
      const totalCount = await db.vocabulary.where('category').equals('health').count();
      await db.categories.update('health', { totalWords: totalCount });
      console.log(`✅ Health vocabulary: ${totalCount} total words`);
      return true;
    }
    console.error('Error seeding health vocabulary:', error);
    return false;
  }
}
