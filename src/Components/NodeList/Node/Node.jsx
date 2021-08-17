import React, { useContext } from 'react';
import style from './Node.module.css';
import ToggleOpenHoc from '../../../hoc/ToggleOpenHOC';
import { Context } from '../../../context';
import NodeList from '../NodeList';

const Node = ({ node, renderChild, onClick }) => {
  const { setRender } = useContext(Context);

  const choose = (e) => {
    !node.children.length ? setRender(true) : onClick(e);
    e.stopPropagation();
  };

  const displayNodeStatus = node.children.length ? ' v' : ' x';

  return (
    <div className={style.node} onClick={choose}>
      <span className={style.nodeName}>{node.name + displayNodeStatus}</span>
      {renderChild && node.children.length > 0 ? <NodeList obj={node.children} /> : null}
    </div>
  );
};

export default ToggleOpenHoc(Node);
