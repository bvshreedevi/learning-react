import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }

        //this.clicHandler = this.clicHandler.bind(this)
    }
    // clicHandler(){
    //     console.log(this)
    //     this.setState(
    //         {
    //             message:'Good bye'
    //         }
    //     )
      
    // }

    clickHandler = () => {
        this.setState({message:'Goodbye'})
      }

    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                { /*<button onClick={this.clicHandler.bind(this)}>click event bindings</button> */ }
                {/* <button onClick={ () => this.clicHandler()}>click event bindings</button> */} 
                <button onClick={this.clickHandler}>click event bindings</button>
            </div>
        )
    }
}

export default EventBind
