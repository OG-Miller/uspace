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
   display: flex;
   justify-content: center;
   color: black;
   list-style-type: none;
   padding: 10px;
   padding-bottom: 15px;
   width: 100px;
  font-family: var(--app-font); 
`
