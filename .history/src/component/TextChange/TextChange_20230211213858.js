import React from 'react';
import Root from "./components/Root";

const App = (props) => {
  const getName = (name) => {
	// my name is root
	console.log(name);
  }
  return (
	<div className="app">
	  {/*向子组件传递callback属性，属性值为一个回调函数 */}
	  <Root callback={getName} />
	</div>
  );
}

// 父组件 App
export default App;
