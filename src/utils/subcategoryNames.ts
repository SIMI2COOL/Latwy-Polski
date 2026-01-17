// Mapping of subcategory IDs to Spanish and Polish names
export const subcategoryNames: Record<string, { spanish: string; polish: string }> = {
  // People
  'body': { spanish: 'CUERPO', polish: 'CIAŁO' },
  'face': { spanish: 'CARA', polish: 'TWARZ' },
  'family': { spanish: 'FAMILIA', polish: 'RODZINA' },
  
  // Food
  'meat': { spanish: 'CARNE', polish: 'MIĘSO' },
  'vegetables': { spanish: 'VERDURAS', polish: 'WARZYWA' },
  'fruits': { spanish: 'FRUTAS', polish: 'OWOCE' },
  'bread': { spanish: 'PAN', polish: 'PIECZYWO' },
  
  // Home
  'furniture': { spanish: 'MUEBLES', polish: 'MEBLE' },
  'kitchen': { spanish: 'COCINA', polish: 'KUCHNIA' },
  'bathroom': { spanish: 'BAÑO', polish: 'ŁAZIENKA' },
  
  // Transport
  'car': { spanish: 'COCHE', polish: 'SAMOCHÓD' },
  'driving': { spanish: 'CONDUCCIÓN', polish: 'PROWADZENIE' },
  'gas-station': { spanish: 'GASOLINERA', polish: 'STACJA BENZYNOWA' },
  'bus': { spanish: 'AUTOBÚS', polish: 'AUTOBUS' },
  'train': { spanish: 'TREN', polish: 'POCIĄG' },
  'airplane': { spanish: 'AVIÓN', polish: 'SAMOLOT' },
  
  // Study
  'school': { spanish: 'ESCUELA', polish: 'SZKOŁA' },
  'learning': { spanish: 'APRENDIZAJE', polish: 'NAUKA' },
  'supplies': { spanish: 'MATERIALES', polish: 'MATERIAŁY SZKOLNE' },
  'subjects': { spanish: 'ASIGNATURAS', polish: 'PRZEDMIOTY' },
  
  // Work
  'office': { spanish: 'OFICINA', polish: 'BIURO' },
  'work-activities': { spanish: 'ACTIVIDADES LABORALES', polish: 'PRACA' },
  'professions': { spanish: 'PROFESIONES', polish: 'ZAWODY' },
  
  // Eating Out
  'cafe': { spanish: 'CAFÉ', polish: 'KAWIARNIA' },
  'bar': { spanish: 'BAR', polish: 'BAR' },
  'restaurant': { spanish: 'RESTAURANTE', polish: 'RESTAURACJA' },
  'fastfood': { spanish: 'COMIDA RÁPIDA', polish: 'FAST FOOD' },
  'breakfast': { spanish: 'DESAYUNO', polish: 'ŚNIADANIE' },
  'dinner': { spanish: 'CENA', polish: 'OBIAD' },
  
  // Add more as needed...
};

export function getSubcategoryName(subcategoryId: string): { spanish: string; polish: string } {
  return subcategoryNames[subcategoryId] || {
    spanish: subcategoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    polish: subcategoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  };
}
