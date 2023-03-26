import React from 'react';

class Input  extends React.Component {
  handleTextChanged = (e) => {
    this.onChangeText(e.target.text)
  }
  render() {
    return <input onChange={handleTextChanged} />
  }
}

class HomePage extends React.Component {
  handleTextChanged = (text) => {
    console.log(text)
  }
  render() {
    return (
        <Input onChangeText={this.handleTextChanged} />
      )
  }
}

export default HomePage;
