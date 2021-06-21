import React from 'react'

function Form({fname, lname, num, handleNum,handleSubmit,handlefChange, handlelChange}) {
    return (
        <div>
            <form onSubmit={handleSubmit}> 
            <label >First name:
                <input type="text" value={fname} onChange={handlefChange}/>
            </label>
            <label >Last name:
                <input type='text' value={lname} onChange={handlelChange} />
            </label>
            <label >Number: 
                <input type='number' value={num} onChange={handleNum} />
            </label>
            <button type="submit">Add</button>
        </form>
        </div>
    )
}

export default Form
