import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { getSauna } from '../api.js'
import arrowIcon from '../images/arrow-1.svg'

const Sauna = () => {

    const location = useLocation()
    const pathname = location.pathname
    const saunaId = pathname.split("/").pop()

    const [sauna, setSauna] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getSauna(`${saunaId}`)
                setSauna(data)
            } catch(err) {
                setError(err)
            } finally {
                setTimeout(() => setLoading(false), 300)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return <h1 className='info-text'>Loading...</h1>
    }

    if (error) {
        return <h1 className='info-text'>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <section className="sauna" key={saunaId}>
            <Link to={`..${search}`} relative="path" className="back-btn">
                <span>
                    <img src={arrowIcon} className="arrow-icon"/>
                </span>
            Back to {type} saunas</Link>
            <div>
                <img className="sauna-img single" src={sauna.imageUrl} />
                <div className="sauna-info">
                    <h3 className={`sauna-type single ${sauna.type}`}>{sauna.type}</h3>
                    <h1 className="sauna-name single">{sauna.name}</h1>
                    <h2 className="sauna-price single">${sauna.price}<span>/day</span></h2>
                    <p className="sauna-description">{sauna.description}</p>
                    <button className="sauna-btn button">Rent this sauna</button>
                </div>
            </div>
        </section>
    )
}

export default Sauna