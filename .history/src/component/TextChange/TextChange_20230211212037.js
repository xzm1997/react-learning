import { useState } from 'react';

const Son = ({ setCountNum }) => {
    return <button onClick={() => setCountNum(count => count + 1)}>点击+1</button>;
};

const Father = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>计数值：{count}</div>
            <Son setCount={setCount} />
        </>
    );
};

export default Father;
