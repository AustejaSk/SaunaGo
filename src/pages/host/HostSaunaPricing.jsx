import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostSaunaPricing = () => {

    const [sauna] = useOutletContext()

    return (
        <h4 className="host-sauna-pricing">${sauna.price}<span>/day</span></h4>
    )
}

export default HostSaunaPricing