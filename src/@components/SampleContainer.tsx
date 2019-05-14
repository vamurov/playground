import {Action} from "redux";
import {appActions} from "@store";
import * as React from "react";
import {RootState} from "../@model";
import {connect} from "react-redux";
import {AgGridReact} from "ag-grid-react";
import {Link} from "react-router-dom";

interface Props {
    title: string;
}

interface OwnProps {

}

interface DispatchProps {
    setTitle: () => void;
    fetchData: () => void;
}

const columnDefs = [{
        headerName: "Make", field: "make"
    }, {
        headerName: "Model", field: "model"
    }, {
        headerName: "Price", field: "price"
    }],
    rowData = [{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    }, {
        make: "Porsche", model: "Boxter", price: 72000
    }];

type AllProps = Props & OwnProps & DispatchProps;

class SampleComponent extends React.PureComponent<AllProps> {
    componentDidMount(): void {
        this.props.setTitle();
        this.props.fetchData();
    }

    render() {
        return <div style={{height: '100%'}} className="ag-theme-balham">
            <Link to="/foo">
                <button>Go to Foo</button>
            </Link>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
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

export const SampleContainer = connect(mapStateToProps, mapDispatchToProps)(SampleComponent);