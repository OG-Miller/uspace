import React, { useContext } from "react";
import styled from 'styled-components';
import { RoutingContext } from "./routing-context";

export interface ToolbarOptionProps {
    title: string;
    children?: JSX.Element;
}


export const ToolbarOption = (props: ToolbarOptionProps) => {
    const { setRouteState } = useContext(RoutingContext);

    const handleClick = (title: string) => {
        setRouteState(title);
    }

    return (
        <StyledWrapper>
            <div onClick={() => handleClick(props.title)}>
                {props.title}
            </div>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.li`
   //background-color: var(--test-background);
   display: flex;
   justify-content: flex-start;
   color: black;
   list-style-type: none;
   padding: 10px 10px 15px 10px;
   width: 50px;
  font-family: var(--app-font); 
`
