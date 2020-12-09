import React, { useEffect } from 'react';
import { themes } from './utils';

const PenModal = ({
  UI,
  color,
  setColor,
  size,
  setSize,
  isStraightMode,
  setIsStraightMode,
}) => {
  const penModalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: themes[UI.theme].light,
  };
  const lineContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  const optionContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px',
  };

  const buttonStyle = {
    backgroundColor: themes[UI.theme].dark,
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  };
  const buttonStyleActive = {
    backgroundColor: themes[UI.theme].dark,
    padding: '5px 10px',
    borderRadius: '3px',
    opacity: '0.2',
    cursor: 'pointer',
  };

  const svgIconStyle = {
    width: '40px',
    height: '40px',
  };

  const pathStyle = {
    fill: themes[UI.theme].light,
  };

  useEffect(() => {}, [UI]);

  return (
    <div style={penModalStyle} className="PenModal">
      <div style={lineContainerStyle} className="line-container">
        <div style={optionContainerStyle} className="option-container">
          <div
            className="normal"
            onClick={() => {
              setIsStraightMode(false);
            }}
            style={isStraightMode ? buttonStyle : buttonStyleActive}
          >
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
              ></path>
            </svg>
          </div>
          <div
            className="straight"
            onClick={() => {
              setIsStraightMode(true);
            }}
            style={isStraightMode ? buttonStyleActive : buttonStyle}
          >
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="color-container">
        <p
          style={{
            marginBottom: '10px',
            boxShadow: '0 0 3px rgba(0,0,0,0.2)',
            padding: '3px',
          }}
        >
          Color
        </p>
        <input
          type="color"
          onChange={e => setColor(e.target.value)}
          value={color}
          style={{ marginBottom: '20px' }}
        />
      </div>
      <div
        className="size-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            marginBottom: '10px',
            boxShadow: '0 0 3px rgba(0,0,0,0.2)',
            padding: '5px',
          }}
        >
          Size
        </p>
        <input
          type="range"
          min="1"
          max="70"
          step="1"
          value={size}
          onChange={e => setSize(parseInt(e.target.value))}
        />
        <span style={{ boxShadow: '0 0 3px rgba(0,0,0,0.2)', padding: '5px' }}>
          {size}
        </span>
      </div>
    </div>
  );
};

export default PenModal;
