import React from 'react';
import '../../styles/home/SectionBlock.css';

const SectionBlock = ({ id, eyebrow, title, subtitle, className, children }) => (
  <section
    id={id}
    className={`section-block${className ? ` ${className}` : ''}`}
    role="region"
    aria-label={eyebrow || title}
  >
    <div className="section-block-inner">
      {eyebrow && <span className="section-block-eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-block-title">{title}</h2>}
      {subtitle && <p className="section-block-subtitle">{subtitle}</p>}
      {children}
    </div>
  </section>
);

export default SectionBlock;
