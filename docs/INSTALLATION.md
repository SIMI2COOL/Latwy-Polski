# 🚀 Guía de Instalación Paso a Paso

## ¿Qué necesitas?

1. **Node.js** (versión 18 o superior)
   - Descarga desde: https://nodejs.org/
   - Elige la versión LTS (recomendada)
   - Verifica instalación: abre terminal y escribe `node --version`

2. **Editor de Código** (opcional pero recomendado)
   - VS Code: https://code.visualstudio.com/
   - O cualquier editor de texto

3. **Terminal/Línea de Comandos**
   - Windows: PowerShell o CMD
   - Mac/Linux: Terminal

## Paso 1: Organizar los Archivos

1. Descarga todos los archivos del proyecto
2. Crea una carpeta llamada `polish-learning-app`
3. Coloca todos los archivos descargados manteniendo la estructura:

```
polish-learning-app/
├── docs/
│   └── ADDING_VOCABULARY.md
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── LoadingScreen.tsx
│   │   ├── layout/
│   │   │   └── Layout.tsx
│   │   └── pages/
│   │       ├── CategoryPage.tsx
│   │       ├── HomePage.tsx
│   │       ├── ProgressPage.tsx
│   │       ├── SettingsPage.tsx
│   │       └── StudyPage.tsx
│   ├── data/
│   │   └── vocabulary-people.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── database.ts
│   │   ├── gamification.ts
│   │   └── spaced-repetition.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Paso 2: Abrir Terminal en la Carpeta del Proyecto

### Windows:
1. Abre el Explorador de Archivos
2. Navega a la carpeta `polish-learning-app`
3. Haz clic en la barra de dirección
4. Escribe `cmd` o `powershell` y presiona Enter

### Mac/Linux:
1. Abre Terminal
2. Navega a la carpeta:
   ```bash
   cd ruta/a/polish-learning-app
   ```

## Paso 3: Instalar Dependencias

En la terminal, ejecuta:

```bash
npm install
```

**¿Qué hace esto?**
- Descarga todas las librerías necesarias (React, TypeScript, etc.)
- Puede tardar 2-5 minutos dependiendo de tu conexión
- Verás un progreso en la terminal

**Posibles errores:**
- Si dice "npm: command not found": Node.js no está instalado correctamente
- Si hay errores de permisos en Mac/Linux: usa `sudo npm install`

## Paso 4: Iniciar la Aplicación

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

**¿Qué verás?**
```
  VITE v5.0.8  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Paso 5: Abrir en el Navegador

1. Abre tu navegador favorito (Chrome, Firefox, Safari, Edge)
2. Ve a la dirección: `http://localhost:5173`
3. ¡Deberías ver la aplicación funcionando! 🎉

## Verificación

Si todo está correcto, deberías ver:

1. ✅ Pantalla de carga inicial
2. ✅ Página principal con categorías
3. ✅ Estadísticas de usuario (puntos, nivel, racha)
4. ✅ Categoría "LUDZIE (People)" con vocabulario

## Comandos Útiles

### Detener el servidor
- Presiona `Ctrl + C` en la terminal

### Reiniciar el servidor
```bash
npm run dev
```

### Construir para producción
```bash
npm run build
```

### Previsualizar build de producción
```bash
npm run preview
```

### Limpiar y reinstalar
```bash
# Eliminar carpeta node_modules
rm -rf node_modules

# Eliminar package-lock.json
rm package-lock.json

# Reinstalar
npm install
```

## Solución de Problemas Comunes

### Error: "Cannot find module"

**Solución:**
```bash
npm install
```

### Error: "Port 5173 is already in use"

**Solución:**
- Cierra otras instancias de la aplicación
- O cambia el puerto en `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000 // Cambiar a otro puerto
  }
})
```

### La página está en blanco

**Solución:**
1. Abre DevTools del navegador (F12)
2. Mira la pestaña "Console" para ver errores
3. Verifica que todos los archivos estén en su lugar
4. Recarga la página (Ctrl+R o Cmd+R)

### Errores de TypeScript

**Solución:**
```bash
npm run build
```
Esto mostrará todos los errores de TypeScript

### Base de datos no se inicializa

**Solución:**
1. Abre DevTools (F12)
2. Ve a Application > Storage > IndexedDB
3. Elimina "PolishAppDB"
4. Recarga la página

## Desarrollo en VS Code

### Extensiones Recomendadas

1. **ESLint** - Para linting de código
2. **Prettier** - Para formateo automático
3. **TypeScript** - Soporte para TS
4. **Tailwind CSS IntelliSense** - Autocompletado de Tailwind

### Atajos Útiles

- `Ctrl + ` ` - Abrir terminal integrada
- `Ctrl + P` - Buscar archivo
- `F5` - Iniciar debugger
- `Ctrl + Shift + F` - Buscar en todo el proyecto

## Próximos Pasos

Una vez que la aplicación esté funcionando:

1. 📖 Lee el `README.md` para entender las funcionalidades
2. 🎯 Explora la aplicación navegando entre categorías
3. 📝 Lee `docs/ADDING_VOCABULARY.md` para agregar más palabras
4. 🎨 Personaliza los colores en `tailwind.config.js`
5. 🚀 Comparte tu progreso con amigos

## Recursos Adicionales

- **Documentación de React**: https://react.dev/
- **Documentación de TypeScript**: https://www.typescriptlang.org/
- **Documentación de Tailwind**: https://tailwindcss.com/
- **Documentación de Vite**: https://vitejs.dev/

## ¿Necesitas Ayuda?

Si encuentras problemas:

1. Revisa esta guía cuidadosamente
2. Busca el error en Google
3. Consulta la documentación oficial de las tecnologías
4. Verifica que Node.js esté actualizado: `node --version`

---

**¡Disfruta aprendiendo polaco! 🇵🇱**
