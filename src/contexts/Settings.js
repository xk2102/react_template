import React, { createContext, useState } from "react";

export const Settings = createContext();

const SettingsProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [lang, setLang] = useState("eng");

    const light = {
        textColor: "#121212",
        bgColor: "#e6e6e6",
        markColor: "#cccccc",
        linkColor: "#0066cc",
        borderColor: "#121212",
        shadowColor: "#121212"
    };
    const dark = {
        textColor: "#e6e6e6",
        bgColor: "#121212",
        markColor: "#333333",
        linkColor: "#66b3ff",
        borderColor: "grey",
        shadowColor: "#595959"
    };

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    const toggleLang = () => {
        lang.match("eng") ? setLang("ger") : setLang("eng");
    };

    return (
        <Settings.Provider
            value={{ isLightTheme, light, dark, lang, toggleLang, toggleTheme }}
        >
            {props.children}
        </Settings.Provider>
    );
};

export default SettingsProvider;
