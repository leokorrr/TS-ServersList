import React from 'react'
import TableRow from '../TableRow/TableRow'
import TableInterface from './Table.interface'
import TableHeader from '../TableHeader/TableHeader'

const Table: React.FC<TableInterface> = ({tableRows}) => {
    return (
        <table className="table">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {tableRows.length === 0 && 
                    <tr className="table-row"><td className="table-row__cell">Loading...</td></tr>}
                {tableRows.map(tableRow => 
                    <TableRow key={tableRow.id} 
                        _id={tableRow.id} 
                        name={tableRow.name} 
                        status={tableRow.status}/>)}
            </tbody>
        </table>
    )
}

export default Table