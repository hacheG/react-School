import { render } from '@testing-library/react';
import React, {Component} from 'react';

export class EventsES6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this);
        // this.restar = this.sumar.bind(this);
    }

    sumar(){
        console.log("Sumando");
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar(){
        console.log("Restando");
        this.setState({
            contador:this.state.contador-1
        })
    }
    render(){
        return(
            <>
                <h2>test events</h2>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar.bind(this)} >-</button>
                </nav>
                <h3>{this.state.contador}</h3>

            </>
        )
    }
}

//properties initializer
export class EventsES7 extends Component {
    state = {
        contador: 0
    }

    sumar = () => {
        console.log("Sumando ES7");
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar = () => {
        console.log("Restando ES7");
        this.setState({
            contador: this.state.contador-1
        })
    }
    render(){
        return(
            <>
                <h2>events with ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </>
        )
    }
}

// function Button(props){
//     return(
//         <>
//             <button onClick = {props.myOnClick} >Button made component </button>
//         </>
//     )
// }
/*LA MISMA DE ARRIBA PERO CON DESTRUCTURING  */
function Button({myOnClick}){
    return(
        <>
            <button onClick = {myOnClick} >Button made component </button>
        </>
    )
}

export class MoreAboutEvents extends Component {
    
    handleClick = (e, message) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(e.target);
        console.log(message);
    }
    render(){
        return(
            <>
            <h2>more about events </h2>
                <button onClick={ (e) => this.handleClick(e, 'hi from an event')}>Grettings</button>
                {/* <Button onClick={ (e) => this.handleClick(e, 'hi from an prop')}/> */}
                <Button myOnClick={ (e) => this.handleClick(e, 'hi from an prop')}/>
            </>
        )
    }
}