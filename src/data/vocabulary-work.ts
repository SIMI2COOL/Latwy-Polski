import { VocabularyWord } from '@/types';

export const workVocabulary: VocabularyWord[] = [
  // BIURO (Office)
  { id: 'office_001', polish: 'biuro', english: 'office', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_002', polish: 'biurko', english: 'desk', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_003', polish: 'krzesło biurowe', english: 'office chair', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_004', polish: 'komputer', english: 'computer', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_005', polish: 'laptop', english: 'laptop', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_006', polish: 'klawiatura', english: 'keyboard', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_007', polish: 'myszka', english: 'mouse', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_008', polish: 'monitor', english: 'monitor', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_009', polish: 'drukarka', english: 'printer', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_010', polish: 'skaner', english: 'scanner', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_011', polish: 'telefon', english: 'telephone', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_012', polish: 'faks', english: 'fax', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_013', polish: 'kosz na śmieci', english: 'trash can', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_014', polish: 'szafa na akta', english: 'filing cabinet', category: 'work', subcategory: 'office', difficulty: 'advanced' },
  { id: 'office_015', polish: 'tablica korkowa', english: 'bulletin board', category: 'work', subcategory: 'office', difficulty: 'intermediate' },

  // PRACA (Work Activities)
  { id: 'work_act_001', polish: 'praca', english: 'work', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_002', polish: 'pracować', english: 'to work', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_003', polish: 'pracownik', english: 'employee', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_004', polish: 'pracodawca', english: 'employer', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_005', polish: 'szef', english: 'boss', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_006', polish: 'kolega z pracy', english: 'colleague', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_007', polish: 'spotkanie', english: 'meeting', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_008', polish: 'prezentacja', english: 'presentation', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_009', polish: 'projekt', english: 'project', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_010', polish: 'termin', english: 'deadline', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_011', polish: 'raport', english: 'report', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_012', polish: 'dokument', english: 'document', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_013', polish: 'umowa', english: 'contract', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_014', polish: 'podpis', english: 'signature', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_015', polish: 'urlop', english: 'vacation', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },

  // ZAWODY (Professions)
  { id: 'professions_001', polish: 'lekarz', english: 'doctor', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_002', polish: 'pielęgniarka', english: 'nurse', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_003', polish: 'nauczyciel', english: 'teacher', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_004', polish: 'policjant', english: 'police officer', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_005', polish: 'strażak', english: 'firefighter', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_006', polish: 'inżynier', english: 'engineer', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_007', polish: 'architekt', english: 'architect', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_008', polish: 'prawnik', english: 'lawyer', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_009', polish: 'księgowy', english: 'accountant', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_010', polish: 'programista', english: 'programmer', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_011', polish: 'dziennikarz', english: 'journalist', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_012', polish: 'fotograf', english: 'photographer', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_013', polish: 'fryzjer', english: 'hairdresser', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_014', polish: 'kucharz', english: 'chef', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_015', polish: 'kelner', english: 'waiter', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_016', polish: 'sprzedawca', english: 'salesperson', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_017', polish: 'mechanik', english: 'mechanic', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_018', polish: 'elektryk', english: 'electrician', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_019', polish: 'hydraulik', english: 'plumber', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_020', polish: 'malarz', english: 'painter', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },

  // FINANSE (Finance)
  { id: 'finance_001', polish: 'pensja', english: 'salary', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_002', polish: 'wynagrodzenie', english: 'wage', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_003', polish: 'premia', english: 'bonus', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_004', polish: 'podwyżka', english: 'raise', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_005', polish: 'podatek', english: 'tax', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_006', polish: 'ubezpieczenie', english: 'insurance', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_007', polish: 'emerytura', english: 'retirement', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_008', polish: 'faktura', english: 'invoice', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_009', polish: 'budżet', english: 'budget', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_010', polish: 'zysk', english: 'profit', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },

  // POSZUKIWANIE PRACY (Job Search)
  { id: 'job_search_001', polish: 'praca', english: 'job', category: 'work', subcategory: 'job-search', difficulty: 'beginner' },
  { id: 'job_search_002', polish: 'ogłoszenie o pracę', english: 'job posting', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_003', polish: 'CV', english: 'resume', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_004', polish: 'list motywacyjny', english: 'cover letter', category: 'work', subcategory: 'job-search', difficulty: 'advanced' },
  { id: 'job_search_005', polish: 'rozmowa kwalifikacyjna', english: 'job interview', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_006', polish: 'kandydat', english: 'candidate', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_007', polish: 'doświadczenie', english: 'experience', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_008', polish: 'kwalifikacje', english: 'qualifications', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_009', polish: 'umiejętności', english: 'skills', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_010', polish: 'zatrudnić', english: 'to hire', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_011', polish: 'zwolnić', english: 'to fire', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_012', polish: 'awans', english: 'promotion', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },

  // KOMUNIKACJA W PRACY (Workplace Communication)
  { id: 'communication_001', polish: 'e-mail', english: 'email', category: 'work', subcategory: 'workplace-communication', difficulty: 'beginner' },
  { id: 'communication_002', polish: 'spotkanie', english: 'meeting', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },
  { id: 'communication_003', polish: 'prezentacja', english: 'presentation', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },
  { id: 'communication_004', polish: 'rozmowa', english: 'conversation', category: 'work', subcategory: 'workplace-communication', difficulty: 'beginner' },
  { id: 'communication_005', polish: 'raport', english: 'report', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },
  { id: 'communication_006', polish: 'wiadomość', english: 'message', category: 'work', subcategory: 'workplace-communication', difficulty: 'beginner' },
  { id: 'communication_007', polish: 'telefon', english: 'phone call', category: 'work', subcategory: 'workplace-communication', difficulty: 'beginner' },
  { id: 'communication_008', polish: 'wideokonferencja', english: 'video conference', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },
  { id: 'communication_009', polish: 'dyskusja', english: 'discussion', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },
  { id: 'communication_010', polish: 'negocjacje', english: 'negotiations', category: 'work', subcategory: 'workplace-communication', difficulty: 'intermediate' },

  // GRAFIK PRACY (Work Schedule)
  { id: 'schedule_001', polish: 'godziny pracy', english: 'working hours', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_002', polish: 'przerwa', english: 'break', category: 'work', subcategory: 'work-schedule', difficulty: 'beginner' },
  { id: 'schedule_003', polish: 'nadgodziny', english: 'overtime', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_004', polish: 'zmiana', english: 'shift', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_005', polish: 'weekend', english: 'weekend', category: 'work', subcategory: 'work-schedule', difficulty: 'beginner' },
  { id: 'schedule_006', polish: 'urlop', english: 'vacation', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_007', polish: 'dzień wolny', english: 'day off', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_008', polish: 'harmonogram', english: 'schedule', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_009', polish: 'dyżur', english: 'duty', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },
  { id: 'schedule_010', polish: 'grafik', english: 'roster', category: 'work', subcategory: 'work-schedule', difficulty: 'intermediate' },

  // TERMINY BIZNESOWE (Business Terms)
  { id: 'business_001', polish: 'firma', english: 'company', category: 'work', subcategory: 'business-terms', difficulty: 'beginner' },
  { id: 'business_002', polish: 'klient', english: 'client', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_003', polish: 'kontrakt', english: 'contract', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_004', polish: 'zysk', english: 'profit', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_005', polish: 'strata', english: 'loss', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_006', polish: 'budżet', english: 'budget', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_007', polish: 'inwestycja', english: 'investment', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_008', polish: 'strategia', english: 'strategy', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_009', polish: 'marketing', english: 'marketing', category: 'work', subcategory: 'business-terms', difficulty: 'intermediate' },
  { id: 'business_010', polish: 'sprzedaż', english: 'sales', category: 'work', subcategory: 'business-terms', difficulty: 'beginner' },

  // PRZYDATNE ZWROTY (Useful Phrases - Work)
  { id: 'work_phrases_001', polish: 'gdzie pracujesz?', english: 'where do you work?', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_002', polish: 'co robisz w pracy?', english: 'what do you do at work?', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_003', polish: 'mam spotkanie', english: 'I have a meeting', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_004', polish: 'czy mogę z tobą porozmawiać?', english: 'can I talk to you?', category: 'work', subcategory: 'useful-phrases', difficulty: 'intermediate' },
  { id: 'work_phrases_005', polish: 'co jestem winien?', english: 'what do I owe?', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_006', polish: 'mam przerwę', english: 'I have a break', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_007', polish: 'kiedy wracasz?', english: 'when are you back?', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_008', polish: 'dobra robota', english: 'good job', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_009', polish: 'szukam pracy', english: 'I am looking for a job', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'work_phrases_010', polish: 'mam urlop', english: 'I have vacation', category: 'work', subcategory: 'useful-phrases', difficulty: 'beginner' },
];

export async function seedWorkVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing work vocabulary IDs
    const existingWork = await db.vocabulary.where('category').equals('work').toArray();
    const existingIds = new Set(existingWork.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = workVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new work words`);
    }
    
    // Always update total word count
    const totalCount = await db.vocabulary.where('category').equals('work').count();
    await db.categories.update('work', { totalWords: totalCount });
    console.log(`✅ Work vocabulary: ${totalCount} total words (${workVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingWork = await db.vocabulary.where('category').equals('work').toArray();
      const existingIds = new Set(existingWork.map(w => w.id));
      const newWords = workVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining work words:', e);
        }
      }
      
      // Always update total word count
      const totalCount = await db.vocabulary.where('category').equals('work').count();
      await db.categories.update('work', { totalWords: totalCount });
      console.log(`✅ Work vocabulary: ${totalCount} total words`);
      return true;
    }
    console.error('Error seeding work vocabulary:', error);
    return false;
  }
}
