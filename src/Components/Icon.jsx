import React from 'react';

import windImg from '../assets/Wind.png';       // Capital W agar file ka naam aisa hai
import humidityImg from '../assets/Humidity.png';  // Capital H agar file aisa hai
import visibilityImg from '../assets/Visibility.png';  // Capital V
import sunriseImg from '../assets/Sunrise.png';  // Capital S
import sunsetImg from '../assets/Sunset.png';    // Capital S

const Icon = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
);

export const WindIcon = () => (
  <Icon src={windImg} alt="Wind" className="powerful-pulse svg-hover" />
);

export const HumidityIcon = () => (
  <Icon src={humidityImg} alt="Humidity" className="powerful-pulse svg-hover" />
);

export const VisibilityIcon = () => (
  <Icon src={visibilityImg} alt="Visibility" className="powerful-pulse svg-hover" />
);

export const SunriseIcon = () => (
  <Icon src={sunriseImg} alt="Sunrise" className="powerful-pulse svg-hover" />
);

export const SunsetIcon = () => (
  <Icon src={sunsetImg} alt="Sunset" className="powerful-pulse svg-hover" />
);
