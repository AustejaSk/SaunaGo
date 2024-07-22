import React, { useState, useEffect }from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import starIcon from '../../images/star-icon.svg'
import { getHostSaunas } from '../../api.js'

const Dashboard = () => {

    const [saunas, setSaunas] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const loaction = useLocation()

    useEffect(() => {
        setLoading(true)
        getHostSaunas()
            .then(data => setSaunas(data))
            .catch(err => setError(err))
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 300)
            })
    }, [])
    
    const hostSaunasEl = saunas.map(sauna => {
        return (
            <div className="sauna-card" key={sauna.id}>
                <div className="sauna-card-inner">
                    <img src={sauna.imageUrl} />
                    <div>
                        <h4>{sauna.name}</h4>
                        <p>${sauna.price}/day</p>
                    </div>
                    <NavLink
                        to={`saunas/${sauna.id}`}
                        state={{from: loaction.pathname}}
                        className="details-btn">
                    Edit</NavLink>
                </div>
            </div>
        )
    })


    const hostSaunasElState = () => {
        if (loading) {
            return <h1>Loading...</h1>
        } else if (error) {
            return <h1>Error: {error.message}</h1>
        } else {
            return hostSaunasEl
        }
    }


    return (
        <div>
            <div className="welcome-section">
                <h1 className="host-titles">Welcome!</h1>
                <div>
                    <p className="gray-small-text">Income last <span className="underline">30 days</span></p>
                    <Link to="income" className="details-btn">Details</Link>
                </div>
                <p>$2,260</p>
            </div>
            <div className="reviews-section">
                <h2>Review score</h2>
                <img src={starIcon} aria-label="Star icon"/>
                <p>5.0<span>/5</span></p>
                <Link to="reviews" className="details-btn">Details</Link> 
            </div>
            <div className="saunas-section">
                <div className="saunas-section-top">
                    <h3>Your listed Saunas</h3>
                    <Link to="saunas" className="details-btn">View all</Link>
                </div>
                {hostSaunasElState()}
            </div>
        </div>
    )
}

export default Dashboard