import React, { useEffect, useRef } from 'react';

import PenModal from './PenModal';

const ToolModal = ({
  UI,
  isModalOpen,
  color,
  setColor,
  size,
  setSize,
  isStraightMode,
  setIsStraightMode,
}) => {
  const toolModalStyleOpen = {
    position: 'absolute',
    top: '0',
    right: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '100%',
    transition: 'all 0.2s',
    transform: 'translateX(0)',
  };
  const toolModalStyleClose = {
    position: 'absolute',
    top: '0',
    right: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '100%',
    transition: 'all 0.2s',
    transform: 'translateX(100%)',
  };

  return (
    <div
      className="ToolModal"
      style={isModalOpen ? toolModalStyleOpen : toolModalStyleClose}
    >
      <PenModal
        UI={UI}
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        isStraightMode={isStraightMode}
        setIsStraightMode={setIsStraightMode}
      />
    </div>
  );
};

export default ToolModal;
