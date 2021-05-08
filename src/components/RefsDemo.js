import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbref = null
        this.setcbRef = (element) => {
            this.cbrRef = element
        }
    }
    
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        //alert(this.inputRef.current.value)
        if(this.cbRef){
            this.cbrRef.focus()
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setcbRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo
