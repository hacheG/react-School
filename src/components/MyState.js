import React, {Component} from 'react';

function ChildState(props){
    return(
        <>
            <h3>{props.childCounter}</h3>
        </>
    )
}

export default class MyState extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador + 1
        //     })
        // }, 1000);
    }
    render(){
        return(
            <>
                <h3>this is my state class</h3>
                <p>{this.state.contador}</p>
                <p><ChildState childCounter = {this.state.contador}/> </p>
            </>
        )
    }
}
