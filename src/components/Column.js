import React from 'react'

function FragmentDemo() {

    const items = []
    return (
        <React.Fragment>
            {
                items.map( item => {
                    <React.Fragment key={ item.id }>
                        <h3>Title</h3>
                        <p> { item.title }</p>
                    </React.Fragment>
                })
            }
            <td>React</td>
            <td>Shreedevi</td>
        </React.Fragment> //instead of <React.Fragment> can use <>, one limitation cannot use key attribute
    )
}

export default FragmentDemo

