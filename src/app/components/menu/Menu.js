// components/Menu.js
import React from 'react';
import Image from 'next/image';
import styles from './Menu.module.css';

const Menu = () => {
  const menuData = [
    { 
      image: "/image/burger.jpg",
      id: 1,
      name: 'स्वादिष्ट बर्गर',
      description: 'रसदार पैटी, पनीर, और ताज़ी सब्जियों से बना शानदार बर्गर।',
      price: 50,
    },
    {
      image: "/image/manchurian.jpg",
      id: 2,
      name: 'कुरकुरे मंचूरियन',
      description: 'भारतीय-चाइनीज़ व्यंजन, मसालेदार और कुरकुरे।',
      price: 90,
    },
    {
      image: "/image/noodles.jpg",
      id: 3,
      name: 'स्वादिष्ट चाऊमीन',
      description: 'सब्जियों और सोया सॉस के साथ मसालेदार और ताजगी भरे चाऊमीन।',
      price: 50,
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
