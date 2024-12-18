# Proyecto Final - PWEB2 Teoría

## Integrantes
- Sadith Jovanissi Herrera Casos
- Jordan Paredes Saico
- Enmanuel Román Gutierrez Gutierrez
- Anderson Lino Arce Valencia
- Fabián Andre Alvarez Llave
- Mathias Dario Davila Flores
- Kevin Joel Callo Ccagiavilca

## Objetivo
Desarrollar una página web intuitiva y funcional para usuarios y administradores, ofreciendo herramientas para búsqueda, reserva y pago de servicios hoteleros. Se prioriza un diseño moderno, responsivo y atractivo, maximizando la satisfacción del cliente.

## Componentes Principales

### 1. **BannerSlider.jsx**
- **Descripción:** Carrusel interactivo para mostrar banners o imágenes.
- **Función:** Destacar contenido como ofertas o anuncios en la página principal.

### 2. **BookingForm.jsx**
- **Descripción:** Formulario para recopilar datos de reservas.
- **Función:** Permitir la selección de fechas, destinos y número de personas para reservar.

### 3. **CardInfo.jsx**
- **Descripción:** Tarjeta con información breve y organizada.
- **Función:** Mostrar detalles básicos con opciones para interactuar.

### 4. **CardsBar.jsx**
- **Descripción:** Contenedor para organizar múltiples tarjetas.
- **Función:** Presentar productos o servicios relacionados.

### 5. **CityCardsBar.jsx**
- **Descripción:** Barra de tarjetas sobre ciudades.
- **Función:** Explorar destinos turísticos mediante imágenes y detalles.

### 6. **CityPage.jsx**
- **Descripción:** Página con información detallada de una ciudad.
- **Función:** Mostrar atracciones, hoteles, eventos y mapas.

### 7. **Features.jsx**
- **Descripción:** Sección para resaltar ventajas principales.
- **Función:** Comunicar beneficios clave mediante iconos y texto.

### 8. **HotelCard.jsx**
- **Descripción:** Tarjeta con información de un hotel.
- **Función:** Mostrar nombre, precio, calificación e imagen con opción de reserva.

### 9. **LoginForm.jsx**
- **Descripción:** Formulario para iniciar sesión.
- **Función:** Autenticar usuarios de manera segura.

### 10. **MapPage.jsx**
- **Descripción:** Página interactiva con mapas.
- **Función:** Mostrar ubicaciones y puntos de interés filtrados.

### 11. **NavBar.jsx**
- **Descripción:** Barra de navegación principal.
- **Función:** Facilitar la navegación entre secciones.

### 12. **Prices.jsx**
- **Descripción:** Sección para mostrar comparativa de precios.
- **Función:** Ayudar en la elección de planes o servicios.

### 13. **Promote.jsx**
- **Descripción:** Componente para promociones y ofertas.
- **Función:** Destacar descuentos o contenido relevante.

### 14. **RegisterForm.jsx**
- **Descripción:** Formulario de registro.
- **Función:** Captar datos para nuevos usuarios.

### 15. **SearchResults.jsx**
- **Descripción:** Página de resultados de búsqueda.
- **Función:** Organizar resultados con opciones de filtro y orden.

### 16. **UserProfile.jsx**
- **Descripción:** Página de perfil de usuario.
- **Función:** Gestionar información personal y actividades.

## Requerimientos Básicos

1. **Autenticación y Autorización:**
   - Registro e inicio de sesión.
   - Recuperación de contraseña.
   - Gestión de roles.

2. **Búsqueda de Hoteles:**
   - Barra de búsqueda.
   - Filtros dinámicos.

3. **Página de Resultados:**
   - Lista de hoteles con detalles básicos y opción de ver más.

4. **Detalles del Hotel:**
   - Descripción, galería de imágenes, servicios y precios.

5. **Sistema de Reservas:**
   - Selección de fechas y confirmación.

6. **Integración de Mapas:**
   - Mapa interactivo con ubicaciones de hoteles.

## Tecnologías Usadas

### **Frontend**
- **React:** Biblioteca para crear interfaces dinámicas con componentes reutilizables.
- **Vite:** Herramienta moderna para optimizar el desarrollo.
- **CSS/HTML/Bootstrap:** Estilización, estructura y diseño responsivo.

### **Backend**
- **Django:** Framework Python basado en MTV para aplicaciones robustas.
- **Python:** Lógica del servidor y conexión con bases de datos.
- **MySQL:** Almacenamiento y gestión de datos estructurados.

### **Interacción entre Frontend y Backend**
- **Frontend:** Construye la interfaz, envía solicitudes y consume datos desde APIs RESTful.
- **Backend:** Gestiona lógica, bases de datos y expone datos en formato JSON.

## Comunicación
- El Frontend (React) interactúa con el Backend (Django) mediante endpoints API que retornan datos en formato JSON, integrando de forma fluida la funcionalidad de la aplicación.
