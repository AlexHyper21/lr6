import product1 from '../assets/product-1.webp';
import product2 from '../assets/product-2.webp';
import product3 from '../assets/product-3.webp';
import product4 from '../assets/product-4.webp';

export const products = [
  { id: 1, name: 'Набор иконок «Контур» · 640 штук', seller: 'Студия Кегль', price: 29, oldPrice: 45, rating: 4.8, reviews: 127, formats: ['SVG', 'FIGMA', 'PNG'], imageUrl: product1, inStock: true },
  { id: 2, name: 'Шрифт «Гротеск Норд» · 4 начертания', seller: 'Типобюро Север', price: 59, oldPrice: null, rating: 4.6, reviews: 84, formats: ['OTF', 'WOFF2'], imageUrl: product2, inStock: true },
  { id: 3, name: 'UI-кит «Пульт» для дашбордов', seller: 'Студия Кегль', price: 89, oldPrice: 120, rating: 4.9, reviews: 212, formats: ['FIGMA'], imageUrl: product3, inStock: true },
  { id: 4, name: 'Мокапы смартфонов · 24 сцены', seller: 'Фото Лаб', price: 35, oldPrice: null, rating: 4.3, reviews: 56, formats: ['PSD', 'PNG'], imageUrl: product4, inStock: false },
  { id: 5, name: 'Иконки «Линия» для интерфейсов · 320 штук', seller: 'Студия Кегль', price: 19, oldPrice: null, rating: 4.5, reviews: 63, formats: ['SVG', 'FIGMA'], imageUrl: product1, inStock: true },
  { id: 6, name: 'Шрифт «Моно Код» для разработчиков', seller: 'Типобюро Север', price: 39, oldPrice: 49, rating: 4.7, reviews: 41, formats: ['TTF', 'WOFF2'], imageUrl: product2, inStock: true },
  { id: 7, name: 'UI-кит «Касса» для интернет-магазина', seller: 'Пиксель Про', price: 99, oldPrice: null, rating: 4.4, reviews: 38, formats: ['FIGMA', 'SKETCH'], imageUrl: product3, inStock: true },
  { id: 8, name: 'Мокапы ноутбуков · 12 сцен', seller: 'Фото Лаб', price: 25, oldPrice: 32, rating: 4.2, reviews: 29, formats: ['PSD'], imageUrl: product4, inStock: true },
];
