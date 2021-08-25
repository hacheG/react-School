import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Properties extends Component {
    
    render() {

        return(
            <>
                <h2>start propertiesファイルの</h2>
                <h3>{this.props.byDefault}</h3>
                <ul>
                    <li>{this.props.chain}</li>
                    <li>{this.props.number}</li>
                    <li>{this.props.boolean ? 'true':'false'}</li>
                    <li>{this.props.array.join(', ')}</li>
                    <li>{this.props.object.name}</li>
                    <li>{this.props.reactElement}</li>
                    <li>{this.props.reactComponent}</li>
                    <li>{this.props.array.map(this.props.myFunction).join(', ')}</li>


                </ul>
            </>
        )
    }
}

export function PropertiesTwo(props){
    return(
        <>
            <h2>func propertiesファイルの </h2>
            <h3>{props.byDefault}</h3>
            <ul>
                    <li>{props.chain2}</li>
                    <li>{props.number2}</li>
                    <li>{props.boolean2 ? 'true': 'false'}</li>
                    <li>{props.array2.join(', ')}</li>
                    <li>{`${props.object2.name} de ${props.object2.lastName}`}</li>
                    <li>{props.reactElement2}</li>
                    <li>{props.reactComponent2}</li>
                    <li>{props.array2.map(props.myFunction2).join(', ')}</li>

            </ul>
        </>
    )
}

Properties.defaultProps = {
    byDefault: "default properties"
}

Properties.propTypes = {
    number: PropTypes.number.isRequired
}