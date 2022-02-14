import React from 'react';
import { serialize, deserialize } from './ReactSerialize';
import './style.css';

const jsxEle = (
  <div>
    <h1 style={{ color: 'red' }}>Hello StackBlitz!</h1>
    <div>
      <p class="bigbig">Start editing to see some magic happen :)--</p>
    </div>
  </div>
);

const json = serialize(jsxEle);
console.log('json', json);

const output = deserialize(json);
console.log('output', output);

export default function App() {
  return output;
}
