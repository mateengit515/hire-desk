import React from 'react';

type CardRow = {
  label: string;
  value: string | number;
};

type CardProps = {
  title: string;
  rows: CardRow[];
};

const Card: React.FC<CardProps> = ({ title, rows }) => (
  <div className="dashboard-card">
  <div className="dashboard-card-title card-title-inter">{title}</div>
    <div className="dashboard-card-details">
      <div className="dashboard-card-row-grid">
        {rows.map((row, idx) => (
          <div className="dashboard-card-col" key={idx}>
            <span className="dashboard-card-number">{row.value}</span>
            <span className="dashboard-card-label">{row.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export type { CardRow, CardProps };
export default Card;
