import { VocabularyWord } from '@/types';

export const healthVocabulary: VocabularyWord[] = [
  // CHOROBY (Illnesses)
  { id: 'illness_001', polish: 'choroba', english: 'illness', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_002', polish: 'przeziębienie', english: 'cold', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_003', polish: 'grypa', english: 'flu', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_004', polish: 'gorączka', english: 'fever', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_005', polish: 'kaszel', english: 'cough', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_006', polish: 'ból głowy', english: 'headache', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_007', polish: 'ból gardła', english: 'sore throat', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_008', polish: 'ból brzucha', english: 'stomachache', category: 'health', subcategory: 'illnesses', difficulty: 'beginner' },
  { id: 'illness_009', polish: 'nudności', english: 'nausea', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_010', polish: 'biegunka', english: 'diarrhea', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_011', polish: 'zaparcie', english: 'constipation', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_012', polish: 'alergia', english: 'allergy', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_013', polish: 'astma', english: 'asthma', category: 'health', subcategory: 'illnesses', difficulty: 'intermediate' },
  { id: 'illness_014', polish: 'cukrzyca', english: 'diabetes', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },
  { id: 'illness_015', polish: 'nadciśnienie', english: 'high blood pressure', category: 'health', subcategory: 'illnesses', difficulty: 'advanced' },

  // LEKARZ (Doctor)
  { id: 'doctor_001', polish: 'lekarz', english: 'doctor', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_002', polish: 'pielęgniarka', english: 'nurse', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_003', polish: 'pacjent', english: 'patient', category: 'health', subcategory: 'doctor', difficulty: 'beginner' },
  { id: 'doctor_004', polish: 'gabinet lekarski', english: 'doctor\'s office', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_005', polish: 'wizyta', english: 'appointment', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_006', polish: 'recepta', english: 'prescription', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_007', polish: 'badanie', english: 'examination', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_008', polish: 'diagnoza', english: 'diagnosis', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_009', polish: 'leczenie', english: 'treatment', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_010', polish: 'zastrzyk', english: 'injection', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_011', polish: 'szczepionka', english: 'vaccine', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },
  { id: 'doctor_012', polish: 'termometr', english: 'thermometer', category: 'health', subcategory: 'doctor', difficulty: 'intermediate' },

  // URAZY (Injuries)
  { id: 'injury_001', polish: 'rana', english: 'wound', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_002', polish: 'skaleczenie', english: 'cut', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_003', polish: 'oparzenie', english: 'burn', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_004', polish: 'siniak', english: 'bruise', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_005', polish: 'zwichnięcie', english: 'sprain', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_006', polish: 'złamanie', english: 'fracture', category: 'health', subcategory: 'injuries', difficulty: 'advanced' },
  { id: 'injury_007', polish: 'krwawienie', english: 'bleeding', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_008', polish: 'opatrunek', english: 'bandage', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },
  { id: 'injury_009', polish: 'plaster', english: 'band-aid', category: 'health', subcategory: 'injuries', difficulty: 'beginner' },
  { id: 'injury_010', polish: 'gips', english: 'cast', category: 'health', subcategory: 'injuries', difficulty: 'intermediate' },

  // SZPITAL (Hospital)
  { id: 'hospital_001', polish: 'szpital', english: 'hospital', category: 'health', subcategory: 'hospital', difficulty: 'beginner' },
  { id: 'hospital_002', polish: 'pogotowie', english: 'emergency', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_003', polish: 'izba przyjęć', english: 'emergency room', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_004', polish: 'oddział', english: 'ward', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_005', polish: 'sala operacyjna', english: 'operating room', category: 'health', subcategory: 'hospital', difficulty: 'advanced' },
  { id: 'hospital_006', polish: 'operacja', english: 'surgery', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_007', polish: 'chirurg', english: 'surgeon', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_008', polish: 'karetka', english: 'ambulance', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_009', polish: 'wózek inwalidzki', english: 'wheelchair', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },
  { id: 'hospital_010', polish: 'kule', english: 'crutches', category: 'health', subcategory: 'hospital', difficulty: 'intermediate' },

  // DENTYSTA (Dentist)
  { id: 'dentist_001', polish: 'dentysta', english: 'dentist', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_002', polish: 'ząb', english: 'tooth', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_003', polish: 'dziąsło', english: 'gum', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_004', polish: 'próchnica', english: 'cavity', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_005', polish: 'plomba', english: 'filling', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_006', polish: 'korona', english: 'crown', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_007', polish: 'ból zęba', english: 'toothache', category: 'health', subcategory: 'dentist', difficulty: 'beginner' },
  { id: 'dentist_008', polish: 'aparat ortodontyczny', english: 'braces', category: 'health', subcategory: 'dentist', difficulty: 'advanced' },
  { id: 'dentist_009', polish: 'nić dentystyczna', english: 'dental floss', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },
  { id: 'dentist_010', polish: 'płyn do płukania ust', english: 'mouthwash', category: 'health', subcategory: 'dentist', difficulty: 'intermediate' },

  // APTEKA (Pharmacy)
  { id: 'pharmacy_001', polish: 'apteka', english: 'pharmacy', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_002', polish: 'farmaceuta', english: 'pharmacist', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_003', polish: 'lek', english: 'medicine', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_004', polish: 'tabletka', english: 'pill', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_005', polish: 'kapsułka', english: 'capsule', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_006', polish: 'syrop', english: 'syrup', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_007', polish: 'maść', english: 'ointment', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_008', polish: 'krople', english: 'drops', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_009', polish: 'antybiotyk', english: 'antibiotic', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_010', polish: 'środek przeciwbólowy', english: 'painkiller', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },
  { id: 'pharmacy_011', polish: 'witaminy', english: 'vitamins', category: 'health', subcategory: 'pharmacy', difficulty: 'beginner' },
  { id: 'pharmacy_012', polish: 'suplement diety', english: 'dietary supplement', category: 'health', subcategory: 'pharmacy', difficulty: 'intermediate' },

  // OBJAWY I CHOROBY (Symptoms & Conditions)
  { id: 'symptoms_001', polish: 'katar', english: 'runny nose', category: 'health', subcategory: 'symptoms', difficulty: 'beginner' },
  { id: 'symptoms_002', polish: 'ból', english: 'pain', category: 'health', subcategory: 'symptoms', difficulty: 'beginner' },
  { id: 'symptoms_003', polish: 'zmęczenie', english: 'fatigue', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_004', polish: 'osłabienie', english: 'weakness', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_005', polish: 'zawroty głowy', english: 'dizziness', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_006', polish: 'wymioty', english: 'vomiting', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_007', polish: 'wysypka', english: 'rash', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_008', polish: 'swędzenie', english: 'itching', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_009', polish: 'dreszcze', english: 'chills', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_010', polish: 'pocenie się', english: 'sweating', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_011', polish: 'duszność', english: 'shortness of breath', category: 'health', subcategory: 'symptoms', difficulty: 'advanced' },
  { id: 'symptoms_012', polish: 'ból w klatce piersiowej', english: 'chest pain', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_013', polish: 'bezsenność', english: 'insomnia', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },
  { id: 'symptoms_014', polish: 'utrata apetytu', english: 'loss of appetite', category: 'health', subcategory: 'symptoms', difficulty: 'intermediate' },

  // PERSONEL MEDYCZNY (Medical Professionals)
  { id: 'professionals_001', polish: 'chirurg', english: 'surgeon', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },
  { id: 'professionals_002', polish: 'pediatra', english: 'pediatrician', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },
  { id: 'professionals_003', polish: 'ginekolog', english: 'gynecologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },
  { id: 'professionals_004', polish: 'kardiolog', english: 'cardiologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_005', polish: 'neurolog', english: 'neurologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_006', polish: 'ortopeda', english: 'orthopedist', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_007', polish: 'dermatolog', english: 'dermatologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_008', polish: 'okulista', english: 'ophthalmologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_009', polish: 'laryngolog', english: 'ENT doctor', category: 'health', subcategory: 'medical-professionals', difficulty: 'advanced' },
  { id: 'professionals_010', polish: 'psychiatra', english: 'psychiatrist', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },
  { id: 'professionals_011', polish: 'psycholog', english: 'psychologist', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },
  { id: 'professionals_012', polish: 'fizjoterapeuta', english: 'physiotherapist', category: 'health', subcategory: 'medical-professionals', difficulty: 'intermediate' },

  // SPRZĘT MEDYCZNY (Medical Equipment)
  { id: 'equipment_001', polish: 'stetoskop', english: 'stethoscope', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },
  { id: 'equipment_002', polish: 'strzykawka', english: 'syringe', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },
  { id: 'equipment_003', polish: 'bandaże', english: 'bandages', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },
  { id: 'equipment_004', polish: 'leki', english: 'medicine', category: 'health', subcategory: 'medical-equipment', difficulty: 'beginner' },
  { id: 'equipment_005', polish: 'ciśnieniomierz', english: 'blood pressure monitor', category: 'health', subcategory: 'medical-equipment', difficulty: 'advanced' },
  { id: 'equipment_006', polish: 'maska tlenowa', english: 'oxygen mask', category: 'health', subcategory: 'medical-equipment', difficulty: 'advanced' },
  { id: 'equipment_007', polish: 'defibrylator', english: 'defibrillator', category: 'health', subcategory: 'medical-equipment', difficulty: 'advanced' },
  { id: 'equipment_008', polish: 'igła', english: 'needle', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },
  { id: 'equipment_009', polish: 'nożyczki medyczne', english: 'medical scissors', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },
  { id: 'equipment_010', polish: 'pinceta', english: 'tweezers', category: 'health', subcategory: 'medical-equipment', difficulty: 'intermediate' },

  // UKŁADY CIAŁA (Body Systems)
  { id: 'body_systems_001', polish: 'układ krążenia', english: 'circulatory system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_002', polish: 'układ oddechowy', english: 'respiratory system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_003', polish: 'układ pokarmowy', english: 'digestive system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_004', polish: 'układ nerwowy', english: 'nervous system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_005', polish: 'układ kostny', english: 'skeletal system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_006', polish: 'układ mięśniowy', english: 'muscular system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_007', polish: 'układ odpornościowy', english: 'immune system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },
  { id: 'body_systems_008', polish: 'układ hormonalny', english: 'endocrine system', category: 'health', subcategory: 'body-systems', difficulty: 'advanced' },

  // ZABIEGI (Treatments & Procedures)
  { id: 'treatments_001', polish: 'rehabilitacja', english: 'rehabilitation', category: 'health', subcategory: 'treatments', difficulty: 'intermediate' },
  { id: 'treatments_002', polish: 'terapia', english: 'therapy', category: 'health', subcategory: 'treatments', difficulty: 'intermediate' },
  { id: 'treatments_003', polish: 'fizjoterapia', english: 'physiotherapy', category: 'health', subcategory: 'treatments', difficulty: 'intermediate' },
  { id: 'treatments_004', polish: 'masaż', english: 'massage', category: 'health', subcategory: 'treatments', difficulty: 'intermediate' },
  { id: 'treatments_005', polish: 'akupunktura', english: 'acupuncture', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },
  { id: 'treatments_006', polish: 'chemioterapia', english: 'chemotherapy', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },
  { id: 'treatments_007', polish: 'radioterapia', english: 'radiotherapy', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },
  { id: 'treatments_008', polish: 'dializa', english: 'dialysis', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },
  { id: 'treatments_009', polish: 'transplantacja', english: 'transplant', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },
  { id: 'treatments_010', polish: 'biopsja', english: 'biopsy', category: 'health', subcategory: 'treatments', difficulty: 'advanced' },

  // ZDROWIE PSYCHICZNE (Mental Health)
  { id: 'mental_health_001', polish: 'depresja', english: 'depression', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_002', polish: 'stres', english: 'stress', category: 'health', subcategory: 'mental-health', difficulty: 'beginner' },
  { id: 'mental_health_003', polish: 'lęk', english: 'anxiety', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_004', polish: 'panika', english: 'panic', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_005', polish: 'fobia', english: 'phobia', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_006', polish: 'terapia psychologiczna', english: 'psychological therapy', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_007', polish: 'konsultacja', english: 'consultation', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_008', polish: 'wsparcie', english: 'support', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_009', polish: 'samopoczucie', english: 'well-being', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
  { id: 'mental_health_010', polish: 'relaks', english: 'relaxation', category: 'health', subcategory: 'mental-health', difficulty: 'intermediate' },
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
