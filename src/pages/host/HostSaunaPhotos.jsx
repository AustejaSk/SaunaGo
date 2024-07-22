import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostSaunaPhotos = () => {

    const [sauna] = useOutletContext()

    return (
        <img className="host-sauna-photos" src={sauna.imageUrl} />
    )
}

export default HostSaunaPhotos