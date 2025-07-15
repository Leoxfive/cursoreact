const products = [
  { id: '1', name: 'Buzo Azul', category: 'hoodie', price: 15000 , image: '/img/buzo_azul.jpeg' , stock: '100' , description : 'Buzo Azul, telas importadas, perfecto para el invierno y para llevar tu estilo al maximo'},
  { id: '2', name: 'Buzo Blanco', category: 'hoodie', price: 17500 , image: '/img/buzo_blanco.jpg' , stock: '122' ,description : 'La clásica que nunca falla. Tela de algodón peinado, corte oversize y cuello reforzado. Ideal para combinar con cualquier outfit' },
  { id: '3', name: 'Buzo Capucha', category: 'hoodie', price: 16000 , image: '/img/buzo_capucha.jpeg', stock: '107', description : 'Cómodo, abrigado y con capucha ajustable. Interior frizado, ideal para los días frescos. Un clásico urbano.' },
  { id: '4', name: 'Buzo Marron', category: 'hoodie', price: 17999 , image: '/img/buzo_marron.jpeg', stock: '99', description : 'Estilo suelto y moderno, con detalles bordados en el pecho. Ultra suave al tacto, un infaltable en tu guardarropa.' },
  { id: '5', name: 'Remera Cherry', category: 't-shirt', price: 10500 , image: '/img/remera_cherry.jpg' , stock: '200', description : 'Con diseño gráfico inspirado en el arte urbano. Estilo relajado, tela suave y resistente. Para los que marcan tendencia.'},
  { id: '6', name: 'Remera Negra', category: 't-shirt', price: 11000 , image: '/img/remera_negra.jpg' , stock: '237' ,description : 'Simple, sobria y versátil. Cuello redondo, costuras reforzadas y ajuste moderno. Perfecta para usar sola o bajo un buzo.'},
  { id: '7', name: 'Remera Azul', category: 't-shirt', price: 12900 , image: '/img/remera1.jpeg', stock: '142' ,description : 'Cada prenda es única con su estampado teñido a mano. Colores suaves, corte relajado y 100% algodón. Ideal para looks frescos y veraniegos.' },
  { id: '8', name: 'Remera Verde', category: 't-shirt', price: 13500 , image: '/img/remera3.jpeg', stock: '185' ,description : 'Minimalismo con un detalle sutil. Logo pequeño bordado en el pecho, tela suave y resistente. Para usar todos los días con estilo.' },
  { id: '9', name: 'Zapatillas Nike ', category: 'shoe', price: 66800 , image: '/img/nike_zapatillas.jpeg', stock: '60', description : 'Diseño limpio y moderno. Suela de goma antideslizante y plantilla acolchada. Combinan con todo.' },
  { id: '10', name: 'Zapatillas Adidas', category: 'shoe', price: 57999 , image: '/img/zapatillas_adidas.jpeg', stock: '57' ,description : 'Suela alta, detalles agresivos y diseño robusto. Comodidad y presencia para marcar estilo.' },
  { id: '11', name: 'Zapatillas Puma', category: 'shoe', price: 48900 , image: '/img/zapatillas_puma.jpeg', stock: '33', description : 'Livianas, transpirables y con soporte ideal para todo el día. Usalas para entrenar o salir.' },
  { id: '12', name: 'Zapatillas Vans', category: 'shoe', price: 39999 , image: '/img/zapatillas_vans.png' , stock: '73', description : 'Diseño monocromático elegante y versátil. Capellada de cuero sintético, suela de goma y estilo atemporal. Para un look limpio y seguro.'},
];

export const getProducts = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });

export const getProductById = (id) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 1000);
  });

export const getProductsByCategory = (categoryId) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 1000);
  });