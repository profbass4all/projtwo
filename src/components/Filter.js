import React from 'react'

function Filter({search, func}) {
    return (
        <div>
            <input type='search' value={search} onChange={func} />
        </div>
    )
}

export default Filter
