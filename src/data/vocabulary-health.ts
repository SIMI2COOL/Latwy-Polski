import { VocabularyWord } from '@/types';

export const healthVocabulary: VocabularyWord[] = [
  // CHOROBY (Illnesses)
  { id: 'illness_001', polish: 'choroba', spanish: 'illness', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_002', polish: 'przeziębienie', spanish: 'cold', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_003', polish: 'grypa', spanish: 'flu', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_004', polish: 'gorączka', spanish: 'fever', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_005', polish: 'kaszel', spanish: 'cough', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_006', polish: 'ból głowy', spanish: 'headache', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_007', polish: 'ból gardła', spanish: 'sore throat', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_008', polish: 'ból brzucha', spanish: 'stomachache', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_009', polish: 'nudności', spanish: 'nausea', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_010', polish: 'biegunka', spanish: 'diarrhea', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_011', polish: 'zaparcie', spanish: 'constipation', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_012', polish: 'alergia', spanish: 'allergy', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_013', polish: 'astma', spanish: 'asthma', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_014', polish: 'cukrzyca', spanish: 'diabetes', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },
  { id: 'illness_015', polish: 'nadciśnienie', spanish: 'high blood pressure', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },

  // LEKARZ (Doctor)
  { id: 'doctor_001', polish: 'lekarz', spanish: 'doctor', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_002', polish: 'pielęgniarka', spanish: 'nurse', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_003', polish: 'pacjent', spanish: 'patient', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_004', polish: 'gabinet lekarski', spanish: 'doctor\'s office', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_005', polish: 'wizyta', spanish: 'appointment', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_006', polish: 'recepta', spanish: 'prescription', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_007', polish: 'badanie', spanish: 'examination', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_008', polish: 'diagnoza', spanish: 'diagnosis', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_009', polish: 'leczenie', spanish: 'treatment', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_010', polish: 'zastrzyk', spanish: 'injection', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_011', polish: 'szczepionka', spanish: 'vaccine', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_012', polish: 'termometr', spanish: 'thermometer', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },

  // URAZY (Injuries)
  { id: 'injury_001', polish: 'rana', spanish: 'wound', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_002', polish: 'skaleczenie', spanish: 'cut', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_003', polish: 'oparzenie', spanish: 'burn', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_004', polish: 'siniak', spanish: 'bruise', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_005', polish: 'zwichnięcie', spanish: 'sprain', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_006', polish: 'złamanie', spanish: 'fracture', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_007', polish: 'krwawienie', spanish: 'bleeding', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_008', polish: 'opatrunek', spanish: 'bandage', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_009', polish: 'plaster', spanish: 'band-aid', category: 'health', subcategory: 'injuries', difficulty: 'beginner' },
  { id: 'injury_010', polish: 'gips', spanish: 'cast', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },

  // SZPITAL (Hospital)
  { id: 'hospital_001', polish: 'szpital', spanish: 'hospital', category: 'health', subcategory: 'hospital', difficulty: 'beginner' },
  { id: 'hospital_002', polish: 'pogotowie', spanish: 'emergency', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_003', polish: 'izba przyjęć', spanish: 'emergency room', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_004', polish: 'oddział', spanish: 'ward', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_005', polish: 'sala operacyjna', spanish: 'operating room', category: 'health', subcategory: 'hospital', difficulty: 'advanced' },
  { id: 'hospital_006', polish: 'operacja', spanish: 'surgery', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_007', polish: 'chirurg', spanish: 'surgeon', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_008', polish: 'karetka', spanish: 'ambulance', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_009', polish: 'wózek inwalidzki', spanish: 'wheelchair', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_010', polish: 'kule', spanish: 'crutches', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },

  // DENTYSTA (Dentist)
  { id: 'dentist_001', polish: 'dentysta', spanish: 'dentist', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_002', polish: 'ząb', spanish: 'tooth', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_003', polish: 'dziąsło', spanish: 'gum', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_004', polish: 'próchnica', spanish: 'cavity', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_005', polish: 'plomba', spanish: 'filling', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_006', polish: 'korona', spanish: 'crown', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_007', polish: 'ból zęba', spanish: 'toothache', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_008', polish: 'aparat ortodontyczny', spanish: 'braces', category: 'health', subcategory: 'dentist', difficulty: 'advanced' },
  { id: 'dentist_009', polish: 'nić dentystyczna', spanish: 'dental floss', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_010', polish: 'płyn do płukania ust', spanish: 'mouthwash', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },

  // APTEKA (Pharmacy)
  { id: 'pharmacy_001', polish: 'apteka', spanish: 'pharmacy', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_002', polish: 'farmaceuta', spanish: 'pharmacist', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_003', polish: 'lek', spanish: 'medicine', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_004', polish: 'tabletka', spanish: 'pill', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_005', polish: 'kapsułka', spanish: 'capsule', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_006', polish: 'syrop', spanish: 'syrup', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_007', polish: 'maść', spanish: 'ointment', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_008', polish: 'krople', spanish: 'drops', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_009', polish: 'antybiotyk', spanish: 'antibiotic', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_010', polish: 'środek przeciwbólowy', spanish: 'painkiller', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_011', polish: 'witaminy', spanish: 'vitamins', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_012', polish: 'suplement diety', spanish: 'dietary supplement', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
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
