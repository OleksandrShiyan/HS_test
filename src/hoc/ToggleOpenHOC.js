import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

const ToggleOpenHoc = (Component) => {
  function ToggleComponent(props) {
    const { render, setRender } = useContext(Context);
    const [renderChild, setRenderChild] = useState(false);

    const toggleRenderChild = (e) => {
      setRenderChild((state) => !state);
      e.stopPropagation();
    };

    useEffect(() => {
      if (render && renderChild) {
        setRenderChild(false);
        setRender(false);
      }
    }, [render]);

    return <Component {...props} onClick={toggleRenderChild} renderChild={renderChild} />;
  }

  return ToggleComponent;
};

export default ToggleOpenHoc;
