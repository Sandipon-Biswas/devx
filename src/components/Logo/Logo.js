import React from 'react'
import { NavLink } from 'react-router-dom';
import Style from "./Logo.module.css"
const Logo = () => {
    return (
        <NavLink to="/" className={Style.neon_text} > DevX </NavLink>
    )
}

export default Logo
