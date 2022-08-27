import React, { useContext } from "react";
import styled from 'styled-components';
import { RoutingContext } from "./routing-context";

export interface ToolbarOptionProps {
    title: string;
    children?: JSX.Element;
}


export const ToolbarOption = (props: ToolbarOptionProps) => {
    const { routeState, setRouteState } = useContext(RoutingContext);

    const handleClick = (title: string) => {
        console.log('attempting to set global state');
        setRouteState(title);
    }

    return (
        <Wrapper>
            <button onClick={() => handleClick(props.title)}>
                {props.title}
            </button>
        </Wrapper>
    )
};

const Wrapper = styled.li`
   color: black;
   list-style-type: none;
   padding: 10px;
   padding-bottom: 15px;
   width: 100%;
  justify-self: centre;
  font-family: var(--app-font); 
`
