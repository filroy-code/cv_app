import './App.css';
import BasicInfo from './components/BasicInfo'
import EducationInfo from './components/EducationInfo'
import BasicInfoOutput from './components/BasicInfoOutput'
import React from 'react'

function App() {

//basic info state and functions
  const [personInfo, setPersonInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: ""
})

  const [formStatus, setFormStatus] = React.useState({
      firstName: "",
      lastName: "",
      email: ""
  })

  const [submitted, toggle] = React.useState(false)

  function submitHandler(event) {
      event.preventDefault()
      setPersonInfo(formStatus)
      console.log(personInfo)
      toggle(!submitted)
  }

  function changeHandler(event) {
      const {name, value} = event.target
      setFormStatus(prevStatus => {
          return ({...prevStatus, 
          [name]: value })
  })}

//education info state and functions
  const [educationInfo, setEducationInfo] = React.useState({
    school: "",
    dateStarted: "",
    dateFinished: "",
    diploma: "",
    id: ""
  })

  function edSubmitHandler(event) {
    event.preventDefault()
    setEducationInfo(formStatus)
    console.log(personInfo)
    toggle(!submitted)
  }

  const [edFormStatus, setEdFormStatus] = React.useState({
    school: "",
    dateStarted: "",
    dateFinished: "",
    diploma: "",
    id: ""
})

  return (
    <div className='main'>
      <div className='forms'>
        <BasicInfo 
          submitted={submitted}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
        <EducationInfo />
        </div>
        <div className='vl' />
        <div className='outputs'>
          <h1>Resume</h1>
          <div className='hl' />
          {submitted ? <BasicInfoOutput personInfo={personInfo} /> : null }
        </div>
    </div>
  );
}

export default App;
