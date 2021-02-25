import { React, useContext } from "react";
// import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Settings } from "../contexts/Settings";


const Header = ({ title, decreaseCounter }) => {

    const { isLightTheme,
        // light,
        // dark,
        lang,
        toggleTheme,
        toggleLang
    } = useContext(Settings);
    // const theme = isLightTheme ? light : dark;


    return (
        <div className="Header">
            <span>{`Header | title: ${title}`}</span><br />
            <button className="button" onClick={decreaseCounter}>decrease counterInApp</button><br />
            <button className="button" onClick={toggleTheme}>toggleTheme</button>
            <button className="button" onClick={toggleLang}>toggleLang</button>
            <br /><span>{`Settings: isLightTheme: ${isLightTheme} | lang: ${lang}`}</span>
        </div>
    )
}

Header.defaultProps = {
    title: 'react_template',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;