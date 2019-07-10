import React from 'react'
import EltonJohnImg from '../components/eltonJohn'
import ShowEvents from '../components/showevents'

class FullPage extends React.Component{
    render(){
        return <>
            <EltonJohnImg />
            <ShowEvents />
        </>
    }
}

export default FullPage