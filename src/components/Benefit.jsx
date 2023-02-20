import history from 'hooks/history';
import React from 'react';
const Benefit = () => {
  const returnHelloWorld = () => {
    return Array.from({length: 10000}, (v, i) => i).map(item => (
      <p>hello World</p>
    ));
  };

  const time = () => {
    console.time('DOMappend(React)');
    returnHelloWorld();
    console.timeEnd('DOMappend(React)');
  };
  return <div>{time()}</div>;
};

export default Benefit;
