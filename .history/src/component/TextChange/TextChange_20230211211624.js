import { useState } from 'react';

const Son = ({ setCount }) => {
    return <button onClick={setCount}>点击+1</button>;
};

const Father = () => {
  let [count, setCount] = useState(0);
  const setFunc = function() {
    count += 1;
  }
  return (
    <div>
        <div>计数值：{count}</div>
        <Son setCount={setFunc} />
    </div>
  );
};

export default Father;
