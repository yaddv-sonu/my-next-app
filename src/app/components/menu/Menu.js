// components/Menu.js
import React from 'react';
import Image from 'next/image';
import styles from './menu.module.css';

const Menu = () => {
 const menuData = [
  { 
    image: "/image/burger.jpg",
    id: 1,
    name: 'आलू टिक्की बर्गर',
    description: 'आलू की रसदार टिक्की, पनीर, और ताज़ी सब्जियों के साथ एक स्वादिष्ट बर्गर।',
    price: 50,
  },
  { 
    image: "/image/Chowmeinburgar.jpg",
    id: 2,
    name: 'चाउमीन बर्गर',
    description: 'क्रिस्पी चाउमीन, रसदार पैटी, और ताज़ी सब्जियों का अनोखा मिश्रण।',
    price: 40,
  },
  {
    image: "/image/manchurian.jpg",
    id: 3,
    name: 'कुरकुरे मंचूरियन',
    description: 'कुरकुरी सब्जियों और मसालेदार ग्रेवी के साथ भारतीय-चाइनीज़ स्वाद।',
    price: 90,
  },
  {
    image: "/image/noodles.jpg",
    id: 4,
    name: 'स्वादिष्ट चाऊमीन',
    description: 'सब्जियों और सोया सॉस के साथ मसालेदार और ताज़ा चाऊमीन।',
    price: 50,
  },
  {
    image: "/image/halfMomos.jpg",
    id: 5, 
    name: 'स्वादिष्ट हाफ मोमोज',
    description: 'हल्के मसालेदार भरावन के साथ छोटे, स्वादिष्ट स्टीम्ड मोमोज।',
    price: 40,
  },
  {
    image: "/image/Momos.jpg",
    id: 6, 
    name: 'स्वादिष्ट फुल मोमोज',
    description: 'रसीले भरावन और मसालेदार चटनी के साथ परफेक्ट स्टीम्ड मोमोज।',
    price: 80,
  },
];

  return (
    <div className={styles.menu}>
      {menuData.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src={item.image} 
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            <span className={styles.price}>₹ {item.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
