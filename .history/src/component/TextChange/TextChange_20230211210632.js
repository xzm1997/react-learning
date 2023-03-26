import React from 'react';

class Input extends React.Component {
  handleChanged = (e) => {
    this.onChangeText(e.target.text)
  }
  render() {
    return <input onChange={handleTextChanged} />
  }
}

export default class HomePage extends React.Component {
  handleTextChanged = (text) => {
    console.log(text)
  }
  render() {
    return (
        <Input onChangeText={this.handleTextChanged} />
      )
  }
}
