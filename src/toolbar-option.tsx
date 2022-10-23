import React, { useContext, useState } from "react";
import styled from 'styled-components';
import { RoutingContext } from "./routing-context";

export interface ToolbarOptionProps {
    title: string;
    children?: JSX.Element;
}


export const ToolbarOption = (props: ToolbarOptionProps) => {
    const { setRouteState } = useContext(RoutingContext);
    const [hover, setHover] = useState(false);

    const handleClick = (title: string) => {
        setRouteState(title);
    }

    //type Hover = boolean;

    //let hover: Hover = true;

    const handleMouseEnter= () => {
        setHover(!hover);
        //setHoverColor("#ec730b");
    }

    const handleMouseLeave= () => {
        setHover(!hover);
        //setHoverColor("#ec730b");
    }
    const StyledWrapper = styled.li`
       //background-color: var(--test-background);
       //border: var(--border);
       display: flex;
       justify-content: flex-start;
       color: ${hover ? "#ec730b": "black"};
       list-style-type: none;
       padding: 10px 10px 15px 10px;
       width: 50px;
       font-family: var(--app-font); 
    `

    return (
        <StyledWrapper onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} >
            <div onClick={() => handleClick(props.title)}>
                {props.title}
            </div>
        </StyledWrapper>
    )
};

