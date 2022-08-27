import * as React from "react";
import styled from 'styled-components';
import { Button } from "./button";
import { RoutingContext } from "./routing-context";

export const Main = () => {
    const routeState = React.useContext(RoutingContext);

    function loadComponent(label: string): JSX.Element {

        switch (label) {
            case "Home": {
                //return <Button label="Home" />;
                return <div>Home</div>;
            }
            case "Search": {
                //return <Button label="Search" />;
                return <div>Search</div>;
            }
            case "Info": {
                // return <Button label="Info" />;
                return <div>Info</div>;
            }
        }
    }

    let component = loadComponent(routeState.routeState);
    console.log({ component });

    return (
        <Wrapper>
            {component}
        </Wrapper>

    )
};

const Wrapper = styled.div`
  font-family: var(--app-font);
  font-size: 20px;
  line-height: 1.6;
  padding: 40px;
`



