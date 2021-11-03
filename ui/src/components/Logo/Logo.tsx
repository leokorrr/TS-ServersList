import React from 'react'
import LogoInterface from './Logo.interface'

const Logo: React.FC<LogoInterface> = ({title}) => {
    return (
        <div className="logo">
            <div className="logo__circle"></div>
            <div className="logo__name">{title}</div>
            <div className="logo__line"></div>
        </div>
    )
}

export default Logo