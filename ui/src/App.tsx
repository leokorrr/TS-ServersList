import React, { useEffect, useState, useCallback } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import { getServers } from './helpers/apiActions'
import Header from './components/Header/Header'
import { Server } from './types'

const App: React.FC = () => {
    const [servers, setServers] = useState<Server[]>([])
    const [tableData, setTableData] = useState<Server[]>([])
    const [valueFromInput, setValueFromInput] = useState('')
    const dataToSearch = useCallback((value: string) => {
            setValueFromInput(value)
    }, [])
    useEffect(() => {
        getServers()
            .then(res => {
                setTableData(res.data)
                setServers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (valueFromInput === '') {
            setTableData(servers)
        } else {
            setTableData(servers.filter(server => server.name.toLowerCase().includes(valueFromInput.toLowerCase())))
        }
    }, [valueFromInput, servers])
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">
                <div>
                    <Header dataToSearch={dataToSearch} numberOfServers={tableData.length}/>
                    <Table tableRows={tableData}/>
                </div>
            </div>
        </div>
    )
}

export default App
