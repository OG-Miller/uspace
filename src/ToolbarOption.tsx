import * as React from "react";
import styled from 'styled-components';

export interface ToolbarOptionProps {
  title: string;
}


export const ToolbarOption = (props: ToolbarOptionProps) => (
    <Wrapper> 
        {props.title}
    </Wrapper> 
);

const Wrapper = styled.li`
   color: black;
   list-style-type: none;
   padding: 10px;
   padding-bottom: 15px;
   width: 100%;
  justify-self: centre;
  font-family: var(--app-font); 
`
