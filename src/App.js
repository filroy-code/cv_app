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
    firstName: "Filip",
    lastName: "Andrejuk",
    phoneNumber: "(555)-555-5555",
    email: "filip_andrejuk@hotmail.com"
})

  const [formStatus, setFormStatus] = React.useState({
      firstName: "Filip",
      lastName: "Andrejuk",
      phoneNumber: "(555)-555-5555",
      email: "filip_andrejuk@hotmail.com"
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
  const [educationInfo, setEducationInfo] = React.useState([
    {
    school: "University of Toronto",
    dateStarted: "2012-09-01",
    dateFinished: "2016-04-30",
    diploma: "Bachelor of Kinesiology",
    id: nanoid()
    },
    {
      school: "York University",
      dateStarted: "2016-09-01",
      dateFinished: "2018-04-30",
      diploma: "Bachelor of Education",
      id: nanoid()
    }
  ])

  function edSubmitHandler(event) {
    event.preventDefault()
    setEducationInfo(prevEdInfo => [...prevEdInfo, edFormStatus])
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
        [name]: value,
        id: nanoid() })
  })
  }


  //experience info state and functions
  const [experienceInfo, setExperienceInfo] = React.useState([
    {
      employer: "Self-Employed",
      jobTitle: "Freelance Full-Stack Developer",
      dateStarted: "2021-12-15",
      dateFinished: "Present",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: nanoid()
    },
    {
      employer: "Toronto District School Board",
      jobTitle: "Science & Physical Education Teacher",
      dateStarted: "2018-09-01",
      dateFinished: "Present",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: nanoid()
    } 
  ])

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
        [name]: value,
        id: nanoid() })
  })
  }

    //education editing and deleting functions
  function deleteEntry(event) {
    let targetBox = event.target.parentElement.parentElement.id
    let filteredEducation = educationInfo.filter(item => item.id !== targetBox)
    setEducationInfo(filteredEducation)
    submitChanges();
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
    setEdFormStatus({...edFormStatus,
      id: nanoid()
    })
  }


  //experience editing and deleting functions
  function experienceDeleteEntry(event) {
    let targetBox = event.target.parentElement.parentElement.parentElement.id
    let filteredExperience = experienceInfo.filter(item => item.id !== targetBox)
    setExperienceInfo(filteredExperience)
    experienceSubmitChanges();
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
    ) : experienceInfo, [experienceEditing, experienceFormStatus, experienceInfo.length])

  function experienceSubmitChanges() {
    setExperienceEditing(false)
    setExperienceFormStatus({...experienceFormStatus,
      id: nanoid()
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
            submitChanges={submitChanges}
          />
          <ExperienceInfoOutput 
            experienceInfo={experienceInfo}
            deleteEntry={experienceDeleteEntry}
            editEntry={experienceEditEntry}
            editing={experienceEditing}
            submitChanges={experienceSubmitChanges} />
        </div>
    </div>
  );
}

export default App;
