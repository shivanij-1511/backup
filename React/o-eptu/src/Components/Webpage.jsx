import React from 'react';
import '../CSS/Webpage.css';
import bg1 from "../Assets/bg1-removebg-preview.png";

const ConferencePage = () => {
  return (
    <div className="conference-page">
      <header className="header">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <aside className="sidebar">
          <h2>Book My Conference</h2>
        </aside>

        <section className="content">
          <img src={bg1} alt="Office Conference" />
          <p>Image of office conference</p>
        </section>
      </main>
    </div>
  );
};

export default ConferencePage;
