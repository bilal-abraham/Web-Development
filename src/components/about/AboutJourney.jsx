import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import SectionBlock from '../home/SectionBlock';
import howDidWeStart from '../../assets/exploravist_start.mp3';
import '../../styles/about/AboutJourney.css';

const journeyCards = [
  {
    heading: 'The Market Gap',
    text: 'When we explored the market for wearable accessibility technology, we found a clear gap. Companies like Envision and OrCam offer devices starting at $2,000—creating a significant barrier for many.',
  },
  {
    heading: 'The Reality',
    text: 'The visually impaired community often faces significant financial challenges. Community feedback consistently told us that existing solutions are too expensive for what they offer.',
  },
  {
    heading: 'Our Response',
    text: 'This revealed a clear need for more affordable, accessible devices. And so our journey began—to create technology truly built for the visually impaired community.',
  },
];

const AboutJourney = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(howDidWeStart));

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  audio.onended = () => setIsPlaying(false);

  return (
    <SectionBlock eyebrow="The Journey" title="What inspired our mission?" className="about-journey">
      <div className="about-journey-cards">
        {journeyCards.map(({ heading, text }) => (
          <div key={heading} className="about-journey-card">
            <h3 className="about-journey-card-heading">{heading}</h3>
            <p className="about-journey-card-text">{text}</p>
          </div>
        ))}
      </div>

      <div className="about-journey-origin">
        <h3 className="about-journey-origin-title">How did ExploraVist start?</h3>
        <button
          className="about-journey-audio-btn"
          onClick={toggleAudio}
          aria-label={isPlaying ? 'Pause origin story' : 'Play origin story'}
        >
          {isPlaying ? <Pause size={22} aria-hidden="true" /> : <Play size={22} aria-hidden="true" />}
          <span>{isPlaying ? 'Pause Story' : 'Play Story'}</span>
        </button>
      </div>
    </SectionBlock>
  );
};

export default AboutJourney;
