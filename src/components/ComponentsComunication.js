import React,{Component} from 'react';

export default class Padre extends Component {
    state = {
        counter: 0
    }

    countIncrement = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return(
            <>
                <h2>comunication between components</h2>
                <h3>{this.state.counter}</h3>
                <Child message= "message for child 1"/>
                <Child myOwnCounter= {this.countIncrement}  message= "message for child 2"/>
            </>
        )
    }
}

function Child (props) {
    return(
        <>
            <button onClick= {props.myOwnCounter}>+</button>
            <h3>{props.message}</h3>
        </>
    )
}
