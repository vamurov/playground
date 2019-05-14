import * as React from "react";

interface Props {
    loading: boolean;
}

export const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.PureComponent<P & Props> {
        render() {
            const {loading, ...props} = this.props;
            return loading ? <div>Loading</div> : <Component {...props as P} />;
        }
    };