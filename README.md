# 🇵🇱 Polish Learning App

Aplicación web progresiva (PWA) para aprender polaco mediante flashcards interactivas, ejercicios de quiz y gamificación.

## 📋 Características

### ✨ Funcionalidades Principales

- **16 Categorías Temáticas**: Desde "Ludzie" (People) hasta "Informacje" (Reference)
- **Múltiples Modos de Estudio**:
  - 🃏 Flashcards interactivas con flip animation
  - 📝 Ejercicios de quiz con verificación instantánea
  - 🔊 Pronunciación con síntesis de voz
  
### 🎮 Gamificación

- **Sistema de Puntos**: Gana puntos por respuestas correctas
- **Niveles**: Progresa del nivel 1 al 50
- **Rachas**: Mantén tu racha diaria de estudio
- **Logros**: Desbloquea insignias por hitos alcanzados
- **Celebraciones**: Efectos visuales con confetti al subir de nivel

### 🧠 Repetición Espaciada (SRS)

- Implementación del algoritmo SM-2 (SuperMemo 2)
- Revisiones programadas según dificultad de recordar
- Optimización del aprendizaje a largo plazo

### 💾 Almacenamiento Local

- Base de datos IndexedDB con Dexie
- Funciona 100% offline
- Exportación de datos personales

### 📱 PWA (Progressive Web App)

- Instalable en dispositivos móviles y desktop
- Funciona sin conexión
- Service Worker para caché de recursos

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. **Descargar el proyecto completo**
   
   Descarga todos los archivos proporcionados y colócalos en una carpeta llamada `polish-learning-app`

2. **Instalar dependencias**

   ```bash
   cd polish-learning-app
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

4. **Construir para producción**

   ```bash
   npm run build
   ```

   Los archivos optimizados estarán en la carpeta `dist/`

5. **Vista previa de producción**

   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
polish-learning-app/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/         
│   │   ├── common/         # Componentes reutilizables
│   │   │   └── LoadingScreen.tsx
│   │   ├── layout/         # Layout y navegación
│   │   │   └── Layout.tsx
│   │   └── pages/          # Páginas principales
│   │       ├── HomePage.tsx
│   │       ├── CategoryPage.tsx
│   │       ├── StudyPage.tsx
│   │       ├── ProgressPage.tsx
│   │       └── SettingsPage.tsx
│   ├── data/               # Datos de vocabulario
│   │   └── vocabulary-people.ts
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Estilos CSS
│   │   └── index.css
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utilidades
│   │   ├── database.ts     # Dexie DB
│   │   ├── gamification.ts # Sistema de puntos
│   │   └── spaced-repetition.ts # Algoritmo SRS
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 Uso de la Aplicación

### Comenzar a Estudiar

1. En la página principal, verás las 16 categorías disponibles
2. Selecciona una categoría (por ejemplo, "LUDZIE - People")
3. Puedes estudiar toda la categoría o seleccionar un tema específico
4. Elige entre modo Flashcards o Quiz

### Modo Flashcards

- Haz clic en la tarjeta para voltearla
- Escucha la pronunciación con el botón de audio
- Avanza con los botones "Siguiente" y "Anterior"

### Modo Quiz

- Escribe la traducción de la palabra mostrada
- Presiona Enter o "Verificar" para comprobar
- Recibe feedback instantáneo
- Acumula puntos por respuestas correctas

### Ver tu Progreso

- Accede a "Progreso" desde el menú
- Visualiza tu nivel, puntos y racha
- Revisa tus logros desbloqueados

## 🔧 Configuración

### Ajustes Disponibles

- **Audio**: Activar/desactivar sonidos y reproducción automática
- **Meta Diaria**: Establecer objetivo de palabras por día (5-100)
- **Notificaciones**: Recordatorios de estudio
- **Exportar Datos**: Descarga tu progreso en JSON
- **Reiniciar Progreso**: Borra todos los datos y comienza de nuevo

## 🗂️ Agregar Más Vocabulario

Para agregar vocabulario de otras categorías:

1. Crea un nuevo archivo en `src/data/` (ej: `vocabulary-food.ts`)
2. Sigue el mismo formato que `vocabulary-people.ts`
3. Importa y ejecuta la función seed en `App.tsx`

Ejemplo:

```typescript
export const foodVocabulary: VocabularyWord[] = [
  {
    id: 'food_001',
    polish: 'chleb',
    english: 'bread',
    category: 'food',
    subcategory: 'bakery',
    difficulty: 'beginner',
    tags: ['comida', 'panadería'],
  },
  // ... más palabras
];
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js` para modificar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#TU_COLOR_AQUI',
        // ...
      }
    }
  }
}
```

### Agregar Nuevos Logros

Edita `src/utils/gamification.ts` y agrega nuevos logros en la función `updateProgressAfterSession`

## 🐛 Solución de Problemas

### La base de datos no se inicializa

- Abre las DevTools del navegador
- Ve a la pestaña "Application" > "IndexedDB"
- Elimina la base de datos "PolishAppDB"
- Recarga la página

### Las palabras no se muestran

- Verifica que el archivo de vocabulario esté correctamente importado
- Revisa la consola del navegador para errores
- Asegúrate de que la función seed se ejecute en `App.tsx`

### Errores de TypeScript

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

## 📚 Tecnologías Utilizadas

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Dexie.js** - Wrapper para IndexedDB
- **React Router** - Navegación
- **Framer Motion** - Animaciones
- **Canvas Confetti** - Efectos de celebración

## 🗺️ Roadmap

- [ ] Agregar vocabulario completo de las 16 categorías
- [ ] Implementar modo de escucha (audio → selección)
- [ ] Agregar ejercicios de relacionar imágenes
- [ ] Sincronización en la nube (opcional)
- [ ] Modo oscuro
- [ ] Estadísticas detalladas por categoría
- [ ] Desafíos semanales
- [ ] Competencia con otros usuarios

## 📄 Licencia

Este proyecto está basado en el vocabulario del libro "Polish-English Bilingual Visual Dictionary" (Dorling Kindersley, 2008).

El código de la aplicación está disponible para uso educativo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

¿Preguntas o sugerencias? Abre un issue en el repositorio.

---

**¡Buena suerte con tu aprendizaje del polaco! 🇵🇱📚**
