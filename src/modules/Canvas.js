import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({
  UI,
  isModalOpen,
  color,
  size,
  isStraightMode,
  polylines,
  setPolylines,
  polylineCount,
  setPolylineCount,
}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const imgRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnArray, setDrawnArray] = useState([]);
  const [points, setPoints] = useState({});
  const [straightPoint, setStraightPoint] = useState({ start: {} });

  useEffect(() => {}, [isModalOpen, color, size, isStraightMode, UI]);

  useEffect(() => {
    const userImage = new Image();
    userImage.src = UI.image;
    userImage.onload = () => {
      imgRef.current = userImage;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = userImage.width;
      canvas.height = userImage.height;
      canvas.style.width = `${userImage.width}px`;
      canvas.style.height = `${userImage.height}px`;
      canvas.style.top = '0';
      canvas.style.left = '0';

      ctx.lineCap = 'round';
      if (userImage.width > 700 || userImage.height > 500) {
        canvas.style.transform = `scale(${Math.min(
          700 / userImage.width,
          500 / userImage.height
        )})`;
        ctx.lineWidth =
          size * Math.max(userImage.width / 700, userImage.height / 500);
      }

      ctx.drawImage(userImage, 0, 0);

      ctxRef.current = ctx;
    };
  }, [UI.image]);

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      ctxRef.current.drawImage(imgRef.current, 0, 0);
      for (let i = 0; i < polylineCount; i++) {
        ctxRef.current.beginPath();
        if (polylines[i][0].isStraight) {
          for (let j = 0; j < polylines[i].length - 1; j++) {
            ctxRef.current.strokeStyle = polylines[i][j].color;
            ctxRef.current.lineWidth = polylines[i][j].size;
            ctxRef.current.moveTo(polylines[i][j].x, polylines[i][j].y);
            ctxRef.current.lineTo(polylines[i][j + 1].x, polylines[i][j + 1].y);
            ctxRef.current.stroke();
          }
        } else {
          for (let j = 1; j < polylines[i].length - 1; j++) {
            if (polylines[i][j].jsClosed) continue;

            ctxRef.current.strokeStyle = polylines[i][j].color;
            ctxRef.current.lineWidth = polylines[i][j].size;
            ctxRef.current.moveTo(polylines[i][j].x, polylines[i][j].y);
            ctxRef.current.lineTo(polylines[i][j + 1].x, polylines[i][j + 1].y);
            ctxRef.current.stroke();
          }
        }

        ctxRef.current.closePath();
      }
    }
  }, [polylineCount]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (isStraightMode) {
      setStraightPoint(prev => {
        return {
          ...prev,
          start: { x: offsetX, y: offsetY, size, color, isStraight: true },
        };
      });

      ctxRef.current.beginPath();
      ctxRef.current.moveTo(offsetX, offsetY);
    } else {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(offsetX, offsetY);
    }

    setIsDrawing(true);
  };

  const finishDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (isStraightMode) {
      setPolylines(prev => [
        ...prev,
        [
          straightPoint.start,
          { x: offsetX, y: offsetY, size, color, isStraight: true },
        ],
      ]);
      setPolylineCount(prev => prev + 1);

      setStraightPoint({ start: {}, finish: {} });
    } else {
      setPolylines(prev => [...prev, drawnArray]);
      setPolylineCount(prev => prev + 1);
      setDrawnArray([]);
    }
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;

    if (isStraightMode) {
      // ctxRef.current.clearRect(
      //   0,
      //   0,
      //   canvasRef.current.width,
      //   canvasRef.current.height
      // );
      // ctxRef.current.drawImage(imgRef.current, 0, 0);
      // ctxRef.current.moveTo(straightPoint.start.x, straightPoint.start.y);
      // ctxRef.current.lineTo(offsetX, offsetY);
      // ctxRef.current.stroke();
    } else {
      setPoints(prev => {
        return { ...prev, x: offsetX, y: offsetY, size, color };
      });
      setDrawnArray(prev => [...prev, points]);

      ctxRef.current.strokeStyle = color;
      ctxRef.current.lineWidth = size;
      ctxRef.current.lineTo(offsetX, offsetY);
      ctxRef.current.stroke();
    }
    setPolylines(prev => prev.filter((item, index) => index < polylineCount));
  };

  return (
    <div
      className="Canvas"
      style={
        isModalOpen
          ? {
              position: 'absolute',
              top: '100px',
              left: '10px',
              overflow: 'hidden',
              width: '700px',
              height: '500px',
              transition: 'all 0.2s',
              cursor: 'crosshair',
            }
          : {
              position: 'absolute',
              top: '100px',
              left: '110px',
              overflow: 'hidden',
              width: '700px',
              height: '500px',
              transition: 'all 0.2s',
              cursor: 'crosshair',
            }
      }
    >
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={isDrawing ? finishDrawing : console.log}
        onMouseMove={draw}
        style={{ position: 'absolute', transformOrigin: '0 0' }}
      />
    </div>
  );
};

export default Canvas;
