/**
 * Mapping of subcategory IDs to their Polish and English names
 * Used for displaying theme names in the UI
 */

export interface SubcategoryName {
  polish: string;
  english: string;
}

export const subcategoryNames: Record<string, SubcategoryName> = {
  // People
  'body': { polish: 'CIAŁO', english: 'Body' },
  'face': { polish: 'TWARZ', english: 'Face' },
  'family': { polish: 'RODZINA', english: 'Family' },
  'emotions': { polish: 'EMOCJE', english: 'Emotions' },
  'personality': { polish: 'CHARAKTER', english: 'Personality' },
  'age': { polish: 'WIEK', english: 'Age' },
  'relationships': { polish: 'RELACJE', english: 'Relationships' },

  // Appearance
  'children-clothing': { polish: 'UBRANIA DZIECIĘCE', english: "Children's Clothing" },
  'mens-clothing': { polish: 'UBRANIA MĘSKIE', english: "Men's Clothing" },
  'womens-clothing': { polish: 'UBRANIA DAMSKIE', english: "Women's Clothing" },
  'accessories': { polish: 'AKCESORIA', english: 'Accessories' },
  'hair': { polish: 'WŁOSY', english: 'Hair' },
  'beauty': { polish: 'URODA', english: 'Beauty' },
  'upper-clothing': { polish: 'ODZIEŻ GÓRNA', english: 'Upper Body Clothing' },
  'lower-clothing': { polish: 'ODZIEŻ DOLNA', english: 'Lower Body Clothing' },
  'footwear': { polish: 'OBUWIE', english: 'Footwear' },
  'body-description': { polish: 'OPIS CIAŁA', english: 'Body Description' },
  'useful-phrases': { polish: 'PRZYDATNE ZWROTY', english: 'Useful Phrases' },

  // Health
  'illnesses': { polish: 'CHOROBY', english: 'Illnesses' },
  'doctor': { polish: 'LEKARZ', english: 'Doctor' },
  'injuries': { polish: 'URAZY', english: 'Injuries' },
  'hospital': { polish: 'SZPITAL', english: 'Hospital' },
  'dentist': { polish: 'DENTYSTA', english: 'Dentist' },
  'pharmacy': { polish: 'APTEKA', english: 'Pharmacy' },
  'symptoms': { polish: 'OBJAWY I CHOROBY', english: 'Symptoms & Conditions' },
  'medical-professionals': { polish: 'PERSONEL MEDYCZNY', english: 'Medical Professionals' },
  'medical-equipment': { polish: 'SPRZĘT MEDYCZNY', english: 'Medical Equipment' },
  'body-systems': { polish: 'UKŁADY CIAŁA', english: 'Body Systems' },
  'treatments': { polish: 'ZABIEGI', english: 'Treatments & Procedures' },
  'mental-health': { polish: 'ZDROWIE PSYCHICZNE', english: 'Mental Health' },

  // Home
  'furniture': { polish: 'MEBLE', english: 'Furniture' },
  'kitchen': { polish: 'KUCHNIA', english: 'Kitchen' },
  'bathroom': { polish: 'ŁAZIENKA', english: 'Bathroom' },
  'living-room': { polish: 'SALON', english: 'Living Room' },
  'bedroom': { polish: 'SYPIALNIA', english: 'Bedroom' },
  'dining-room': { polish: 'JADALNIA', english: 'Dining Room' },
  'home-office': { polish: 'GABINET', english: 'Home Office' },
  'garden': { polish: 'OGRÓD', english: 'Garden & Outdoor' },
  'maintenance': { polish: 'KONSERWACJA DOMU', english: 'Home Maintenance' },
  'appliances': { polish: 'URZĄDZENIA DOMOWE', english: 'Home Appliances' },
  'rooms': { polish: 'POMIESZCZENIA', english: 'Rooms & Spaces' },

  // Services
  'emergency': { polish: 'NAGŁE WYPADKI', english: 'Emergency' },
  'bank': { polish: 'BANK', english: 'Bank' },
  'post': { polish: 'POCZTA', english: 'Post Office' },
  'hotel': { polish: 'HOTEL', english: 'Hotel' },
  'telecommunications': { polish: 'TELEKOMUNIKACJA', english: 'Telecommunications' },
  'legal-services': { polish: 'USŁUGI PRAWNE', english: 'Legal Services' },
  'cleaning-services': { polish: 'USŁUGI SPRZĄTAJĄCE', english: 'Cleaning Services' },
  'repair-services': { polish: 'USŁUGI NAPRAWCZE', english: 'Repair Services' },

  // Shopping
  'shopping-center': { polish: 'CENTRUM HANDLOWE', english: 'Shopping Center' },
  'grocery': { polish: 'SKLEP SPOŻYWCZY', english: 'Grocery Store' },
  'buying': { polish: 'KUPOWANIE', english: 'Buying' },
  'clothing-store': { polish: 'UBRANIA', english: 'Clothing Store' },
  'bookstore': { polish: 'KSIĘGARNIA', english: 'Bookstore' },
  'store-types': { polish: 'RODZAJE SKLEPÓW', english: 'Store Types' },
  'payment-methods': { polish: 'METODY PŁATNOŚCI', english: 'Payment Methods' },
  'quantities': { polish: 'LISTY I ILOŚCI', english: 'Shopping Lists & Quantities' },
  'prices': { polish: 'CENY I PIENIĄDZE', english: 'Prices & Money' },
  'receipts': { polish: 'PARAGONY I ZWROTY', english: 'Receipts & Returns' },

  // Food
  'meat': { polish: 'MIĘSO', english: 'Meat' },
  'vegetables': { polish: 'WARZYWA', english: 'Vegetables' },
  'fruits': { polish: 'OWOCE', english: 'Fruits' },
  'bread': { polish: 'PIECZYWO', english: 'Bread' },
  'dairy': { polish: 'NABIAŁ', english: 'Dairy Products' },
  'grains': { polish: 'ZBOŻA', english: 'Grains & Cereals' },
  'beverages': { polish: 'NAPOJE', english: 'Beverages' },
  'spices': { polish: 'PRZYPRAWY', english: 'Spices & Seasonings' },
  'desserts': { polish: 'DESERY I SŁODYCZE', english: 'Desserts & Sweets' },
  'cooking-methods': { polish: 'METODY GOTOWANIA', english: 'Cooking Methods' },
  'utensils': { polish: 'NACZYNIA KUCHENNE', english: 'Kitchen Utensils' },
  'meals': { polish: 'POSIŁKI', english: 'Meals & Eating' },

  // Eating Out
  'cafe': { polish: 'KAWIARNIA', english: 'Café' },
  'bar': { polish: 'BAR', english: 'Bar' },
  'restaurant': { polish: 'RESTAURACJA', english: 'Restaurant' },
  'fastfood': { polish: 'FAST FOOD', english: 'Fast Food' },
  'breakfast': { polish: 'ŚNIADANIE', english: 'Breakfast' },
  'dinner': { polish: 'OBIAD', english: 'Dinner' },
  'restaurant-types': { polish: 'RODZAJE RESTAURACJI', english: 'Restaurant Types' },
  'restaurant-staff': { polish: 'PERSONEL RESTAURACYJNY', english: 'Restaurant Staff' },
  'ordering': { polish: 'ZAMAWIANIE', english: 'Ordering Food' },
  'dining-experience': { polish: 'DOŚWIADCZENIE', english: 'Dining Experience' },
  'courses': { polish: 'DANIA', english: 'Food Courses' },

  // Study
  'school': { polish: 'SZKOŁA', english: 'School' },
  'learning': { polish: 'NAUKA', english: 'Learning' },
  'supplies': { polish: 'MATERIAŁY SZKOLNE', english: 'School Supplies' },
  'subjects': { polish: 'PRZEDMIOTY', english: 'Subjects' },
  'language-learning': { polish: 'NAUKA JĘZYKÓW', english: 'Language Learning' },
  'facilities': { polish: 'POMIESZCZENIA SZKOLNE', english: 'School Facilities' },
  'academic-activities': { polish: 'AKTYWNOŚCI AKADEMICKIE', english: 'Academic Activities' },
  'university': { polish: 'UNIWERSYTET', english: 'University' },
  'science': { polish: 'NAUKA I BADANIA', english: 'Science & Research' },

  // Work
  'office': { polish: 'BIURO', english: 'Office' },
  'work-activities': { polish: 'PRACA', english: 'Work Activities' },
  'professions': { polish: 'ZAWODY', english: 'Professions' },
  'finance': { polish: 'FINANSE', english: 'Finance' },
  'job-search': { polish: 'POSZUKIWANIE PRACY', english: 'Job Search' },
  'workplace-communication': { polish: 'KOMUNIKACJA W PRACY', english: 'Workplace Communication' },
  'work-schedule': { polish: 'GRAFIK PRACY', english: 'Work Schedule' },
  'business-terms': { polish: 'TERMINY BIZNESOWE', english: 'Business Terms' },

  // Transport
  'car': { polish: 'SAMOCHÓD', english: 'Car' },
  'driving': { polish: 'PROWADZENIE', english: 'Driving' },
  'gas-station': { polish: 'STACJA BENZYNOWA', english: 'Gas Station' },
  'bus': { polish: 'AUTOBUS', english: 'Bus' },
  'train': { polish: 'POCIĄG', english: 'Train' },
  'airport': { polish: 'LOTNISKO', english: 'Airport' },
  'bicycle': { polish: 'ROWER', english: 'Bicycle' },
  'motorcycle': { polish: 'MOTOCYKL I SKUTER', english: 'Motorcycle & Scooter' },
  'water-transport': { polish: 'TRANSPORT WODNY', english: 'Water Transport' },
  'traffic-signs': { polish: 'RUCH DROGOWY', english: 'Traffic & Road Signs' },
  'parking': { polish: 'PARKING I GARAŻE', english: 'Parking & Garages' },
  'car-maintenance': { polish: 'KONSERWACJA SAMOCHODU', english: 'Car Maintenance' },

  // Sports
  'soccer': { polish: 'PIŁKA NOŻNA', english: 'Soccer' },
  'basketball': { polish: 'KOSZYKÓWKA', english: 'Basketball' },
  'tennis': { polish: 'TENIS', english: 'Tennis' },
  'swimming': { polish: 'PŁYWANIE', english: 'Swimming' },
  'gym': { polish: 'SIŁOWNIA', english: 'Gym' },
  'running': { polish: 'BIEGANIE', english: 'Running' },
  'winter-sports': { polish: 'SPORTY ZIMOWE', english: 'Winter Sports' },
  'general': { polish: 'SPORTY OGÓLNE', english: 'General Sports' },
  'team-sports': { polish: 'SPORTY DRUŻYNOWE', english: 'Team Sports' },
  'individual-sports': { polish: 'SPORTY INDYWIDUALNE', english: 'Individual Sports' },
  'sports-equipment': { polish: 'SPRZĘT SPORTOWY', english: 'Sports Equipment' },
  'sports-venues': { polish: 'OBIEKTY SPORTOWE', english: 'Sports Venues' },
  'fitness': { polish: 'FITNESS I ĆWICZENIA', english: 'Fitness & Exercise' },
  'sports-actions': { polish: 'AKCJE SPORTOWE', english: 'Sports Actions' },

  // Leisure
  'theater': { polish: 'TEATR', english: 'Theater' },
  'cinema': { polish: 'KINO', english: 'Cinema' },
  'music': { polish: 'MUZYKA', english: 'Music' },
  'beach': { polish: 'PLAŻA', english: 'Beach' },
  'camping': { polish: 'KEMPING', english: 'Camping' },
  'photography': { polish: 'FOTOGRAFIA', english: 'Photography' },
  'games': { polish: 'GRY', english: 'Games' },
  'entertainment': { polish: 'ROZRYWKA', english: 'Entertainment' },
  'reading': { polish: 'CZYTANIE', english: 'Reading' },
  'hobbies': { polish: 'HOBBY', english: 'Hobbies' },
  'outdoor-activities': { polish: 'AKTYWNOŚCI NA ZEWNĄTRZ', english: 'Outdoor Activities' },
  'social-activities': { polish: 'AKTYWNOŚCI SPOŁECZNE', english: 'Social Activities' },

  // Environment
  'space': { polish: 'KOSMOS', english: 'Space' },
  'earth': { polish: 'ZIEMIA', english: 'Earth' },
  'landscape': { polish: 'KRAJOBRAZ', english: 'Landscape' },
  'weather': { polish: 'POGODA', english: 'Weather' },
  'animals': { polish: 'ZWIERZĘTA', english: 'Animals' },
  'birds': { polish: 'PTAKI', english: 'Birds' },
  'plants': { polish: 'ROŚLINY', english: 'Plants & Trees' },
  'water-bodies': { polish: 'ZBIORNIKI WODNE', english: 'Water Bodies' },
  'seasons': { polish: 'PORY ROKU', english: 'Seasons' },
  'natural-disasters': { polish: 'KATASTROFY NATURALNE', english: 'Natural Disasters' },
  'conservation': { polish: 'OCHRONA ŚRODOWISKA', english: 'Conservation & Ecology' },
  'insects': { polish: 'OWADY I MAŁE ZWIERZĘTA', english: 'Insects & Small Animals' },

  // Reference / Information
  'time': { polish: 'CZAS', english: 'Time' },
  'calendar': { polish: 'KALENDARZ', english: 'Calendar' },
  'numbers': { polish: 'LICZBY', english: 'Numbers' },
  'colors': { polish: 'KOLORY', english: 'Colors' },
  'phrases': { polish: 'PRZYDATNE ZWROTY', english: 'Useful Phrases' },
  'shapes': { polish: 'KSZTAŁTY', english: 'Shapes' },
  'directions': { polish: 'KIERUNKI', english: 'Directions' },
  'measurements': { polish: 'POMIARY', english: 'Measurements' },
  'questions': { polish: 'PODSTAWOWE PYTANIA', english: 'Basic Questions' },

  // Grammar
  'sentence-constructions': { polish: 'KONSTRUKCJE ZDAŃ', english: 'Sentence Constructions' },
  'prepositions': { polish: 'PRZYIMKI', english: 'Prepositions' },
  'conjunctions': { polish: 'SPÓJNIKI', english: 'Conjunctions' },
  'numerals': { polish: 'LICZEBNIKI', english: 'Numerals' },
  'verbs': { polish: 'CZASOWNIKI', english: 'Verbs' },
  'top-verbs': { polish: 'NAJWAŻNIEJSZE CZASOWNIKI', english: 'Most Important Verbs' },
};

/**
 * Get Polish and English names for a subcategory ID
 * Falls back to formatted ID if not found in mapping
 */
export function getSubcategoryName(subcategoryId: string): SubcategoryName {
  if (subcategoryNames[subcategoryId]) {
    return subcategoryNames[subcategoryId];
  }
  
  // Fallback: format the ID
  const formatted = subcategoryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    polish: formatted,
    english: formatted,
  };
}
