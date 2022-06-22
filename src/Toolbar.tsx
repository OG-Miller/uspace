import * as React from "react";
import {ToolbarOption} from './ToolbarOption';
import styled from 'styled-components';

export const Toolbar = () => (
    <Wrapper> 
     <Hr/>
        <ToolbarOption title="Home"/>
     <Hr/>
        <ToolbarOption title="Search"/>
     <Hr/>
        <ToolbarOption title="Info"/>
     <Hr/>
    </Wrapper> 
);

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
` 

const Hr = styled.div`
   height: 5px;
   border-top: 1px solid var(--grid-gray);
`
