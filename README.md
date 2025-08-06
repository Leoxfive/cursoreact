E-commerce con React y Firebase

Este proyecto es una aplicación web de e-commerce desarrollada como entrega final del curso de React de Coderhouse.

La idea principal fue construir una Single Page Application (SPA) donde se puedan visualizar productos, filtrarlos por categoría, ver sus detalles, agregarlos al carrito, y finalizar la compra con un formulario. Toda la información se almacena en Firebase Firestore.

Tecnologías utilizadas

- React.js
- React Router DOM
- Firebase Firestore
- Context API
- CSS

 Funcionalidades:

- Listado dinámico de productos desde Firestore
- Filtro por categoría
- Vista detallada de productos
- Componente `ItemCount` para elegir unidades y controlar stock
- Agregado de productos al carrito
- Visualización del carrito con cantidades, subtotales y total general
- Formulario de checkout con generación de orden en Firestore
- Renderizado condicional: loader, carrito vacío, confirmación de compra