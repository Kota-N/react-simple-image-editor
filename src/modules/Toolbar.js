import React, { useEffect } from 'react';
import { themes } from './utils';

const Toolbar = ({
  UI,
  setIsModalOpen,
  polylines,
  polylineCount,
  setPolylineCount,
}) => {
  useEffect(() => {}, [UI]);

  const toolBarStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '80px',
    height: '100%',
    backgroundColor: themes[UI.theme].dark,
    color: 'rgb(128, 128, 128)',
  };

  const toolBarContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  };

  const redoContainerStyle = {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30%',
    width: '70%',
    borderBottom: `1px solid ${themes[UI.theme].mid}`,
  };

  const toolsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30%',
    width: '70%',
    borderBottom: `1px solid ${themes[UI.theme].mid}`,
  };

  const svgIconStyle = {
    width: '40px',
    height: '40px',
  };

  const pathStyle = {
    fill: themes[UI.theme].light,
  };

  return (
    <div className="Toolbar" style={toolBarStyle}>
      <div className="toolbar-container" style={toolBarContainerStyle}>
        <div className="redo-container" style={redoContainerStyle}>
          <div
            className="undo"
            onClick={() =>
              polylineCount > 0 && setPolylineCount(prev => prev - 1)
            }
          >
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
              ></path>
            </svg>
          </div>
          <div
            className="redo"
            onClick={() =>
              polylineCount < polylines.length &&
              setPolylineCount(prev => prev + 1)
            }
          >
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
              ></path>
            </svg>
          </div>
          <div className="reset" onClick={() => setPolylineCount(0)}>
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="tools-container" style={toolsContainerStyle}>
          <div className="pen" onClick={() => setIsModalOpen(prev => !prev)}>
            <svg className="svg-icon" viewBox="0 0 20 20" style={svgIconStyle}>
              <path
                style={pathStyle}
                d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
