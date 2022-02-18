import React from "react"

export default function ExperienceInfoOutput(props) {

   /* function updateList(props) {educationList = props.educationInfo.map(x => {
        return(
            <div>
                <h3>{x.school}</h3>
                <h3>{x.diploma}</h3>
                <h4>{x.dateStarted} - {x.dateFinished}</h4>
                <h3>{x.id}</h3>
            </div>
        )
    })} */
    const experienceList = props.experienceInfo.map(x => {
        return(
            <div className="experienceEntry" key={x.id}>
                <h3>{x.employer} - {x.jobTitle}</h3>
                <h5>{x.workDateStarted} - {x.workDateFinished}</h5>
                <p>{x.description}</p>
            </div>
        )
    })

    /*return <div className="educationInfoOutput">
        <h3>{props.educationInfo.school} </h3>
        <h3>{props.educationInfo.dateStarted} - {props.educationInfo.dateFinished}</h3>
        <h3>{props.educationInfo.diploma}</h3>
        <h3>{props.educationInfo.id}</h3>
    </div> */

    return <div className="experienceInfoOutput">
    {experienceList}
    </div>
}