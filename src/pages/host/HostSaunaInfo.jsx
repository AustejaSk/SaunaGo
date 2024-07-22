import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostSaunaInfo = () => {

    const [sauna] = useOutletContext()

    return (
        <div className="sauna-info-container">
            <h4><span>Name: </span>{sauna.name}</h4>
            <h4><span>Category: </span>{sauna.type}</h4>
            <h4><span>Description: </span>{sauna.description}</h4>
            <h4><span>Visibility: </span>Public</h4>
        </div>
    )
}

export default HostSaunaInfo