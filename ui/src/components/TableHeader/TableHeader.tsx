import React from 'react'

const TableHeader: React.FC = () => {
    return (
        <tr className="table-row">
            <th className="table-row__cell table-row__cell--header">
                Name
            </th>
            <th colSpan={2} className="table-row__cell table-row__cell--header">
                Status
            </th>
        </tr>
    )
}

export default TableHeader