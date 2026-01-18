import { VocabularyWord } from '@/types';

export const servicesVocabulary: VocabularyWord[] = [
  // NAGŁE WYPADKI (Emergency)
  { id: 'emergency_001', polish: 'pogotowie ratunkowe', english: 'ambulance', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_002', polish: 'policja', english: 'police', category: 'services', subcategory: 'emergency', difficulty: 'beginner' },
  { id: 'emergency_003', polish: 'straż pożarna', english: 'fire department', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_004', polish: 'wypadek', english: 'accident', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_005', polish: 'nagły wypadek', english: 'emergency', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_006', polish: 'pomoc', english: 'help', category: 'services', subcategory: 'emergency', difficulty: 'beginner' },
  { id: 'emergency_007', polish: 'niebezpieczeństwo', english: 'danger', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_008', polish: 'pożar', english: 'fire', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_009', polish: 'kradzież', english: 'theft', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_010', polish: 'raport policyjny', english: 'police report', category: 'services', subcategory: 'emergency', difficulty: 'advanced' },
  { id: 'emergency_011', polish: 'numer alarmowy', english: 'emergency number', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },
  { id: 'emergency_012', polish: 'ratownik', english: 'paramedic', category: 'services', subcategory: 'emergency', difficulty: 'intermediate' },

  // BANK (Bank)
  { id: 'bank_001', polish: 'bank', english: 'bank', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_002', polish: 'konto', english: 'account', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_003', polish: 'konto oszczędnościowe', english: 'savings account', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_004', polish: 'konto bieżące', english: 'checking account', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_005', polish: 'karta kredytowa', english: 'credit card', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_006', polish: 'karta debetowa', english: 'debit card', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_007', polish: 'bankomat', english: 'ATM', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_008', polish: 'PIN', english: 'PIN', category: 'services', subcategory: 'bank', difficulty: 'beginner' },
  { id: 'bank_009', polish: 'wpłata', english: 'deposit', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_010', polish: 'wypłata', english: 'withdrawal', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_011', polish: 'przelew', english: 'transfer', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_012', polish: 'pożyczka', english: 'loan', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },
  { id: 'bank_013', polish: 'odsetki', english: 'interest', category: 'services', subcategory: 'bank', difficulty: 'advanced' },
  { id: 'bank_014', polish: 'saldo', english: 'balance', category: 'services', subcategory: 'bank', difficulty: 'intermediate' },

  // POCZTA (Post Office)
  { id: 'post_001', polish: 'poczta', english: 'post office', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_002', polish: 'list', english: 'letter', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_003', polish: 'paczka', english: 'package', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_004', polish: 'znaczek', english: 'stamp', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_005', polish: 'koperta', english: 'envelope', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_006', polish: 'adres', english: 'address', category: 'services', subcategory: 'post', difficulty: 'beginner' },
  { id: 'post_007', polish: 'kod pocztowy', english: 'zip code', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_008', polish: 'nadawca', english: 'sender', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_009', polish: 'odbiorca', english: 'recipient', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_010', polish: 'skrzynka pocztowa', english: 'mailbox', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_011', polish: 'poczta lotnicza', english: 'air mail', category: 'services', subcategory: 'post', difficulty: 'intermediate' },
  { id: 'post_012', polish: 'przesyłka polecona', english: 'registered mail', category: 'services', subcategory: 'post', difficulty: 'advanced' },
  { id: 'post_013', polish: 'pocztówka', english: 'postcard', category: 'services', subcategory: 'post', difficulty: 'beginner' },

  // HOTEL (Hotel)
  { id: 'hotel_001', polish: 'hotel', english: 'hotel', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_002', polish: 'recepcja', english: 'reception', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_003', polish: 'pokój', english: 'room', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_004', polish: 'pokój jednoosobowy', english: 'single room', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_005', polish: 'pokój dwuosobowy', english: 'double room', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_006', polish: 'rezerwacja', english: 'reservation', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_007', polish: 'zameldowanie', english: 'check-in', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_008', polish: 'wymeldowanie', english: 'check-out', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_009', polish: 'klucz', english: 'key', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_010', polish: 'winda', english: 'elevator', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_011', polish: 'obsługa pokojowa', english: 'room service', category: 'services', subcategory: 'hotel', difficulty: 'advanced' },
  { id: 'hotel_012', polish: 'mini bar', english: 'mini bar', category: 'services', subcategory: 'hotel', difficulty: 'intermediate' },
  { id: 'hotel_013', polish: 'śniadanie', english: 'breakfast', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },
  { id: 'hotel_014', polish: 'parking', english: 'parking', category: 'services', subcategory: 'hotel', difficulty: 'beginner' },

  // TELEKOMUNIKACJA (Telecommunications)
  { id: 'telecom_001', polish: 'telefon', english: 'phone', category: 'services', subcategory: 'telecommunications', difficulty: 'beginner' },
  { id: 'telecom_002', polish: 'internet', english: 'internet', category: 'services', subcategory: 'telecommunications', difficulty: 'beginner' },
  { id: 'telecom_003', polish: 'Wi-Fi', english: 'Wi-Fi', category: 'services', subcategory: 'telecommunications', difficulty: 'beginner' },
  { id: 'telecom_004', polish: 'router', english: 'router', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_005', polish: 'abonament', english: 'subscription', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_006', polish: 'rachunek', english: 'bill', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_007', polish: 'operator', english: 'carrier', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_008', polish: 'sieć', english: 'network', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_009', polish: 'sygnał', english: 'signal', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },
  { id: 'telecom_010', polish: 'połączenie', english: 'connection', category: 'services', subcategory: 'telecommunications', difficulty: 'intermediate' },

  // USŁUGI PRAWNE (Legal Services)
  { id: 'legal_001', polish: 'prawnik', english: 'lawyer', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_002', polish: 'sąd', english: 'court', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_003', polish: 'wyrok', english: 'verdict', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_004', polish: 'umowa', english: 'contract', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_005', polish: 'dokument', english: 'document', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_006', polish: 'podpis', english: 'signature', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_007', polish: 'testament', english: 'will', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_008', polish: 'notariusz', english: 'notary', category: 'services', subcategory: 'legal-services', difficulty: 'advanced' },
  { id: 'legal_009', polish: 'sprawa', english: 'case', category: 'services', subcategory: 'legal-services', difficulty: 'intermediate' },
  { id: 'legal_010', polish: 'pozwany', english: 'defendant', category: 'services', subcategory: 'legal-services', difficulty: 'advanced' },

  // URODA (Beauty & Personal Care)
  { id: 'beauty_001', polish: 'fryzjer', english: 'hairdresser', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_002', polish: 'salon piękności', english: 'beauty salon', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_003', polish: 'manicure', english: 'manicure', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_004', polish: 'pedicure', english: 'pedicure', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_005', polish: 'masaż', english: 'massage', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_006', polish: 'depilacja', english: 'hair removal', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_007', polish: 'fryzura', english: 'hairstyle', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_008', polish: 'strzyżenie', english: 'haircut', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_009', polish: 'koloryzacja', english: 'coloring', category: 'services', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_010', polish: 'makijaż', english: 'makeup', category: 'services', subcategory: 'beauty', difficulty: 'beginner' },

  // USŁUGI SPRZĄTAJĄCE (Cleaning Services)
  { id: 'cleaning_001', polish: 'sprzątanie', english: 'cleaning', category: 'services', subcategory: 'cleaning-services', difficulty: 'beginner' },
  { id: 'cleaning_002', polish: 'pranie', english: 'laundry', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_003', polish: 'prasowanie', english: 'ironing', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_004', polish: 'firma sprzątająca', english: 'cleaning company', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_005', polish: 'sprzątaczka', english: 'cleaner', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_006', polish: 'odkurzanie', english: 'vacuuming', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_007', polish: 'mycie okien', english: 'window cleaning', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },
  { id: 'cleaning_008', polish: 'pranie chemiczne', english: 'dry cleaning', category: 'services', subcategory: 'cleaning-services', difficulty: 'intermediate' },

  // USŁUGI NAPRAWCZE (Repair Services)
  { id: 'repair_001', polish: 'naprawa', english: 'repair', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_002', polish: 'serwis', english: 'service', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_003', polish: 'gwarancja', english: 'warranty', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_004', polish: 'mechanik', english: 'mechanic', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_005', polish: 'hydraulik', english: 'plumber', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_006', polish: 'elektryk', english: 'electrician', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_007', polish: 'warsztat', english: 'workshop', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_008', polish: 'diagnostyka', english: 'diagnostics', category: 'services', subcategory: 'repair-services', difficulty: 'advanced' },
  { id: 'repair_009', polish: 'koszt naprawy', english: 'repair cost', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
  { id: 'repair_010', polish: 'naprawa gwarancyjna', english: 'warranty repair', category: 'services', subcategory: 'repair-services', difficulty: 'intermediate' },
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
