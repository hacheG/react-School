import React, {Component}from 'react';

class Reloj extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
            console.log(3, 'CWUn - tha component has been eliminated');
        }

    render(){
        return(
            <>
                <h3>{this.props.hour}</h3>
            </>
        )
    }
}

export default class LifeClicle extends Component {
    constructor(props){
        super(props);
        console.log(0, 'construc -  The component is not yet into the DOM');

        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible:false
        };

        this.timer = null;
    }

    componentDidMount(){
        console.log(1, 'CDM - The component is in the DOM');
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, 'CDUp - state or props have changed');
        console.log(prevProps);
        console.log(prevState);
    }

    //i will put in above component
    // componentWillUnmount(){
    //     console.log(3, 'CDUn - tha component has been eliminated');
    // }
    
    ticTac = () => {
        this.timer = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    start = () => {
        this.ticTac();

        this.setState({
            visible: true
        })
    }

    end = () => {
        clearInterval(this.timer);

        this.setState({
            visible: false
        })
    }

    render(){
        console.log(4, 'render -  component redraw because the DOM have any change');
        return(
            <>
                <h2>Life Cicle of class components</h2>
                <h3>{this.state.hour}</h3>
                <h4>{this.state.visible === true ? <Reloj hour = {this.state.hour}/> : null} </h4>
                <h4>{this.state.visible && <Reloj hour = {this.state.hour}/>} </h4>
                <button onClick={this.start}>Start</button>
                <button onClick={this.end}>End</button>
            </>
        )
    }

}