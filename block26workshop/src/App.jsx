

import { useEffect, useState } from 'react'
import Allcontacts from './Allcontacts'
import Singlecontact from './Singlecontact'
import './App.css'

function App() {
  const [contactList, setContactList] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)


  useEffect(() =>{
    const fetchContacts = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const data = await response.json()
      setContactList(data)
      console.log(data)
    }
    fetchContacts()
    }, [])

    useEffect(() => {
      window.addEventListener("hashchange", () => {
        setHash(window.location.hash.slice(1)*1)
      })
    }, [])

    const list = contactList.find((list) => {
      return hash === list.id
    })


  return (
    
      <div>
        <h1>Contacts List ({contactList.length})</h1>
        <ul>
          {list ? (<Singlecontact list={list}/>) : null}
        </ul>
        <Allcontacts contactList={contactList} hash={hash}/>








      </div>
     
  
  )
}

export default App