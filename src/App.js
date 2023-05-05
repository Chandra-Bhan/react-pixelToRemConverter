import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  const [px, setPx] = useState();
  const [rem, setRem] = useState();
  const baseFontSize = 16;

  const handlePx = (e) => {
    const temp = e.target.value;
    setRem(temp / baseFontSize);
    setPx(temp);
  };

  return (
    <div
      style={{
        border: '5px solid blue',
        padding: '100px',
        width: 'fit-content',
        margin: 'auto',
        marginTop: '5rem',
      }}
    >
      <h1 style={{ color: 'tomato' }}>
        Pixel to rem conversion ( 1rem -/16px)
      </h1>
      <div
        style={{
          display: 'flex',
          width: '20rem',
          justifyContent: 'space-evenly',
          marginTop: '10px',
        }}
      >
        <label className="form-label">Px</label>
        <input
          className="form-control"
          style={{ width: '70px' }}
          type="text"
          value={px}
          onChange={handlePx}
          placeholder={0}
        />
        <label className="form-label">Rem</label>
        <input
          className="form-control text-primary"
          style={{ width: '70px' }}
          type="text"
          value={rem}
          placeholder={0}
          disabled
        />
      </div>
    </div>
  );
}
