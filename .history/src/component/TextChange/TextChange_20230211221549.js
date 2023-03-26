import React from "react"

const Child = ({ onClick }) => {
	<button onClick={() => onClick('zach')}>Click Me</button>
}

class Parent extends React.Component {
	handleClick = (data) => {
			console.log("Parent received value from child: " + data)
	}
	render() {
			return (
					<Child onClick={this.handleClick} />
			)
	}
}

export default Parent;
