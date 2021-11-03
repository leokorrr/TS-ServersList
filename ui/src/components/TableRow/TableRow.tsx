import React from 'react'
import TableRowInterface from './TableRow.interface'
import more from '../../images/more.svg'
import serverOn from '../../images/serverOn.svg'
import serverOff from '../../images/serverOff.svg'
import useTableRow from '../../hooks/useTableRow'

const TableRow: React.FC<TableRowInterface> = ({_id, name, status}) => {
    const {
        serverStatus,
        showDropdown,
        handleTurnOff,
        handleTurnOn,
        handleChangeDropdownVisibility,
        handleReboot,
        wrapperRef
    } = useTableRow(status)
    return (
        <tr className="table-row">
            <td className="table-row__cell table-row__cell--name">{name}</td>
            <td className="table-row__cell table-row__cell--status">
                {(serverStatus === 'ONLINE') && <div className="green"><img src={serverOn} alt="on"/>{serverStatus}</div>}
                {(serverStatus === 'OFFLINE') && <div><img src={serverOff} alt="off"/>{serverStatus}</div>}
                {(serverStatus === 'REBOOTING') && <div className="grey">{serverStatus}...</div>}
            </td>
            <td className="table-row__cell">
                <div className="table-row__cell-more">
                    <div>
                        <button className="table-row__button-more" onClick={() => handleChangeDropdownVisibility(true)}><img src={more} alt="more"/></button>
                        {showDropdown && serverStatus !== 'REBOOTING' &&
                            <ul className="table-row__dropdown" ref={wrapperRef}>
                                <li>
                                    {(serverStatus === 'ONLINE') ?  
                                        <button className="table-row__dropdown-btn" onClick={() => handleTurnOff(_id)}>Turn off</button> 
                                        : 
                                        <button className="table-row__dropdown-btn"  onClick={() => handleTurnOn(_id)}>Turn on</button>}
                                </li>
                                <li>
                                    {(serverStatus === 'ONLINE') && 
                                        <button className="table-row__dropdown-btn" 
                                            onClick={() => handleReboot(_id)}>Reboot</button>}
                                </li>
                            </ul> 
                        }
                        {showDropdown && serverStatus === 'REBOOTING' && 
                            <ul className="table-row__dropdown" ref={wrapperRef}>
                                <li>
                                    <button disabled className="table-row__dropdown-btn table-row__dropdown-btn--disabled">Rebooting...</button>
                                </li>
                            </ul>}
                    </div>
                </div>
            </td>
        </tr>
    )
}
    
export default TableRow