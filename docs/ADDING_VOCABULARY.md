# 📖 Guide for Adding Vocabulary

## Vocabulary Structure

Each word in the application follows this TypeScript structure:

```typescript
interface VocabularyWord {
  id: string;              // Unique identifier
  polish: string;          // Word in Polish
  english: string;         // English translation
  category: string;        // Category ID
  subcategory: string;     // Subcategory ID
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];         // Optional tags
  imageUrl?: string;       // Image URL (future)
  audioUrl?: string;       // Audio URL (future)
}
```

## Available Categories

| ID | Polish | English | Icon |
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

## Example: Adding "Food" Category

### 1. Create vocabulary file

Create `src/data/vocabulary-food.ts`:

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
    tags: ['meat', 'protein'],
  },
  {
    id: 'meat_002',
    polish: 'wołowina',
    english: 'beef',
    category: 'food',
    subcategory: 'meat',
    difficulty: 'intermediate',
    tags: ['meat', 'protein'],
  },
  {
    id: 'meat_003',
    polish: 'wieprzowina',
    english: 'pork',
    category: 'food',
    subcategory: 'meat',
    difficulty: 'intermediate',
    tags: ['meat', 'protein'],
  },

  // WARZYWA (Vegetables)
  {
    id: 'veg_001',
    polish: 'pomidor',
    english: 'tomato',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['vegetable'],
  },
  {
    id: 'veg_002',
    polish: 'ogórek',
    english: 'cucumber',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['vegetable'],
  },
  {
    id: 'veg_003',
    polish: 'marchew',
    english: 'carrot',
    category: 'food',
    subcategory: 'vegetables',
    difficulty: 'beginner',
    tags: ['vegetable'],
  },

  // OWOCE (Fruits)
  {
    id: 'fruit_001',
    polish: 'jabłko',
    english: 'apple',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruit'],
  },
  {
    id: 'fruit_002',
    polish: 'banan',
    english: 'banana',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruit'],
  },
  {
    id: 'fruit_003',
    polish: 'pomarańcza',
    english: 'orange',
    category: 'food',
    subcategory: 'fruits',
    difficulty: 'beginner',
    tags: ['fruit'],
  },
];

export async function seedFoodVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    await db.vocabulary.bulkAdd(foodVocabulary);
    
    // Update word count in category
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

### 2. Import in App.tsx

Edit `src/App.tsx`:

```typescript
import { seedPeopleVocabulary } from '@/data/vocabulary-people';
import { seedFoodVocabulary } from '@/data/vocabulary-food'; // ADD

function App() {
  useEffect(() => {
    async function initialize() {
      try {
        const dbInitialized = await initializeDatabase();
        
        if (!dbInitialized) {
          throw new Error('Failed to initialize database');
        }

        await seedPeopleVocabulary();
        await seedFoodVocabulary(); // ADD
        
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

## Naming Conventions

### Word IDs

Format: `{subcategory}_{number}`

Examples:
- `body_001`, `body_002`, `body_003`
- `meat_001`, `meat_002`
- `fruit_001`, `fruit_002`

### Subcategory IDs

Use English names, lowercase, with hyphens:

✅ Correct:
- `body`
- `face`
- `family`
- `meat`
- `vegetables`
- `dairy-products`

❌ Incorrect:
- `Body` (uppercase)
- `dairy products` (space)
- `dairy_products` (underscore)

### Difficulty Levels

- **beginner**: Basic and everyday words
  - Ex: "głowa" (head), "ręka" (hand), "jabłko" (apple)

- **intermediate**: Less common words
  - Ex: "nadgarstek" (wrist), "biodro" (hip), "wieprzowina" (pork)

- **advanced**: Specialized or technical words
  - Ex: medical terms, technical vocabulary

## Quick Template

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
  // ... more words
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

## Verification

After adding vocabulary, verify that:

1. ✅ No duplicate IDs
2. ✅ All required fields are present
3. ✅ Categories and subcategories are consistent
4. ✅ Difficulty level is appropriate
5. ✅ Seed function is imported in App.tsx

## Useful Tools

### Validation Script

You can create a simple script to validate vocabulary:

```typescript
function validateVocabulary(words: VocabularyWord[]): boolean {
  const ids = new Set();
  
  for (const word of words) {
    // Check unique ID
    if (ids.has(word.id)) {
      console.error(`Duplicate ID: ${word.id}`);
      return false;
    }
    ids.add(word.id);
    
    // Check required fields
    if (!word.polish || !word.english || !word.category || !word.subcategory) {
      console.error(`Missing required field in word: ${word.id}`);
      return false;
    }
  }
  
  console.log(`✅ All ${words.length} words validated successfully`);
  return true;
}
```

## Dictionary Resources

The vocabulary comes from the book "Polish-English Bilingual Visual Dictionary" (DK, 2008).

Book structure:

- **Pages 1-172**: Categories 1-9
- **Pages 173-362**: Categories 10-16
- **Indexes**: Pages 324-360

Consult the Word document "Diccionario_Polaco_Analisis_Completo.docx" to see the complete structure with all subcategories.

## Next Steps

For complete vocabulary:

1. Prioritize categories according to your learning interest
2. Start with small subcategories (10-20 words)
3. Group related words in the same subcategory
4. Maintain consistency in subcategory names

Suggested order:
1. ✅ LUDZIE (People) - Already done
2. ŻYWNOŚĆ (Food) - Everyday vocabulary
3. DOM (Home) - Useful for basic conversations
4. ZAKUPY (Shopping) - Practical
5. ... continue according to your needs
