import {ReactNode} from "react";
import * as React from "react";

interface Props {
    if: boolean;
    children?: ReactNode;
}


export const Show = React.memo((props: Props) =>
    props.if ? props.children as React.ReactElement<{}> : null)
