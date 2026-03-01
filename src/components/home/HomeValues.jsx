import React from 'react';
import SectionBlock from './SectionBlock';
import '../../styles/home/HomeValues.css';

const values = [
  { title: 'Curiosity', description: 'Explore the world around you' },
  { title: 'Confidence', description: 'Navigate any environment independently' },
  { title: 'Connection', description: 'Relive memories and build community' },
];

const HomeValues = () => (
  <SectionBlock eyebrow="Our values" title="We strive to encourage" className="home-values">
    <ul className="home-values-list" role="list">
      {values.map(({ title, description }) => (
        <li key={title} className="home-values-item" role="listitem">
          <span className="home-values-item-title">{title}</span>
          <span className="home-values-item-desc">{description}</span>
        </li>
      ))}
    </ul>
  </SectionBlock>
);

export default HomeValues;
