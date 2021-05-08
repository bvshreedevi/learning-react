import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('Reg Comp Render')
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp
