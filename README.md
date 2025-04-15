# Movie Explorer - Aplicación Web con React (SPA) y Next.js (SSR)

Una aplicación web que permite a los usuarios explorar, buscar y consultar detalles de películas utilizando [The Movie Database API (TMDb)](https://www.themoviedb.org/). Esta app se desarrolla en **dos versiones paralelas**:

- **SPA**: Basada en React + React Router DOM.
- **SSR**: Basada en Next.js + App Router.

---

## Descripción de la Aplicación

Esta aplicación muestra una lista de películas populares, permite realizar búsquedas por título y consultar los detalles de una película específica. Ha sido diseñada con componentes reutilizables y una arquitectura que facilita su mantenimiento.

### Funcionalidades principales:

- Página de inicio con películas populares.
- Buscador de películas por nombre.
- Soporte para lectura de parámetros de búsqueda desde la URL.
- Input de búsqueda con funcionalidad de enter para ejecutar la búsqueda.
- Página de detalles de cada película.
- Navegación fluida entre páginas.
- Componentes reutilizables para listas, tarjetas e inputs.
- Uso de variables de entorno (.env) para manejar las credenciales de la API.
- Hook personalizado para realizar peticiones fetch a la API de películas.
- Archivo de utilidades que centraliza las rutas necesarias para realizar llamadas a la API de TMDb.

## Configuración mínima necesaria

Para ejecutar correctamente ambos proyectos (SPA y SSR), lo único que necesitas hacer es:

1. **Instalar las dependencias** en cada uno de los proyectos:

```bash
npm install

2. **Crear los .env en la raiz de los proyectos**:

En React el .env
VITE_API_KEY=tu_api_key_de_tmdb

En Next el .env.local
NEXT_PUBLIC_API_KEY=tu_api_key_de_tmdb
