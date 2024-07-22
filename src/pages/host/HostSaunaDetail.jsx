import React, { useEffect, useState } from 'react'
import { useLocation, NavLink, Outlet, Link } from 'react-router-dom'
import { getSauna } from '../../api'
import arrowIcon from '../../images/arrow-1.svg'

const HostSaunaDetail = () => {
    const location = useLocation()
    const pathname = location.pathname
    const saunaId = pathname.split("/").pop()
    const from = location.state?.from || ".."

    const [sauna, setSauna] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getSauna(saunaId)
            .then(data => setSauna(data))
            .catch(err => setError(err))
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 300)
            })
    }, [])

    const activeStyle = {
        textDecorationLine: "underline",
        fontWeight: "700",
        color: "#161616"
    }

    const saunaDetailEl = () => {
        if (loading) {
            return <h1 className='info-text'>Loading...</h1>
        } else if (error) {
            return <h1 className='info-text'>There was an error: {error.message}</h1>
        } else {
            return (
                <div className="sauna-detail-container">
                    <div className="sauna-detail-top">
                        <img src={sauna.imageUrl} />
                        <div>
                            <h3 className={`sauna-type ${sauna.type}`}>{sauna.type}</h3>
                            <h1>{sauna.name}</h1>
                            <h2>${sauna.price}<span>/day</span></h2>
                        </div>
                    </div>
                    <nav>
                        <NavLink to="." end style={({isActive}) => isActive ? activeStyle : null}>Details</NavLink>
                        <NavLink to="pricing" end style={({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink>
                        <NavLink to="photos" end style={({isActive}) => isActive ? activeStyle : null}>Photos</NavLink>
                    </nav>
                    <Outlet context={[sauna, setSauna]}/>
                </div>
            )
        }
    }

    return (
        <>
            <Link to={from} relative="path" className="host-saunas back-btn">
                <span>
                    <img src={arrowIcon} className="arrow-icon"/>
                </span>
            Back to {from === ".." ? "all saunas" : "dashboard"}</Link>
            {saunaDetailEl()}
        </>
    )
}

export default HostSaunaDetail