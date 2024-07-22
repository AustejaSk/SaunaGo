import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

    const activeStyles = {
        textDecorationLine: "underline",
        fontWeight: "700",
        color: "#161616"
    }

    return (
        <div className="site-wrapper">
            <nav className="host-nav">
                <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>
                    Dashboard
                </NavLink>
                <NavLink to="income" style={({isActive}) => isActive ? activeStyles : null}>
                    Income
                </NavLink>
                <NavLink to="saunas" style={({isActive}) => isActive ? activeStyles : null}>
                    Saunas
                </NavLink>
                <NavLink to="reviews" style={({isActive}) => isActive ? activeStyles : null}>
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout