import React, { useState, useContext, createContext } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#eeeeee",
        background: "#000000"
    }
}

const ThemeContext = createContext(themes);

function ThemedButton(props) {
    const theme = useContext(ThemeContext);
    const [themes, setTheme] = useState(theme.dark);

    return (
        <div>
            <div style={{
                width: "100px",
                height: "100px",
                background: themes.background,
                color: themes.foreground
            }}>
                <button onClick={() => setTheme(theme.light)}>light</button>
                <button onClick={() => { setTheme(theme.dark) }}>dark</button>
            </div>
        </div>
    )
}

function ToolBar(props){
    return (
        <div>
            <ThemedButton></ThemedButton>
        </div>
    )
}

function UseContextExample() {
    return (
        <div>
            <ThemeContext.Provider value={themes}>
                <ToolBar></ToolBar>
            </ThemeContext.Provider>
        </div>
    );
}

export default UseContextExample;