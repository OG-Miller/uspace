import * as React from "react";
import styled from 'styled-components';

//const handleClick = (e) => {
//     
//}


const StyledButton = styled.div`
  width: 100px;
`

export const Button = (props:{label: string}) => {
 return (
        //<button onClick={(e) => handleClick(e, label)}>
        <StyledButton>
            {props.label}
        </StyledButton>
  
 )
}
