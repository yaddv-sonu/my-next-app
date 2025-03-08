import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  // नया स्थान के निर्देशांक
  const address = "RD 860 Bangarsar  Bikaner Rajasthan  334305";
  // दिए गए निर्देशांक के लिए Google मैप्स URL (सही URL एन्कोडिंग सुनिश्चित करें)
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=28%C2%B004'43%22N+72%C2%B036'27%22E";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h3>हमारे बारे में</h3>
          <p>
            हमारे खाद्य पदार्थ उच्च गुणवत्ता वाली सामग्री से तैयार किए जाते हैं, जिससे हर व्यंजन में ताजगी और उत्कृष्ट स्वाद सुनिश्चित हो। हम स्वच्छता, पौष्टिकता, और पारंपरिक रेसिपीज़ के साथ नवीन तकनीकों का उपयोग करते हैं ताकि आपको एक अद्वितीय और संतोषजनक अनुभव प्राप्त हो।
          </p>
        </div>
       <div className={styles.section}>
  <h3>संपर्क</h3>
  <p>ईमेल: yadavsanjeet@gmail.com</p>
  <p>
    फोन: <a href="tel:8306320680" className={styles.phoneLink}>8306320680</a>
  </p>
</div>

        <div className={styles.section}>
          <h3>पता</h3>
        <p>
  <a
    className={styles.mapLink}
    href={mapUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    {address}
  </a>
</p>

        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} माँ करणी फास्ट फूड कॉर्नर</p>
      </div>
    </footer>
  );
};

export default Footer;
