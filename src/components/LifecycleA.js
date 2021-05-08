import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shreedevi'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    render() {
        console.log('LifecycleA render method')
        return (
            <div>
                lifecyclcle A 
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
