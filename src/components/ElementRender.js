import React, {Component} from 'react';
import data from '../helpers/data.json';

function ListElement(props){
    return(
        <>
            <li>
                <a href={props.webFra} target='_blank' rel="noreferrer" >{props.framework}</a>
            </li>
        </>
    )
}

export default class ElementRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons: ['spring', 'summer', 'fall', 'winter']
        }
    }
    render() {
        console.log(data)
        return(
            <>
                <h3>element Render</h3>
                <ol>
                    {this.state.seasons.map((season, index) => (
                        <li key={index} >{season}</li>))}
                </ol>
                {/* <p>{console.log(data)}</p> */}
                <p>{data.frameworks.map(tech => tech.name)}</p>
                <ul>
                    {data.frameworks.map(tech =>(
                        <ListElement key={tech.id} framework = {tech.name} webFra = {tech.web}/>
                    ))}
                </ul>
            </>
        )
    }
}