import { Context } from './context';
import React, { useState } from 'react';
import style from './Components/NodeList/NodeList.module.css';
import Node from './Components/NodeList/Node/Node';
import { generateTree } from './utils/functions/generateTree';
import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from './graphql/query/continents';

const generatedArr = generateTree(3, 3);

let obj = {
  data: [
    {
      name: 'String_1',
      children: [
        {
          name: 'String_1.1',
          children: [
            {
              name: 'String_1.1.1',
              children: [
                // ...
              ],
            },
            {
              name: 'String_1.1.2',
              children: [
                // ...
              ],
            },
          ],
        },
        {
          name: 'String_1.2',
          children: [
            {
              name: 'String_1.2.1',
              children: [
                // ...
              ],
            },
            {
              name: 'String_1.2.2',
              children: [
                // ...
              ],
            },
          ],
        },
        // ...
      ],
    },
    {
      name: 'String_2',
      children: [
        // ...
      ],
    },
    // ...
  ],
};

function App() {
  const [render, setRender] = useState(false);

  const { data } = useQuery(GET_CONTINENTS);
  console.log('data: ', data);

  return (
    <Context.Provider
      value={{
        setRender,
        render,
      }}
    >
      <div className={style.nodeList}>
        {generatedArr.data.map((node) => (
          <Node key={node.name} node={node} />
        ))}
      </div>
    </Context.Provider>
  );
}

export default App;
