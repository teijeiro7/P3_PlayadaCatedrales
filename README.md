# Praia das Catedrais - Playa de las Catedrales

Sitio web accesible para promocionar la Playa de las Catedrales (Praia das Catedrais) en Ribadeo, Lugo, Galicia.

## Características

- **Accesibilidad WCAG 2.2 Nivel AA**
- **HTML semántico** con landmarks accesibles
- **Navegación por teclado** completa
- **Formulario de postal** con validación accesible
- **Galería multimedia** con lazy loading
- **Vídeos con subtítulos**

## Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro      # Layout base accesible
├── pages/
│   ├── index.astro      # Página de inicio
│   ├── historia.astro   # Historia y geología
│   ├── galeria.astro    # Galería multimedia
│   ├── visitar.astro    # Información práctica
│   └── postal.astro     # Formulario de postal
└── styles/
    └── global.css       # Estilos globales
```

## Tecnologías

- [Astro](https://astro.build) - Framework web
- TypeScript
- WCAG 2.2 - Pautas de accesibilidad

## Validación

El sitio ha sido.validado con múltiples validadores:
- WAVE Web Accessibility Evaluation Tool
- axe DevTools
- Google Lighthouse
- TAW
- Validador textual (Lynx)

## Licencia

Proyecto académico - Universitat Rey Juan Carlos