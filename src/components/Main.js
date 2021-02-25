import { React, useContext } from "react";
import { Settings } from "../contexts/Settings";
import { Link } from "react-router-dom";

const Main = ({ increaseCounter }) => {

    const { isLightTheme,
        // light,
        // dark,
        lang
        // toggleTheme,
        // toggleLang
    } = useContext(Settings);
    // const theme = isLightTheme ? light : dark;

    return (
        <div className="Main">
            <span>Main</span><br />
            <button className="button" onClick={increaseCounter}>increase counterInApp</button>
            <br /><span>{`Settings: isLightTheme: ${isLightTheme} | lang: ${lang}`}</span>
            <br /><Link to="Extra1">Link to Extra1</Link>
        </div>
    )
}

export default Main;