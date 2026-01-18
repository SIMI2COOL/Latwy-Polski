// Mapping of subcategory IDs to Spanish and Polish names
export const subcategoryNames: Record<string, { spanish: string; polish: string }> = {
  // People
  'body': { spanish: 'CUERPO', polish: 'CIAŁO' },
  'face': { spanish: 'CARA', polish: 'TWARZ' },
  'family': { spanish: 'FAMILIA', polish: 'RODZINA' },
  'emotions': { spanish: 'EMOCIONES', polish: 'EMOCJE' },
  
  // Food
  'meat': { spanish: 'CARNE', polish: 'MIĘSO' },
  'vegetables': { spanish: 'VERDURAS', polish: 'WARZYWA' },
  'fruits': { spanish: 'FRUTAS', polish: 'OWOCE' },
  'bread': { spanish: 'PAN', polish: 'PIECZYWO' },
  'drinks': { spanish: 'BEBIDAS', polish: 'NAPOJE' },
  
  // Home
  'furniture': { spanish: 'MUEBLES', polish: 'MEBLE' },
  'kitchen': { spanish: 'COCINA', polish: 'KUCHNIA' },
  'bathroom': { spanish: 'BAÑO', polish: 'ŁAZIENKA' },
  'rooms': { spanish: 'CUARTOS', polish: 'POKOJE' },
  'garden': { spanish: 'JARDÍN', polish: 'OGROD' },
  
  // Transport
  'car': { spanish: 'COCHE', polish: 'SAMOCHÓD' },
  'driving': { spanish: 'CONDUCCIÓN', polish: 'PROWADZENIE' },
  'gas-station': { spanish: 'GASOLINERA', polish: 'STACJA BENZYNOWA' },
  'bus': { spanish: 'AUTOBÚS', polish: 'AUTOBUS' },
  'train': { spanish: 'TREN', polish: 'POCIĄG' },
  'airplane': { spanish: 'AVIÓN', polish: 'SAMOLOT' },
  'airport': { spanish: 'AEROPUERTO', polish: 'LOTNISKO' },
  'bicycle': { spanish: 'BICICLETA', polish: 'ROWER' },
  
  // Study
  'school': { spanish: 'ESCUELA', polish: 'SZKOŁA' },
  'learning': { spanish: 'APRENDIZAJE', polish: 'NAUKA' },
  'supplies': { spanish: 'MATERIALES', polish: 'MATERIAŁY SZKOLNE' },
  'subjects': { spanish: 'ASIGNATURAS', polish: 'PRZEDMIOTY' },
  'language-learning': { spanish: 'APRENDIZAJE DE IDIOMAS', polish: 'NAUKA JĘZYKÓW' },
  'sciences': { spanish: 'CIENCIAS', polish: 'NAUKI' },
  
  // Work
  'office': { spanish: 'OFICINA', polish: 'BIURO' },
  'work-activities': { spanish: 'ACTIVIDADES LABORALES', polish: 'PRACA' },
  'professions': { spanish: 'PROFESIONES', polish: 'ZAWODY' },
  'finance': { spanish: 'FINANZAS', polish: 'FINANSE' },
  'job-search': { spanish: 'BÚSQUEDA DE EMPLEO', polish: 'POSZUKIWANIE PRACY' },
  
  // Eating Out
  'cafe': { spanish: 'CAFETERÍA', polish: 'KAWIARNIA' },
  'bar': { spanish: 'BAR', polish: 'BAR' },
  'restaurant': { spanish: 'RESTAURANTE', polish: 'RESTAURACJA' },
  'fastfood': { spanish: 'COMIDA RÁPIDA', polish: 'FAST FOOD' },
  'breakfast': { spanish: 'DESAYUNO', polish: 'ŚNIADANIE' },
  'dinner': { spanish: 'CENA', polish: 'OBIAD' },
  
  // Appearance
  'children-clothing': { spanish: 'ROPA DE NIÑOS', polish: 'UBRANIA DZIECIĘCE' },
  'mens-clothing': { spanish: 'ROPA DE HOMBRE', polish: 'UBRANIA MĘSKIE' },
  'womens-clothing': { spanish: 'ROPA DE MUJER', polish: 'UBRANIA DAMSKIE' },
  'shoes': { spanish: 'ZAPATOS', polish: 'BUTY' },
  'accessories': { spanish: 'ACCESORIOS', polish: 'AKCESORIA' },
  'jewelry': { spanish: 'JOYERÍA', polish: 'BIŻUTERIA' },
  'hair': { spanish: 'PELO', polish: 'WŁOSY' },
  'beauty': { spanish: 'BELLEZA', polish: 'URODA' },
  
  // Health
  'illnesses': { spanish: 'ENFERMEDADES', polish: 'CHOROBY' },
  'doctor': { spanish: 'MÉDICO', polish: 'LEKARZ' },
  'injuries': { spanish: 'LESIONES', polish: 'URAZY' },
  'hospital': { spanish: 'HOSPITAL', polish: 'SZPITAL' },
  'dentist': { spanish: 'DENTISTA', polish: 'DENTYSTA' },
  'pharmacy': { spanish: 'FARMACIA', polish: 'APTEKA' },
  'medications': { spanish: 'MEDICAMENTOS', polish: 'LEKI' },
  'body-parts': { spanish: 'PARTES DEL CUERPO', polish: 'CZĘŚCI CIAŁA' },
  
  // Shopping
  'shopping-center': { spanish: 'CENTRO COMERCIAL', polish: 'CENTRUM HANDLOWE' },
  'grocery': { spanish: 'TIENDA DE COMESTIBLES', polish: 'SKLEP SPOŻYWCZY' },
  'supermarket': { spanish: 'SUPERMERCADO', polish: 'SKLEP' },
  'buying': { spanish: 'COMPRAR', polish: 'KUPOWANIE' },
  'clothing-store': { spanish: 'TIENDA DE ROPA', polish: 'SKLEP ODZIEŻOWY' },
  'bookstore': { spanish: 'LIBRERÍA', polish: 'KSIĘGARNIA' },
  
  // Sports
  'soccer': { spanish: 'FÚTBOL', polish: 'PIŁKA NOŻNA' },
  'basketball': { spanish: 'BALONCESTO', polish: 'KOSZYKÓWKA' },
  'tennis': { spanish: 'TENIS', polish: 'TENIS' },
  'volleyball': { spanish: 'VOLEY', polish: 'SIATKÓWKA' },
  'rugby': { spanish: 'RUGBY', polish: 'RUGBY' },
  'olympic': { spanish: 'OLÍMPICO', polish: 'OLIMPIJSKI' },
  'swimming': { spanish: 'NATACIÓN', polish: 'PŁYWANIE' },
  'gym': { spanish: 'GIMNASIO', polish: 'SIŁOWNIA' },
  'running': { spanish: 'CORRER', polish: 'BIEGANIE' },
  'winter-sports': { spanish: 'DEPORTES DE INVIERNO', polish: 'SPORTY ZIMOWE' },
  'general': { spanish: 'DEPORTES GENERALES', polish: 'SPORTY OGÓLNE' },
  
  // Leisure
  'theater': { spanish: 'TEATRO', polish: 'TEATR' },
  'cinema': { spanish: 'CINE', polish: 'KINO' },
  'music': { spanish: 'MÚSICA', polish: 'MUZYKA' },
  'art': { spanish: 'ARTE', polish: 'SZTUKA' },
  'beach': { spanish: 'PLAYA', polish: 'PLAŻA' },
  'camping': { spanish: 'CAMPING', polish: 'KEMPING' },
  'photography': { spanish: 'FOTOGRAFÍA', polish: 'FOTOGRAFIA' },
  'reading': { spanish: 'LECTURA', polish: 'CZYTANIE' },
  'games': { spanish: 'JUEGOS', polish: 'GRY' },
  
  // Services
  'emergency': { spanish: 'EMERGENCIAS', polish: 'NAGŁE WYPADKI' },
  'bank': { spanish: 'BANCO', polish: 'BANK' },
  'hotel': { spanish: 'HOTEL', polish: 'HOTEL' },
  'post-office': { spanish: 'CORREO', polish: 'POCZTA' },
  
  // Environment
  'space': { spanish: 'ESPACIO', polish: 'KOSMOS' },
  'earth': { spanish: 'TIERRA', polish: 'ZIEMIA' },
  'landscape': { spanish: 'PAISAJE', polish: 'KRAJOBRAZ' },
  'weather': { spanish: 'CLIMA', polish: 'POGODA' },
  'animals': { spanish: 'ANIMALES', polish: 'ZWIERZĘTA' },
  'birds': { spanish: 'AVES', polish: 'PTAKI' },
  'plants': { spanish: 'PLANTAS', polish: 'ROŚLINY' },
  
  // Reference
  'time': { spanish: 'TIEMPO', polish: 'CZAS' },
  'calendar': { spanish: 'CALENDARIO', polish: 'KALENDARZ' },
  'numbers': { spanish: 'NÚMEROS', polish: 'LICZBY' },
  'colors': { spanish: 'COLORES', polish: 'KOLORY' },
  'phrases': { spanish: 'FRASES', polish: 'ZWROTY' },
  'directions': { spanish: 'PUNTOS CARDINALES Y DIRECCIONES', polish: 'KIERUNKI ŚWIATA' },
  'maps': { spanish: 'MAPAS', polish: 'MAPY' },
};

export function getSubcategoryName(subcategoryId: string): { spanish: string; polish: string } {
  return subcategoryNames[subcategoryId] || {
    spanish: subcategoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    polish: subcategoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  };
}
