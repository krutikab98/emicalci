import React from 'react';

const Slider = ({ label, min, max, value, onChange }) => {
  return (
    <div className="slider-container">
      <label>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
