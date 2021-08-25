// import React, {Component} from 'react';
import React from 'react';

// export default class FirstComponent extends Component {
//      render() {
//          return(
//              <>
//                 <p>{this.props.msg}, my first component  </p>
//              </>
//          )
//      }
// }

// function FirstComponent(props){
//     return(
//         <>
//             <p>{props.msg}</p>
//         </>
//     )
// }

const FirstComponent = props => {
    return(<p>{props.msg} into the arrow</p>
)}

export default FirstComponent