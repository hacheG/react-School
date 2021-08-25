import React, {Component} from 'react';

function Login(){
    return(
        <>
        <h3>login</h3>
        </>
    )
}

function Logout(){
    return(
        <>
        <h3>logout</h3>
        </>
    )
}

export default class ConditionalRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: true
        }
    }
    render(){
        return(
            <>
                <h2>Conditional Render </h2>
                <div>{this.state.user ? <Login/> : <Logout/>}</div>
            </>
        )
    }
}