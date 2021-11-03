import React, {useState, useEffect} from 'react'
import SearchInput from '../SearchInput/SearchInput'
import HeaderInterface from './Header.interface'

const Header: React.FC<HeaderInterface> = ({numberOfServers, dataToSearch}) => {
    const [valueFromInput, setValueFromInput] = useState('')
    const onSearch = (value: string) => {
        setValueFromInput(value)
    }
    useEffect(() => {
        dataToSearch(valueFromInput)
    }, [valueFromInput, dataToSearch])
    return (
        <header>
            <div className="header">
                <div className="header__col">
                    <h2 className="header__title">Servers</h2>
                    <h3 className="header__subtitle">Number of elements: {numberOfServers}</h3>
                </div>
                <div className="header__col">
                    <SearchInput onSearch={onSearch}/>
                </div>
            </div>
        </header>
    )
}

export default Header