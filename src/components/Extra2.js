import { React, useContext } from "react";
import { Settings } from "../contexts/Settings";
import { Link } from "react-router-dom";

const Extra2 = ({ increaseCounter }) => {

    const { isLightTheme,
        // light,
        // dark,
        lang
        // toggleTheme,
        // toggleLang
    } = useContext(Settings);
    // const theme = isLightTheme ? light : dark;

    return (
        <div className="Extra2">
            <span>Extra2</span><br />
            <button className="button" onClick={increaseCounter}>increase counterInApp</button>
            <br /><span>{`Settings: isLightTheme: ${isLightTheme} | lang: ${lang}`}</span>
            <br /><Link to="/Extra1">Link to Extra1</Link>
            <br /><Link to="/">Link to Main</Link>
        </div>
    )
}

export default Extra2;