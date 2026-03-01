import React from 'react';
import SectionBlock from '../home/SectionBlock';
import FounderCard from './FounderCard';
import ketImage from '../../imgs/ket.jpg';
import domImage from '../../imgs/dom.jpg';
import bilalImage from '../../imgs/bilal.jpg';
import ketIntro from '../../assets/ket.mp3';
import domIntro from '../../assets/dom.mp3';
import bilalIntro from '../../assets/bilal.mp3';
import '../../styles/about/AboutTeam.css';

const founders = [
  { name: 'Ket Hollingsworth', role: 'CEO', linkedIn: 'https://www.linkedin.com/in/ket-hollingsworth/', audioClip: ketIntro, image: ketImage },
  { name: 'Dominick Quaye', role: 'CHO', linkedIn: 'https://www.linkedin.com/in/dominick-q-907baa210/', audioClip: domIntro, image: domImage },
  { name: 'Bilal Abraham', role: 'CSO', linkedIn: 'https://www.linkedin.com/in/bilal-abraham/', audioClip: bilalIntro, image: bilalImage },
];

const clinicMembers = [
  { name: 'Katie Baakkonen', role: 'Engineering' },
  { name: 'Taylor Levinson', role: 'Computer Science' },
  { name: 'Daniel Fajardo', role: 'Engineering' },
  { name: 'Massin Ihs', role: 'Engineering' },
  { name: 'Ket Hollingsworth', role: 'Computer Science' },
  { name: 'Dominick Quaye', role: 'Engineering' },
  { name: 'Mauricio Bravo', role: 'Engineering' },
];

const advisors = [
  { name: 'Navin Shetti' },
  { name: 'James Holloway' },
  { name: 'Deon Upshaw' },
];

const AboutTeam = () => (
  <SectionBlock eyebrow="Our Team" className="about-team">
    {/* Founders */}
    <div className="section-sub-block about-team-founders-block">
      <h3 className="section-sub-title">Meet the Founders</h3>
      <p className="section-sub-subtitle">
        The passionate individuals behind ExploraVist, dedicated to making technology more accessible and affordable for the visually impaired community.
      </p>
      <div className="about-team-founders-grid" role="list" aria-label="Founder Profiles">
        {founders.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </div>

    {/* R&D Clinic */}
    <div className="section-sub-block about-team-clinic-block">
      <h3 className="section-sub-title">Research &amp; Development Clinic</h3>
      <p className="section-sub-text">
        Our partnership with The Hive and the HMC Clinic provided invaluable insights through a year-long R&amp;D program. Every decision was guided by a human-centered approach, with regular interview sessions at the Lighthouse for the Blind.
      </p>
      <ul className="about-team-member-grid" role="list">
        {clinicMembers.map(({ name, role }) => (
          <li key={name} className="about-team-member-card" role="listitem">
            <span className="about-team-member-name">{name}</span>
            <span className="about-team-member-role">{role}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Advisors */}
    <div className="section-sub-block about-team-advisors-block">
      <h3 className="section-sub-title">Advisors</h3>
      <ul className="about-team-member-grid" role="list">
        {advisors.map(({ name }) => (
          <li key={name} className="about-team-member-card" role="listitem">
            <span className="about-team-member-name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </SectionBlock>
);

export default AboutTeam;
