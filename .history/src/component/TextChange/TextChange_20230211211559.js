import { useState } from 'react';

const Son = ({ setCount }) => {
    return <button onClick={() => setCount(count => count + 1)}>点击+1</button>;
};

const Father = () => {
  let count= useState(0);
  const setFunc = function() {
    count += 1;
  }
  return (
    <div>
        <div>计数值：{count}</div>
        <Son setCount={setCount} />
    </div>
  );
};

export default Father;
