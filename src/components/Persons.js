import React from 'react'

function Persons({filt}) {
    return (
        <div>
            <ul>
          {filt.map(person => <li key={person.number}>{person.fname} {person.lname} {person.number}</li>)}  
        </ul>
        </div>
    )
}

export default Persons
