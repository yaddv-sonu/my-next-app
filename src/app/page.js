// Home.jsx
"use client";
import Header from "./components/header/Header";
import styles from "./home.module.css";
import Menu from "./components/menu/Menu";
import Order from "./components/order/Order";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="home">
         <Header />
        </section>
     
     
      <section id="menu">
        <h1> माँ करणी फास्ट फूड कॉर्नर</h1>
             <p className={styles.tagline}>घर बैठे मंगवाए</p>

        <Menu />
      </section>
      <section id="order">
        <Order />
      </section>
      <section id="contact" style={{ marginPadding: "200px", backgroundColor: "#FA9E2A" }}>
        <Footer />
      </section>
    </div>
  );
}
