import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaGlobe, FaPhone } from 'react-icons/fa';
import Select from 'react-select';
import styles from './order.module.css';

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    menuItems: []
  });

  // Updated menu options in Hindi with corresponding prices
  const menuOptions = [
    { value: 'बर्गर', label: 'बर्गर', price: 50 },
    { value: 'चाउमीन फुल', label: 'चाउमीन फुल', price: 50 },
    { value: 'चाउमीन हाफ', label: 'चाउमीन हाफ', price: 30 },
    { value: 'मंचूरियन फुल', label: 'मंचूरियन फुल', price: 90 },
    { value: 'मंचूरियन हाफ', label: 'मंचूरियन हाफ', price: 50 },
  ];

  // Quantity options for each item
  const quantityOptions = [1, 2, 3, 4, 5];

 const handleWhatsApp = () => {
  const greeting = encodeURIComponent("नमस्ते, मैं अपना ऑर्डर करना चाहूंगा। कृपया सहायता करें।");
  const whatsappUrl = `https://wa.me/+918306320680?text=${greeting}`;
  window.open(whatsappUrl, '_blank');
};


  const handleInstagram = () => {
    window.open('https://www.instagram.com/yadavsanjeet64/', '_blank');
  };

  const handleMobileCall = () => {
    window.location.href = 'tel:+918306320680';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMenuChange = (selectedOptions) => {
    setFormData(prev => ({
      ...prev,
      menuItems: selectedOptions
        ? selectedOptions.map(option => {
            const existing = prev.menuItems.find(item => item.value === option.value);
            return { ...option, quantity: existing ? existing.quantity : 1 };
          })
        : []
    }));
  };

  const handleItemQuantityChange = (itemValue, newQuantity) => {
    setFormData(prev => ({
      ...prev,
      menuItems: prev.menuItems.map(item =>
        item.value === itemValue ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  const overallTotal = formData.menuItems.reduce(
    (acc, item) => acc + (item.price * item.quantity),
    0
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const menuDetails = formData.menuItems
      .map(item => `${item.label} (x${item.quantity} - ₹${item.price * item.quantity})`)
      .join(', ');
    const message = `नाम: ${formData.name}\nमोबाइल: ${formData.mobile}\nमेनू आइटम: ${menuDetails}\nकुल योग: ₹${overallTotal}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+918306320680?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', mobile: '', menuItems: [] });
    setIsModalOpen(false);
  };

  return (
    <div className={styles.orderContainer}>
      <h2>ऑर्डर ऑनलाइन करें</h2>
      <div className={styles.methods}>
        <button className={styles.methodBtn} onClick={handleWhatsApp} title="व्हाट्सएप">
          <FaWhatsapp style={{ color: '#25D366', fontSize: '24px' }} />
          <span className={styles.iconLabel}>व्हाट्सएप</span>
        </button>
         <button className={styles.methodBtn} onClick={handleMobileCall} title="अभी कॉल करें">
          <FaPhone style={{ color: '#007AFF', fontSize: '24px' }} />
          <span className={styles.iconLabel}>अभी कॉल करें</span>
        </button>
       
        <button className={styles.methodBtn} onClick={() => setIsModalOpen(true)} title="वेबसाइट फॉर्म">
          <FaGlobe style={{ color: '#000000', fontSize: '24px' }} />
          <span className={styles.iconLabel}>वेबसाइट फॉर्म</span>
        </button>
         <button className={styles.methodBtn} onClick={handleInstagram} title="इंस्टाग्राम">
          <FaInstagram style={{ color: '#E1306C', fontSize: '24px' }} />
          <span className={styles.iconLabel}>इंस्टाग्राम</span>
        </button>
       
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
              X
            </button>
            <form className={styles.orderForm} onSubmit={handleFormSubmit}>
              <div className={styles.formGroup}>
                <label>नाम:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>मोबाइल:</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>मेनू आइटम चुनें:</label>
                <Select
                  options={menuOptions}
                  value={formData.menuItems}
                  onChange={handleMenuChange}
                  isMulti
                  placeholder="मेनू आइटम चुनें"
                  className={styles.multiSelect}
                />
              </div>
              {formData.menuItems.length > 0 && (
                <div className={styles.selectedItems}>
                  <h4>चुने हुए आइटम की समीक्षा:</h4>
                  {formData.menuItems.map(item => (
                    <div key={item.value} className={styles.itemQuantity}>
                      <span className={styles.itemName}>{item.label}</span>
                      <span className={styles.unitPrice}>यूनिट मूल्य: ₹{item.price}</span>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemQuantityChange(item.value, Number(e.target.value))
                        }
                        required
                      >
                        {quantityOptions.map(qty => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                      <span className={styles.totalPrice}>
                        कुल: ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className={styles.overallTotal}>
                    <strong>कुल योग: ₹{overallTotal}</strong>
                  </div>
                </div>
              )}
              <button type="submit" className={styles.submitBtn}>
                ऑर्डर बुक करें
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
