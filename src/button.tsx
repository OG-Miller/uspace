import * as React from "react";
import styled from 'styled-components';

//const handleClick = (e) => {
//     
//}


export const Button = (props:{label: string}) => {
 return (
        //<button onClick={(e) => handleClick(e, label)}>
        <button>
            {props.label}
        </button>
  
 )
}



