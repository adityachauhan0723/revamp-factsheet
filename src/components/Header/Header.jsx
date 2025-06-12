import React from 'react';
import { useEffect, useState } from "react";
import style from './header.module.scss';
import logo from '../../Images/logo.png';
import LotusdewLogo from '../../Images/TRILITHON.png';

const Header = ({pdfType}) => {
  const [userName, setUserName] = useState("");
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" }); // June
  const year = now.getFullYear();
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className={style.header}>
      <p style={{ textAlign: "left", margin: 0 }}>Report of {month} {year}</p>
      {/* <p style={{ textAlign: "right", margin: 0 }}>{userName}</p> */}
      {/* <hr /> */}
      <div className={style.headerMain}>
        <div className={style.headerLeft}>
          <img src={logo} alt='logo TRilithon' />
         {pdfType==="default" ?<span>Trilithon Hidden Gems</span> :<span> AIF </span>}
          
        </div>
        {pdfType ==="default" ?
        <div className={style.headerRight}>       
          {/* <img src={geogit} />
          <img src={smartfolioLogo} /> */}
           
          <img src={LotusdewLogo}  alt='lotusdew logo'/>
        </div>:
        <div className={style.headerRight2}>       
        <img src={LotusdewLogo} alt='lotusdew logo'/>
      </div>}
      </div>
    </div>
  );
};

export default Header;
