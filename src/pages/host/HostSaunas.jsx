import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHostSaunas } from '../../api'

const HostSaunas = () => {
    const [hostSaunas, setHostSaunas] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getHostSaunas()
        .then(data => {setHostSaunas(data)})
        .catch(err => setError(err))
        .finally(() => {
            setTimeout(() => {
                setLoading(false)
            }, 300)
        })
    }, [])

    const hostSaunasEl = hostSaunas.map(sauna => {
        return (
            <Link to={sauna.id} key={sauna.id}>
                <div className="sauna-card">
                    <div className="sauna-card-inner">
                        <img src={sauna.imageUrl} />
                        <div>
                            <h4>{sauna.name}</h4>
                            <p>${sauna.price}/day</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    const hostSaunasElState = () => {
        if (loading) {
            return <h1>Loading...</h1>
        } else if (error) {
            return <h1>There was an error: {error.message}</h1>
        } else {
            return hostSaunasEl
        }
    }

    return (
        <div className="host-saunas-section">
            <h1 className="host-titles">Your listed saunas</h1>
            <div>
                {hostSaunasElState()}
            </div>
        </div>
    )
}

export default HostSaunas