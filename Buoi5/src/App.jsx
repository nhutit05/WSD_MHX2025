import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from '/src/components/Input/Input.jsx'
import Button from '/src/components/Button/Button.jsx'
import Author from '/src/components/Author/Author.jsx'

function App() {
  return (
    <>
    <div className="header">
      <h1>Contact Book</h1>
      <p>Keep track of where your friends live</p>
    </div>
    <div className="addCont">
      <Input pld= 'Name: ' />
      <Input pld = 'City: ' />
      <Button text = 'Add contact' />
    </div>
    <div className="contact">
      <Author name = 'Alice Johnson' city = 'New York'/>
      <Author name = 'Bob Smith' city = 'Los Angeles'/>
      <Author name = 'Charlie Brown' city = 'Chicago'/>
      <Author name = 'David Williams' city = 'Houston'/>
       <Author name = 'Emma Davis' city = 'Phoenix'/>
    </div>
    </>
    
  )
}

export default App