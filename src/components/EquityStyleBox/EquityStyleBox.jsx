import React from "react";
import styles from "./EquityStyleBox.module.scss";



const EquityStyleBox = ({ capDistribution }) => {
  const sizes = ["Large", "Mid", "Small"];
  const stylesArray = ["Value", "Blend", "Growth"];
  

  return (
    <div className={styles.wrapper}>
      {/* Equity Style Box */}
      <div className={styles.styleBox}>
        <h4 className={styles.title}>Equity Style Box &trade;</h4>

        <div className={styles.gridContainer}>
          <div className={styles.colLabels}>
            <span className={styles.emptyCell}></span>
            {stylesArray.map((label, idx) => (
              <span key={idx} className={styles.axisLabel}>
                {label}
              </span>
            ))}
          </div>

          <div className={styles.grid}>
            {sizes.map((size, rowIdx) => (
              <div key={rowIdx} className={styles.row}>
                <span className={styles.rowLabel}>{size}</span>
                {stylesArray.map((style, colIdx) => {
                  const isActive = size === "Small" && style === "Growth";
                  return (
                    <div
                      key={colIdx}
                      className={`${styles.cell} ${
                        isActive ? styles.active : ""
                      }`}
                    >
                      {`${size} ${style}`}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

       
      </div>

      {/* Market Cap Distribution */}

    </div>
  );
};

export default EquityStyleBox;
