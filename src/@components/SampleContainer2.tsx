import {Action} from "redux";
import {appActions} from "@store";
import * as React from "react";
import {RootState} from "../@model";
import {connect} from "react-redux";

interface Props {
    title: string;
}

interface OwnProps {

}

interface DispatchProps {
    setTitle: () => void;
    fetchData: () => void;
}


type AllProps = Props & OwnProps & DispatchProps;

class SampleComponent extends React.PureComponent<AllProps> {
    componentDidMount(): void {
    }

    render() {
        return <div style={{height: '100%'}} className="ag-theme-balham">
            {this.props.title}
        </div>
    }
}

const mapDispatchToProps = (dispatch: (action: Action) => void, props: OwnProps): DispatchProps => ({
    setTitle: () => {
        dispatch(appActions.setTitle('my title'));
    },
    fetchData: () => {
        dispatch(appActions.fetchData())
    }
});

const mapStateToProps = (state: RootState, props: OwnProps) => {
    return {
        title: state.app.title
    }
}

export const SampleContainer2 = connect(mapStateToProps, mapDispatchToProps)(SampleComponent);