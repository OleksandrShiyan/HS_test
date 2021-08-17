import React from 'react';
import Node from './Node/Node';
import style from './NodeList.module.css';

const NodeList = ({ obj }) => {
  return (
    <div className={style.nodeList}>
      {obj.map((node) => (
        <Node key={node.name} node={node} />
      ))}
    </div>
  );
};

export default NodeList;
