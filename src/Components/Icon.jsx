import React from 'react';

// Fix filenames to exactly match case-sensitive file names in ../assets
import humidityImg from '../assets/humidity.png'; 
import WindImg from '../assets/Wind.png';
import VisibilityImg from '../assets/Visibility.png';
import SunriseImg from '../assets/Sunrise.png';
import SunsetImg from '../assets/Sunset.png';

const Icon = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
);

export const WindIcon = () => (
  <Icon src={WindImg} alt="Wind" className="powerful-pulse svg-hover" />
);

export const HumidityIcon = () => (
  <Icon src={humidityImg} alt="humidity" className="powerful-pulse svg-hover" />
);

export const VisibilityIcon = () => (
  <Icon src={VisibilityImg} alt="Visibility" className="powerful-pulse svg-hover" />
);

export const SunriseIcon = () => (
  <Icon src={SunriseImg} alt="Sunrise" className="powerful-pulse svg-hover" />
);

export const SunsetIcon = () => (
  <Icon src={SunsetImg} alt="Sunset" className="powerful-pulse svg-hover" />
);
