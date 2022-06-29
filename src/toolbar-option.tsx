import React from "react";
import styled from 'styled-components';

export interface ToolbarOptionProps {
    title: string;
    children?: JSX.Element;
}

export const handleClick = (e:React.MouseEvent, title: string) => {
   e.preventDefault();
    window.location.href = `?page=${title}`;
}

export const ToolbarOption = (props: ToolbarOptionProps) => (
    <Wrapper>
        <button onClick={(e) => handleClick(e, props.title)}>
            {props.title}
        </button>
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
