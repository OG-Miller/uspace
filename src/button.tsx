import * as React from "react";
import styled from 'styled-components';

//const handleClick = (e) => {
//     
//}


const StyledButton = styled.div`
  display: flex;
  width: 100px;
  //border: var(--border);
`

export const Button = (props:{label: string}) => {
 return (
        //<button onClick={(e) => handleClick(e, label)}>
        <StyledButton>
            {props.label}
        </StyledButton>
  
 )
}
