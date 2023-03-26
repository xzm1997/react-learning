const Child = ({ onClick }) => {
	<div onClick={() => onClick('zach')}>Click Me</div>
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
