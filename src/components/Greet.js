import React from 'react'

/*
function Greet(){
    return <h1>Hello Shree!!!</h1>
}
*/

//export const Greet = () => <h1>Hello shree</h1> //named export in this cant change the component name in App.js
// const Greet = (props) => {
// console.log(props);
//const Greet = ({name, heroName}) =>{ //destructuring
const Greet = (props) =>{
    const {name, heroName} = props
    return( 
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/*children*/} 
        </div>
        )
}
export default Greet