import * as React from "react";

interface RouteContext {
    routeState: string;
    //setRouteState?:() => void;// React.Dispatch<React.SetStateAction<string>>;
    setRouteState?: React.Dispatch<React.SetStateAction<string>>;
}



//let [routeState, setRouteState] = React.useState("home");
//export const RoutingContext = React.createContext({ routeState, setRouteState });
export const RoutingContext = React.createContext<RouteContext | undefined>({routeState: "Home", setRouteState: () => {}});
