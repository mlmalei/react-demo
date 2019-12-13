import React from 'react'
import { ChromePicker } from 'react-color'

import './App.css'

interface IProps {
  title: string
}

interface IState {
  displayColorPicker: boolean
  background: string
}

class App extends React.Component<IProps, IState> {
  state = {
    displayColorPicker: false,
    background: '#fff'
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = (color: any) => {
    if (color) {
      this.setState({ background: color.hex })
    }
  }

  render() {
    const popover: any = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover: any = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <div style={{background: this.state.background}}>
        <button onClick={ this.handleClick }>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <ChromePicker onChangeComplete={this.handleChange}/>
          </div>
        ) : null }
      </div>
    )
  }
}

export default App
