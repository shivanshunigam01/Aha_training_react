import React, { Component } from 'react'

export default class DemoClass extends Component {
constructor(props){
    super(props)
    this.state={counter:5}
    console.log("This is the constructor:");
}

updateState(){
    this.setState({counter:this.state.counter+1})

}
  render() {
    return (
      <div>
      {this.state.counter}
      <button onClick={() => {this.updateState()}} >Click</button>
        
      </div>
    )
  }
}
