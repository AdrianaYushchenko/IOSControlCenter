import {StatusBar} from 'expo-status-bar';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UIContext from "./context/ui-context";
import Main from "./components/Menu/Main";
import {UIContextProvider} from "../ControlCenter/context/ui-context";
import FocusOpenWindow from "./components/Menu/FocusMenu/FocusOpenWindow";
import {AppContainer} from "./styles/styles";

export default function App() {

    return (
        <UIContextProvider>
            <AppContainer>
                <Main/>
            </AppContainer>
        </UIContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
