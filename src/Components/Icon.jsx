import React from 'react';
import windImg from '../assets/wind.png';
import humidityImg from '../assets/humidity.png';
import visibilityImg from '../assets/visibility.png';
import sunriseImg from '../assets/sunrise.png';
import sunsetImg from '../assets/sunset.png';
import windImg from '../assets/Wind.png';

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
