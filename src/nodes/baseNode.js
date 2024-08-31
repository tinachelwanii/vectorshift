import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, type, label, handles, children }) => {
  const [name, setName] = useState(data?.name || id.replace('custom-', `${type}_`));
  const [nodeType, setNodeType] = useState(data?.nodeType || 'Text');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{label}</span>
      </div>
      <div>
        {children({ name, nodeType, handleNameChange, handleTypeChange })}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
