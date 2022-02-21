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

  React.useEffect( () => {setPersonInfo(formStatus)}, [formStatus])


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

    //education editing and deleting functions
  function deleteEntry(event) {
    let targetBox = event.target.parentElement.parentElement.id
    let filteredEducation = educationInfo.filter(item => item.id !== targetBox)
    setEducationInfo(filteredEducation)
  }

  const [editing, setEditing] = React.useState(false)

  React.useEffect(
    () =>  editing ? setEducationInfo(educationInfo.map((item, num) => {
      if (num === editing - 1) return {...edFormStatus}; else return {...item}
    })
    ) : educationInfo, [editing, edFormStatus])
    
  function editEntry(event) {
    let targetBox = event.target.parentElement.parentElement.id
    let chosenEducation = educationInfo.filter(item => item.id === targetBox)
    for (let i = 0; i < educationInfo.length; i++) {
      if (targetBox === educationInfo[i].id) {setEditing(i + 1)}
    }
    setEdFormStatus({...chosenEducation[0]})
  }

  function submitChanges() {
    setEditing(false)
  }


  //experience editing and deleting functions
  function experienceDeleteEntry(event) {
    let targetBox = event.target.parentElement.parentElement.parentElement.id
    let filteredExperience = experienceInfo.filter(item => item.id !== targetBox)
    setExperienceInfo(filteredExperience)
  }

  function experienceEditEntry(event) {
    let targetBox = event.target.parentElement.parentElement.parentElement.id
    let chosenExperience = experienceInfo.filter(item => item.id === targetBox)
    for (let i = 0; i < experienceInfo.length; i++) {
      if (targetBox === experienceInfo[i].id) {setExperienceEditing(i + 1)}
    }
    setExperienceFormStatus({...chosenExperience[0]})
  }

  const [experienceEditing, setExperienceEditing] = React.useState(false)

  React.useEffect(
    () =>  experienceEditing ? setExperienceInfo(experienceInfo.map((item, num) => {
      if (num === experienceEditing - 1) return {...experienceFormStatus}; else return {...item}
    })
    ) : experienceInfo, [experienceEditing, experienceFormStatus])

  function experienceSubmitChanges() {
    setExperienceEditing(false)
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
          editing={editing}
          submitChanges={submitChanges}
        />
        <ExperienceInfo
          changeHandler={experienceChangeHandler}
          submitHandler={experienceSubmitHandler}
          experienceFormStatus={experienceFormStatus}
          editing={experienceEditing}
          submitChanges={experienceSubmitChanges}
        />
        </div>
        <div className='outputs'>
          <BasicInfoOutput 
          personInfo={personInfo}
          submitted={submitted} 
          />
          <EducationInfoOutput 
            educationInfo={educationInfo}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
            editing={editing}
          />
          <ExperienceInfoOutput 
            experienceInfo={experienceInfo}
            deleteEntry={experienceDeleteEntry}
            editEntry={experienceEditEntry}
            editing={experienceEditing} />
        </div>
    </div>
  );
}

export default App;
