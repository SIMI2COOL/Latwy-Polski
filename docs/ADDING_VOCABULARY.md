# 📖 Guía para Agregar Vocabulario

## Estructura de Vocabulario

Cada palabra en la aplicación sigue esta estructura TypeScript:

```typescript
interface VocabularyWord {
  id: string;              // Identificador único
  polish: string;          // Palabra en polaco
  english: string;         // Traducción al inglés
  category: string;        // ID de categoría
  subcategory: string;     // ID de subcategoría
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];         // Etiquetas opcionales
  imageUrl?: string;       // URL de imagen (futuro)
  audioUrl?: string;       // URL de audio (futuro)
}
```

## Categorías Disponibles

| ID | Polaco | Inglés | Icono |
|---|---|---|---|
| `people` | LUDZIE | People | 👥 |
| `appearance` | WYGLĄD | Appearance | 👔 |
| `health` | ZDROWIE | Health | 🏥 |
| `home` | DOM | Home | 🏠 |
| `services` | USŁUGI | Services | 🔧 |
| `shopping` | ZAKUPY | Shopping | 🛒 |
| `food` | ŻYWNOŚĆ | Food | 🍎 |
| `eating-out` | JADANIE POZA DOMEM | Eating Out | 🍽️ |
| `study` | NAUKA | Study | 📚 |
| `work` | PRACA | Work | 💼 |
| `transport` | TRANSPORT | Transport | 🚗 |
| `sports` | SPORT | Sports | ⚽ |
| `leisure` | CZAS WOLNY | Leisure | 🎭 |
| `environment` | ŚRODOWISKO | Environment | 🌍 |
| `reference` | INFORMACJE | Reference | 📋 |

## Ejemplo: Agregar Categoría "Food"

### 1. Crear archivo de vocabulario

Crea `src/data/vocabulary-food.ts`:

```typescript
import { VocabularyWord } from '@/types';

export const foodVocabulary: VocabularyWord[] = [
  // MIĘSO (Meat)
  {
    id: 'meat_001',
    polish: 'kurczak',
    english: 'chicken',
    category: 'food',
    subcategory: 'meat',
    difficulty: 'beginner',
    tags: ['carne', 'proteína'],
  },
  {
    id: 'meat_002',
    polish: 'wołowina',
    english: 'beef',
    category: 'food',
    subcategory: 'meat',
    difficulty: 'intermediate',
    tags: ['carne', 'proteína'],
  },
  {
    id: 'meat_003',
    polish: 'wieprzowina',
    english: 'pork',
    category: 'food',
    subcategory: 'meat',
    difficulty: 'intermediate',
    tags: ['carne', 'proteína'],
  },

  // WARZYWA (Vegetables)
  {
    id: 'veg_001',
    polish: 'pomidor',
    english: 'tomato',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['verdura'],
  },
  {
    id: 'veg_002',
    polish: 'ogórek',
    english: 'cucumber',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['verdura'],
  },
  {
    id: 'veg_003',
    polish: 'marchew',
    english: 'carrot',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['verdura'],
  },

  // OWOCE (Fruits)
  {
    id: 'fruit_001',
    polish: 'jabłko',
    english: 'apple',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruta'],
  },
  {
    id: 'fruit_002',
    polish: 'banan',
    english: 'banana',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruta'],
  },
  {
    id: 'fruit_003',
    polish: 'pomarańcza',
    english: 'orange',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruta'],
  },
];

export async function seedFoodVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    await db.vocabulary.bulkAdd(foodVocabulary);
    
    // Actualizar contador de palabras en la categoría
    const category = await db.categories.get('food');
    if (category) {
      await db.categories.update('food', {
        totalWords: foodVocabulary.length
      });
    }
    
    console.log('Food vocabulary seeded successfully');
    return true;
  } catch (error) {
    console.error('Error seeding food vocabulary:', error);
    return false;
  }
}
```

### 2. Importar en App.tsx

Edita `src/App.tsx`:

```typescript
import { seedPeopleVocabulary } from '@/data/vocabulary-people';
import { seedFoodVocabulary } from '@/data/vocabulary-food'; // AGREGAR

function App() {
  useEffect(() => {
    async function initialize() {
      try {
        const dbInitialized = await initializeDatabase();
        
        if (!dbInitialized) {
          throw new Error('Failed to initialize database');
        }

        await seedPeopleVocabulary();
        await seedFoodVocabulary(); // AGREGAR
        
        setIsInitialized(true);
      } catch (err) {
        // ...
      }
    }
    initialize();
  }, []);
  // ...
}
```

## Convenciones de Nomenclatura

### IDs de Palabras

Formato: `{subcategory}_{número}`

Ejemplos:
- `body_001`, `body_002`, `body_003`
- `meat_001`, `meat_002`
- `fruit_001`, `fruit_002`

### IDs de Subcategorías

Usa nombres en inglés, minúsculas, con guiones:

✅ Correcto:
- `body`
- `face`
- `family`
- `meat`
- `vegetables`
- `dairy-products`

❌ Incorrecto:
- `Body` (mayúscula)
- `dairy products` (espacio)
- `dairy_products` (underscore)

### Niveles de Dificultad

- **beginner**: Palabras básicas y cotidianas
  - Ej: "głowa" (head), "ręka" (hand), "jabłko" (apple)

- **intermediate**: Palabras menos comunes
  - Ej: "nadgarstek" (wrist), "biodro" (hip), "wieprzowina" (pork)

- **advanced**: Palabras especializadas o técnicas
  - Ej: términos médicos, vocabulario técnico

## Plantilla Rápida

```typescript
import { VocabularyWord } from '@/types';

export const CATEGORY_NAMEVocabulary: VocabularyWord[] = [
  // SUBCATEGORY_NAME_POLISH (Subcategory Name English)
  {
    id: 'subcategory_001',
    polish: 'palabra',
    english: 'word',
    category: 'category-id',
    subcategory: 'subcategory-id',
    difficulty: 'beginner',
    tags: ['tag1', 'tag2'],
  },
  // ... más palabras
];

export async function seedCATEGORY_NAMEVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    await db.vocabulary.bulkAdd(CATEGORY_NAMEVocabulary);
    await db.categories.update('category-id', {
      totalWords: CATEGORY_NAMEVocabulary.length
    });
    console.log('Category vocabulary seeded successfully');
    return true;
  } catch (error) {
    console.error('Error seeding vocabulary:', error);
    return false;
  }
}
```

## Verificación

Después de agregar vocabulario, verifica que:

1. ✅ No hay IDs duplicados
2. ✅ Todos los campos requeridos están presentes
3. ✅ Las categorías y subcategorías son consistentes
4. ✅ El nivel de dificultad es apropiado
5. ✅ La función seed está importada en App.tsx

## Herramientas Útiles

### Script de Validación

Puedes crear un script simple para validar el vocabulario:

```typescript
function validateVocabulary(words: VocabularyWord[]): boolean {
  const ids = new Set();
  
  for (const word of words) {
    // Verificar ID único
    if (ids.has(word.id)) {
      console.error(`Duplicate ID: ${word.id}`);
      return false;
    }
    ids.add(word.id);
    
    // Verificar campos requeridos
    if (!word.polish || !word.english || !word.category || !word.subcategory) {
      console.error(`Missing required field in word: ${word.id}`);
      return false;
    }
  }
  
  console.log(`✅ All ${words.length} words validated successfully`);
  return true;
}
```

## Recursos del Diccionario

El vocabulario proviene del libro "Polish-English Bilingual Visual Dictionary" (DK, 2008).

Estructura del libro:

- **Páginas 1-172**: Categorías 1-9
- **Páginas 173-362**: Categorías 10-16
- **Índices**: Páginas 324-360

Consulta el documento Word "Diccionario_Polaco_Analisis_Completo.docx" para ver la estructura completa con todas las subcategorías.

## Próximos Pasos

Para un vocabulario completo:

1. Prioriza categorías según tu interés de aprendizaje
2. Comienza con subcategorías pequeñas (10-20 palabras)
3. Agrupa palabras relacionadas en la misma subcategoría
4. Mantén consistencia en los nombres de subcategorías

Sugerencia de orden:
1. ✅ LUDZIE (People) - Ya hecho
2. ŻYWNOŚĆ (Food) - Vocabulario cotidiano
3. DOM (Home) - Útil para conversaciones básicas
4. ZAKUPY (Shopping) - Práctico
5. ... continúa según tus necesidades
