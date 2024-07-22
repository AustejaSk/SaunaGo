import React, { useState, useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { getSaunas } from '../api.js'

const Saunas = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [saunas, setSaunas] = useState([])
    const [loading, setLoading] =  useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getSaunas()
                setSaunas(data)
            } catch(err) {
                setError(err)
            } finally {
                setTimeout(() => setLoading(false), 300)
            }
        }
        fetchData()
    }, [])

    const displayedSaunas = typeFilter
        ? saunas.filter(sauna => sauna.type === typeFilter)
        : saunas

    const saunasEl = displayedSaunas.map(sauna => {
        return (
            <NavLink to={`${sauna.id}`} state={{id: sauna.id, type: typeFilter, search: `?${searchParams.toString()}`}} key={sauna.id}>
                <div className="sauna-container">
                    <img className="sauna-img" src={sauna.imageUrl} />
                    <h2 className="sauna-name">{sauna.name}</h2>
                    <div>
                        <h4 className={`sauna-type ${sauna.type}`}>{sauna.type}</h4>
                        <h3 className="sauna-price">${sauna.price}<span>/day</span></h3>
                    </div>
                </div>
            </NavLink>
        )
    })

    const saunasElState = () => {
        if (loading) {
            return <h1>Loading...</h1>
        } else if (error) {
            return <h1>There was an error: {error.message}</h1>
        } else {
            return saunasEl
        }
    }

    return (
        <section className="saunas-page-container">
            <h1>Explore our mobile saunas</h1>
            <div className="filter-container">
                <button
                    className={`filter-option compact ${typeFilter === "compact" ? "selected" : ""}`}
                    onClick={() => setSearchParams({ type: "compact" })}>
                Compact</button>
                <button
                    className={`filter-option luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                    onClick={() => setSearchParams({ type: "luxury" })}>
                Luxury</button>
                <button
                    className={`filter-option outdoor ${typeFilter === "outdoor" ? "selected" : ""}`}
                    onClick={() => setSearchParams({ type: "outdoor" })}>
                Outdoor</button>

                {typeFilter ? (
                    <button
                        className="filter-clear"
                        onClick={() => setSearchParams({})}>
                    Clear filters</button>
                ) : null}
            </div>
            <div className="saunas-container">
                {saunasElState()}
            </div>
        </section>
    )
}

export default Saunas