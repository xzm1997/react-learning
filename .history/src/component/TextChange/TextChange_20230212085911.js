const Root = (props) => {
	// 获取父组件传递的callback属性值(getName函数)
	const getName = props.callback;
	const name = "my name is Root";
	// 调用getName函数
	getName && getName(name);
	return null;
}

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
