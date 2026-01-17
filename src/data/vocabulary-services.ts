import { VocabularyWord } from '@/types';

export const servicesVocabulary: VocabularyWord[] = [
  // NAGŁE WYPADKI (Emergency)
  { id: 'emergency_001', polish: 'pogotowie ratunkowe', spanish: 'ambulance', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_002', polish: 'policja', spanish: 'police', category: 'services', subcategory: 'emergency', difficulty: 'beginner' },
  { id: 'emergency_003', polish: 'straż pożarna', spanish: 'fire department', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_004', polish: 'wypadek', spanish: 'accident', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_005', polish: 'nagły wypadek', spanish: 'emergency', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_006', polish: 'pomoc', spanish: 'help', category: 'services', subcategory: 'emergency', difficulty: 'beginner' },
  { id: 'emergency_007', polish: 'niebezpieczeństwo', spanish: 'danger', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_008', polish: 'pożar', spanish: 'fire', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_009', polish: 'kradzież', spanish: 'theft', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_010', polish: 'raport policyjny', spanish: 'police report', category: 'services', subcategory: 'emergency', difficulty: 'advanced' },
  { id: 'emergency_011', polish: 'numer alarmowy', spanish: 'emergency number', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_012', polish: 'ratownik', spanish: 'paramedic', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },

  // BANK (Bank)
  { id: 'bank_001', polish: 'bank', spanish: 'bank', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_002', polish: 'konto', spanish: 'account', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_003', polish: 'konto oszczędnościowe', spanish: 'savings account', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_004', polish: 'konto bieżące', spanish: 'checking account', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_005', polish: 'karta kredytowa', spanish: 'credit card', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_006', polish: 'karta debetowa', spanish: 'debit card', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_007', polish: 'bankomat', spanish: 'ATM', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_008', polish: 'PIN', spanish: 'PIN', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_009', polish: 'wpłata', spanish: 'deposit', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_010', polish: 'wypłata', spanish: 'withdrawal', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_011', polish: 'przelew', spanish: 'transfer', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_012', polish: 'pożyczka', spanish: 'loan', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_013', polish: 'odsetki', spanish: 'interest', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_014', polish: 'saldo', spanish: 'balance', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },

  // POCZTA (Post Office)
  { id: 'post_001', polish: 'poczta', spanish: 'post office', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_002', polish: 'list', spanish: 'letter', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_003', polish: 'paczka', spanish: 'package', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_004', polish: 'znaczek', spanish: 'stamp', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_005', polish: 'koperta', spanish: 'envelope', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_006', polish: 'adres', spanish: 'address', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_007', polish: 'kod pocztowy', spanish: 'zip code', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_008', polish: 'nadawca', spanish: 'sender', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_009', polish: 'odbiorca', spanish: 'recipient', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_010', polish: 'skrzynka pocztowa', spanish: 'mailbox', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_011', polish: 'poczta lotnicza', spanish: 'air mail', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_012', polish: 'przesyłka polecona', spanish: 'registered mail', category: 'services', subcategory: 'post', difficulty: 'advanced' },
  { id: 'post_013', polish: 'pocztówka', spanish: 'postcard', category: 'services', subcategory: 'post', difficulty: 'beginner' },

  // HOTEL (Hotel)
  { id: 'hotel_001', polish: 'hotel', spanish: 'hotel', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_002', polish: 'recepcja', spanish: 'reception', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_003', polish: 'pokój', spanish: 'room', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_004', polish: 'pokój jednoosobowy', spanish: 'single room', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_005', polish: 'pokój dwuosobowy', spanish: 'double room', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_006', polish: 'rezerwacja', spanish: 'reservation', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_007', polish: 'zameldowanie', spanish: 'check-in', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_008', polish: 'wymeldowanie', spanish: 'check-out', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_009', polish: 'klucz', spanish: 'key', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_010', polish: 'winda', spanish: 'elevator', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_011', polish: 'obsługa pokojowa', spanish: 'room service', category: 'services', subcategory: 'hotel', difficulty: 'advanced' },
  { id: 'hotel_012', polish: 'mini bar', spanish: 'mini bar', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_013', polish: 'śniadanie', spanish: 'breakfast', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_014', polish: 'parking', spanish: 'parking', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
];

export async function seedServicesVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing services vocabulary IDs
    const existingServices = await db.vocabulary.where('category').equals('services').toArray();
    const existingIds = new Set(existingServices.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = servicesVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new services words`);
    }
    
    // Always update total word count - use the actual array length, not database count
    // This ensures consistency across devices
    await db.categories.update('services', { totalWords: servicesVocabulary.length });
    const dbCount = await db.vocabulary.where('category').equals('services').count();
    console.log(`✅ Services vocabulary: ${servicesVocabulary.length} words (${dbCount} in database)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingServices = await db.vocabulary.where('category').equals('services').toArray();
      const existingIds = new Set(existingServices.map(w => w.id));
      const newWords = servicesVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining services words:', e);
        }
      }
      
      // Always update total word count - use the actual array length, not database count
      // This ensures consistency across devices
      await db.categories.update('services', { totalWords: servicesVocabulary.length });
      const dbCount = await db.vocabulary.where('category').equals('services').count();
      console.log(`✅ Services vocabulary: ${servicesVocabulary.length} words (${dbCount} in database)`);
      return true;
    }
    console.error('Error seeding services vocabulary:', error);
    return false;
  }
}
