import './App.css';
import BasicInfo from './components/BasicInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import BasicInfoOutput from './components/BasicInfoOutput'
import EducationInfoOutput from './components/EducationInfoOutput'
import ExperienceInfoOutput from './components/ExperienceInfoOutput'
import React from 'react'
import { nanoid } from 'nanoid'

function App() {

//basic info state and functions
  const [personInfo, setPersonInfo] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
})

  const [formStatus, setFormStatus] = React.useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: ""
  })

  const [submitted, toggle] = React.useState(false)

  function submitHandler(event) {
      event.preventDefault()
      setPersonInfo(formStatus)
      toggle(!submitted)
  }

  function changeHandler(event) {
      const {name, value} = event.target
      setFormStatus(prevStatus => {
          return ({...prevStatus, 
          [name]: value })
  })}

//education info state and functions
  const [educationInfo, setEducationInfo] = React.useState([])

  function edSubmitHandler(event) {
    event.preventDefault()
    setEducationInfo(prevEdInfo => [...prevEdInfo, edFormStatus])
    console.log(educationInfo)
    setEdFormStatus({
      school: "",
      dateStarted: "",
      dateFinished: "",
      diploma: "",
      id: nanoid()
  })
  }

  const [edFormStatus, setEdFormStatus] = React.useState({
    school: "",
    dateStarted: "",
    dateFinished: "",
    diploma: "",
    id: nanoid()
  })

  function edChangeHandler(event) {
    const {name, value} = event.target
    setEdFormStatus(prevStatus => {
        return ({...prevStatus, 
        [name]: value })
  })
  }

  //experience info state and functions
  const [experienceInfo, setExperienceInfo] = React.useState([])

  function experienceSubmitHandler(event) {
    event.preventDefault()
    setExperienceInfo(prevExperienceInfo => [...prevExperienceInfo, experienceFormStatus])
    setExperienceFormStatus({
      employer: "",
      jobTitle: "",
      dateStarted: "",
      dateFinished: "",
      description: "",
      id: nanoid()
  })
  }

  const [experienceFormStatus, setExperienceFormStatus] = React.useState({
    employer: "",
    jobTitle: "",
    dateStarted: "",
    dateFinished: "",
    description: "",
    id: nanoid()
  })

  function experienceChangeHandler(event) {
    const {name, value} = event.target
    setExperienceFormStatus(prevStatus => {
        return ({...prevStatus, 
        [name]: value })
  })
  }

  return (
    <div className='main'>
      <div className='forms'>
        <BasicInfo 
          submitted={submitted}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          formStatus={formStatus}
        />
        <EducationInfo
          changeHandler={edChangeHandler}
          submitHandler={edSubmitHandler}
          edFormStatus={edFormStatus} 
        />
        <ExperienceInfo
          changeHandler={experienceChangeHandler}
          submitHandler={experienceSubmitHandler}
          experienceFormStatus={experienceFormStatus} 
        />
        </div>
        <div className='vl' />
        <div className='outputs'>
          <h1>Resume</h1>
          <div className='hl' />
          {submitted ? <BasicInfoOutput personInfo={personInfo} /> : null }
          <EducationInfoOutput educationInfo={educationInfo} />
          <ExperienceInfoOutput experienceInfo={experienceInfo} />
        </div>
    </div>
  );
}

export default App;
