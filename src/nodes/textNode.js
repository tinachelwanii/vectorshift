// textNode.js

/*import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
*/
export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="text"
      label="Text"
      handles={[
        { type: 'source', position: Position.Right, id: 'output' },
      ]}
    >
      {({ nodeType, handleNameChange }) => (
        <label>
          Text:
          <input type="text" value={nodeType} onChange={handleNameChange} />
        </label>
      )}
    </BaseNode>
  );
};
