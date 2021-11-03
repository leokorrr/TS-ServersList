import { useState, useCallback, useEffect, useRef } from 'react'
import { turnOnServer, turnOffServer, rebootServer, getServer } from '../helpers/apiActions'

const useTableRow = (status: 'ONLINE' | 'OFFLINE' | 'REBOOTING') => {
    const [serverStatus, setServerStatus] = useState(status)
    const [showDropdown, setShowDropdown] = useState(false) 
    const handleTurnOff = (id: number) => {
        turnOffServer(id)
            .then(() => setServerStatus('OFFLINE'))
            .catch(err => console.log(err))
    }
    const handleTurnOn = (id: number) => {
        turnOnServer(id)
            .then(() => setServerStatus('ONLINE'))
            .catch(err => console.log(err))
    }
    const handleReboot = (id: number) => {
        let rebooting = true
        setServerStatus('REBOOTING')
        rebootServer(id)
            .then(() => {
                const serverPingInterval = setInterval(() => {
                    !rebooting ? 
                        clearInterval(serverPingInterval) :
                        getServer(id)
                            .then (res => {
                                if (res.data.status !== 'REBOOTING') {
                                    rebooting = false
                                    setServerStatus('ONLINE')
                                }
                            })
                            .catch(err => console.log(err))
                }, 1000)
            })
            .catch(err => console.log(err))
    }
    const handleChangeDropdownVisibility = useCallback((isVisible: boolean) => {
        setShowDropdown(isVisible)
    }, [])
    const wrapperRef = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const handleClickOutside = (e: any) => (wrapperRef.current && !wrapperRef.current.contains(e.target)) && handleChangeDropdownVisibility(false)
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [wrapperRef, handleChangeDropdownVisibility]) 
    return {
        serverStatus,
        showDropdown,
        handleTurnOff,
        handleTurnOn,
        handleReboot,
        handleChangeDropdownVisibility,
        wrapperRef
    }
}

export default useTableRow