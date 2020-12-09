import React, { useEffect, useState } from 'react';
import './styles/style.css';

import Canvas from './modules/Canvas';
import Toolbar from './modules/Toolbar';
import ToolModal from './modules/ToolModal';
import { themes } from './modules/utils';

const ImageEditor = ({ editorUI }) => {
  const [UI, setUI] = useState({
    theme: 'yellow',
    image: '',
  });
  useEffect(() => {
    setUI(prev => {
      return {
        ...prev,
        theme: editorUI.theme,
        image: editorUI.image,
      };
    });
  }, [editorUI]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState('#000');
  const [size, setSize] = useState(5);

  const [isStraightMode, setIsStraightMode] = useState(false);

  const [polylines, setPolylines] = useState([[{}]]);
  const [polylineCount, setPolylineCount] = useState(0);

  const imageEditorStyle = {
    position: 'relative',
    width: '1000px',
    height: '700px',
    backgroundColor: themes[UI.theme].mid,
    overflow: 'hidden',
    boxShadow:
      '0 0 10px 3px rgba(0, 0, 0, 0.5), 0 0 30px 2px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="ImageEditor" style={imageEditorStyle}>
      <Canvas
        UI={UI}
        isModalOpen={isModalOpen}
        color={color}
        size={size}
        isStraightMode={isStraightMode}
        polylines={polylines}
        setPolylines={setPolylines}
        polylineCount={polylineCount}
        setPolylineCount={setPolylineCount}
      />
      <ToolModal
        UI={UI}
        isModalOpen={isModalOpen}
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        isStraightMode={isStraightMode}
        setIsStraightMode={setIsStraightMode}
      />
      <Toolbar
        UI={UI}
        setIsModalOpen={setIsModalOpen}
        polylines={polylines}
        polylineCount={polylineCount}
        setPolylineCount={setPolylineCount}
      />
    </div>
  );
};

export default ImageEditor;
