import React from 'react';
import style from './footer.module.scss';

const Footer = ({ portfolioData, listId, pdfType }) => {
  return (
    <div className={style.footer}>
      <h5>Disclaimer:</h5>
      <p>
        Investment in securities market are subject to market risks, read all the related documents carefully before investing. Past performance does not guarantee future returns. We do not offer any product which gives guaranteed returns.
      </p>
      {pdfType === "default" && 
        <p>
          Trilithon Asset Management is a trust registered under the Indian Trust Act 1882 and is registered with SEBI as Category III Alternative Investment Fund (“AIF”) with Registered Office: Cabin #3, 4th Floor, 1A&1B Jyoti Imperial, Janardana Hills, Lumbini Avenue, Hyderabad, Gachibowli, Telangana, India – 500 032. Phone: +91 77310 82221, Website: trilithon.lotusdew.in/. For investor queries: investor.relations@trilithon.in, For grievances: investor.relations@trilithon.in, For compliance officer: investor.relations@trilithon.in. SEBI AIF Registration Number: IN/AIF3/25-26/1808, Investment Manager - Investment Adviser SEBI Reg No: INA200013770
        </p>}
    </div>
  );
};

export default Footer;