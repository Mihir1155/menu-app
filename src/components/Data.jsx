const menu = [
  // Chole Bhature
  {
    id: 1,
    title: 'Chole Bhature',
    category: 'Chole Bhature',
    price: '50/70',
    img: './images/item-1.webp',
    desc: 'Spicy chickpea curry served with deep-fried bread. A classic North Indian dish.',
  },
  // Paneer Chole Bhature
  {
    id: 2,
    title: 'Paneer Chole Bhature',
    category: 'Chole Bhature',
    price: '60/80',
    img: './images/item-2.webp',
    desc: 'Chole Bhature with soft and creamy paneer cubes added for extra flavor and texture.',
  },
  // Aloo Chole Bhature
  {
    id: 3,
    title: 'Aloo Chole Bhature',
    category: 'Chole Bhature',
    price: '50/80',
    img: './images/item-3.jpg',
    desc: 'Chole Bhature with crispy potato fritters served alongside the chickpea curry.',
  },
  // Methi Chole Bhature
  {
    id: 4,
    title: 'Methi Chole Bhature',
    category: 'Chole Bhature',
    price: '50/70',
    img: './images/item-4.webp',
    desc: 'Chole Bhature with a hint of fenugreek leaves for a unique flavor.',
  },
  // Special Chole Bhature + Lassi
  {
    id: 5,
    title: 'Special Chole Bhature + Lassi',
    category: 'Chole Bhature',
    price: '80/100',
    img: './images/item-5.webp',
    desc: 'Chole Bhature served with a refreshing glass of Lassi for a satisfying meal.',
  },
  // Special Chole Bhature + Lassi + Gulab Jamun
  {
    id: 6,
    title: 'Special Chole Bhature + Lassi + Gulab Jamun',
    category: 'Chole Bhature',
    price: '100/120',
    img: './images/item-6.avif',
    desc: 'The ultimate combo with Chole Bhature, Lassi, and sweet Gulab Jamun for dessert.',
  },
  // Cheese Chole Bhature
  {
    id: 7,
    title: 'Cheese Chole Bhature',
    category: 'Chole Bhature',
    price: '60/90',
    img: './images/item-7.jpeg',
    desc: 'Chole Bhature with a cheesy twist, perfect for cheese lovers.',
  },
  // Pav Bhaji
  {
    id: 8,
    title: 'Pav Bhaji',
    category: 'Pav Bhaji',
    price: '80',
    img: './images/item-8.webp',
    desc: 'A popular street food with mashed vegetable curry served with buttered pav.',
  },
  // Cheese Pav Bhaji
  {
    id: 9,
    title: 'Cheese Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-9.avif',
    desc: 'Pav Bhaji with melted cheese for a creamy and indulgent twist.',
  },
  // Jain Pav Bhaji
  {
    id: 10,
    title: 'Jain Pav Bhaji',
    category: 'Pav Bhaji',
    price: '80',
    img: './images/item-10.webp',
    desc: 'Pav Bhaji made without onions and garlic, suitable for Jain dietary restrictions.',
  },
  // Cheese Jain Pav Bhaji
  {
    id: 11,
    title: 'Cheese Jain Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-11.jpg',
    desc: 'Jain Pav Bhaji with the addition of melted cheese for extra flavor.',
  },
  // Khada Pav Bhaji
  {
    id: 12,
    title: 'Khada Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-12.webp',
    desc: 'Pav Bhaji with chunky vegetables, not mashed, for a unique texture.',
  },
  // Cheese Khada Pav Bhaji
  {
    id: 13,
    title: 'Cheese Khada Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-13.jpg',
    desc: 'Khada Pav Bhaji with the addition of melted cheese for extra creaminess.',
  },
  // Butter Garlic Pav Bhaji
  {
    id: 14,
    title: 'Butter Garlic Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-14.webp',
    desc: 'Pav Bhaji with a garlicky twist and extra butter for rich flavor.',
  },
  // Cheese Garlic Pav Bhaji
  {
    id: 15,
    title: 'Cheese Garlic Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-15.jpg',
    desc: 'Pav Bhaji with the goodness of garlic and melted cheese for a savory treat.',
  },
  // Paneer Pav Bhaji
  {
    id: 16,
    title: 'Paneer Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-16.jpeg',
    desc: 'Pav Bhaji with soft and creamy paneer cubes for added richness.',
  },
  // Cheese Paneer Pav Bhaji
  {
    id: 17,
    title: 'Cheese Paneer Pav Bhaji',
    category: 'Pav Bhaji',
    price: '100',
    img: './images/item-17.webp',
    desc: 'Paneer Pav Bhaji with the indulgence of melted cheese for a delightful fusion.',
  },
  // Masala Pav Bhaji
  {
    id: 18,
    title: 'Masala Pav Bhaji',
    category: 'Pav Bhaji',
    price: '90',
    img: './images/item-18.jpg',
    desc: 'Pav Bhaji with an extra dose of Indian spices for a flavorful kick.',
  },
  // Chef Special Pav Bhaji
  {
    id: 19,
    title: 'Chef Special Pav Bhaji',
    category: 'Pav Bhaji',
    price: '100',
    img: './images/item-19.webp',
    desc: 'A culinary masterpiece with unique flavors crafted by our chef.',
  },
  // Extra Butter
  {
    id: 20,
    title: 'Extra Butter',
    category: 'Pav Bhaji',
    price: '15',
    img: './images/item-20.webp',
    desc: 'Add extra butter to your Pav Bhaji for a rich and buttery experience.',
  },
  // Extra Cheese
  {
    id: 21,
    title: 'Extra Cheese',
    category: 'Pav Bhaji',
    price: '15',
    img: './images/item-21.webp',
    desc: 'Top your Pav Bhaji with extra cheese for added creaminess and flavor.',
  },
  // Extra Masala Pav
  {
    id: 22,
    title: 'Extra Masala Pav',
    category: 'Pav Bhaji',
    price: '20',
    img: './images/item-22.webp',
    desc: 'Spicier version of Pav Bhaji with extra masala and spices for a fiery taste.',
  },
  // Chole Kulcha
  {
    id: 23,
    title: 'Chole Kulcha',
    category: 'Chole Kulcha',
    price: '90',
    img: './images/item-23.avif',
    desc: 'Spicy chickpea curry served with soft and fluffy Kulchas, a North Indian classic.',
  },
  // Amritsari Chole Kulcha
  {
    id: 24,
    title: 'Amritsari Chole Kulcha',
    category: 'Chole Kulcha',
    price: '100',
    img: './images/item-24.webp',
    desc: 'Authentic Amritsari-style Chole Kulcha with bold and rich flavors.',
  },
  // Paneer Chole Kulcha
  {
    id: 25,
    title: 'Paneer Chole Kulcha',
    category: 'Chole Kulcha',
    price: '110',
    img: './images/item-25.jpg',
    desc: 'Chole Kulcha with soft and creamy paneer cubes for a protein-packed meal.',
  },
  // Kulcha with Amritsari Paneer Chole
  {
    id: 26,
    title: 'Kulcha with Amritsari Paneer Chole',
    category: 'Chole Kulcha',
    price: '110',
    img: './images/item-26.jpg',
    desc: 'A fusion of soft Kulchas and flavorful Amritsari-style paneer chickpea curry.',
  },
  // Mumbaiya Dhabeli
  {
    id: 27,
    title: 'Mumbaiya Dhabeli',
    category: 'Mumbaiya Delights',
    price: '80',
    img: './images/item-27.jpg',
    desc: 'Famous Mumbai street food with spiced potato filling in a bun, topped with chutneys.',
  },
  // Cheese Mumbaiya Dhabeli
  {
    id: 28,
    title: 'Cheese Mumbaiya Dhabeli',
    category: 'Mumbaiya Delights',
    price: '80',
    img: './images/item-28.webp',
    desc: 'Dhabeli with a cheesy twist, featuring spiced potato filling and gooey cheese.',
  },
  // Mumbaiya Vadapav
  {
    id: 29,
    title: 'Mumbaiya Vadapav',
    category: 'Mumbaiya Delights',
    price: '90',
    img: './images/item-29.jpg',
    desc: 'A flavorful snack with a spicy potato fritter served in a bun with chutneys.',
  },
  // Mumbaiya Cheese Vadapav
  {
    id: 30,
    title: 'Mumbaiya Cheese Vadapav',
    category: 'Mumbaiya Delights',
    price: '110',
    img: './images/item-30.webp',
    desc: 'Vadapav with melted cheese for an indulgent and cheesy treat.',
  },
  // Mumbaiya Masala Vadapav
  {
    id: 31,
    title: 'Mumbaiya Masala Vadapav',
    category: 'Mumbaiya Delights',
    price: '110',
    img: './images/item-31.jpg',
    desc: 'Spicier version of Vadapav with extra masala and flavors for spice enthusiasts.',
  },
  // Extra Masala Pav
  {
    id: 32,
    title: 'Extra Masala Pav',
    category: 'Mumbaiya Delights',
    price: '20',
    img: './images/item-32.jpg',
    desc: 'Pav Bhaji with an extra dose of masala and spices for a fiery taste.',
  },
   // Deserts
   {
    id: 33,
    title: 'Gulab Jamun',
    category: 'Deserts',
    price: '15',
    img: './images/item-33.jpg',
    desc: 'Pav Bhaji with an extra dose of masala and spices for a fiery taste.',
  },
  // Lassi
  {
    id: 34,
    title: 'Lassi',
    category: 'Deserts',
    price: '20',
    img: './images/item-34.webp',
    desc: 'Lassi is an Indian yogurt–based beverage with a smoothie-like consistency.',
  }

];

export default menu;

// You can use this updated `menuData` array in your React application.
