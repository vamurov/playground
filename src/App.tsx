import React from 'react';
import './App.css';
import styled from "styled-components";
import {SampleContainer, StoreAwareRouter} from '@components'
import {Show} from "@components";

interface Props {
    colour: string;
}

export const Container = styled.div<Props>`
  color: ${props => props.colour}
`

const App: React.FC = () => {
    return (
        <div style={{height: "100%", width: "100%"}} className="App">
            <StoreAwareRouter>
                <Show if={true}>
                    <SampleContainer/>
                </Show>
            </StoreAwareRouter>
        </div>
    );
}

export default App;
