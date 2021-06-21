import React,{useState} from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons] =useState([
    {fname: 'Abass', lname: 'Ibrahim', number: '08101012290'},
    {fname:'zainab', lname: 'isha', number: '08101012345'},
{fname:'Abass', lname: 'isha', number: '08091012290'},
{fname:'Afeez', lname: 'isha', number: '08198762290'},
{fname:'Yisha',lname: 'isha', number: '08100987290'},
{fname:'Rasheedah',lname: 'isha', number: '08190812290'}
])
const [fname, setFname] = useState('')
const [lname, setLname] = useState('')
const [num, setNum] = useState()
const [search, setSearch] = useState('')

const handlefChange = (e)=>{
    setFname(e.target.value)
}
const handlelChange =(e)=>{
    setLname(e.target.value)
}
const handleNum =(e)=>{
    setNum(e.target.value)
}
const handleSubmit =(e)=>{
    e.preventDefault()
    const nameObj ={
        fname: fname,
        lname:lname,
        number: num
    }
    setPersons(persons.concat(nameObj))
    setFname('')
    setLname('')
    setNum('')
}
const handleSearch =(e)=>{
    setSearch(e.target.value)
}
const filt = persons.filter(fperson => {
    console.log(fperson.fname)
    return fperson.fname.toLowerCase().includes(search.toLowerCase())
})


const isEqual =(first, second) => JSON.stringify(first) ===JSON.stringify(second)
if(persons.some(e => isEqual(e, {
  fname: fname,
  lname: lname,
  number: num
}))){
  alert(`${fname} is already added to phonebook`)

}else{
return (
    <div>
        <h2>Phonebook</h2>
        <Filter search={search} func={handleSearch} />
        <Form fname={fname} handleSubmit={handleSubmit} lname={lname} num={num} handlefChange={handlefChange}handleNum={handleNum} handlelChange={handlelChange} />
        <Persons filt={filt} />
    </div>
)
}
}

export default App;
