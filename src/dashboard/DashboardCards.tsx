
import './DashboardCards.css';



import React from 'react';
import Card, { CardProps } from './Card';

const cardData: CardProps[] = [
  {
    title: 'Service Reminders',
    rows: [
      { label: 'Over Due', value: 3 },
      { label: 'Due Soon', value: 2 },
    ],
  },
  {
    title: 'Open Issues',
    rows: [
      { label: 'Open', value: 5 },
    ],
  },
  {
    title: 'Asset Renewal Reminders',
    rows: [
      { label: 'Expiring Soon', value: 4 },
      { label: 'Renewed', value: 1 },
    ],
  },
  {
    title: 'Contact Renewal Reminders',
    rows: [
      { label: 'Expiring Soon', value: 2 },
      { label: 'Renewed', value: 0 },
    ],
  },
  {
    title: 'Asset Assignments',
    rows: [
      { label: 'Assigned', value: 8 },
      { label: 'Unassigned', value: 3 },
    ],
  },
  {
    title: 'Asset Status',
    rows: [
      { label: 'Active', value: 10 },
      { label: 'Inactive', value: 2 },
    ],
  },
];

const DashboardCards: React.FC = () => (
  <div>
    <div className="dashboard-cards-container">
      {cardData.map(card => (
        <Card key={card.title} title={card.title} rows={card.rows} />
      ))}
    </div>
  </div>
);

export default DashboardCards;
