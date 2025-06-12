// components/Loader/ModernLoader.jsx
import React from 'react';
import './ModernLoader.scss';

const ModernLoader = () => (
  <div className="loader-wrapper">
    <div className="loader-box">
      <div className="loader"></div>
<p className="loader-text">Fetching Portfolio Data<span className="dots"></span></p>
    </div>
  </div>
);

export default ModernLoader;
