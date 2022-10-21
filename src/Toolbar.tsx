import * as React from "react";
import {ToolbarOption} from './toolbar-option';
import styled from 'styled-components';

export const Toolbar = () => (
    <Wrapper> 
     <Hr/>
        <ToolbarOption title="Home"><p>"home????"</p></ToolbarOption>
     <Hr/>
        <ToolbarOption title="Search"/>
     <Hr/>
        <ToolbarOption title="Info"/>
     <Hr/>
    </Wrapper> 
);

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;


 @media (min-width: 570px) {  
  flex-direction: column;
 }
` 

const Hr = styled.div`
   height: 5px;
   border-top: var(--border);
`
