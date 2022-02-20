import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
            <div className="experienceEntry" key={x.id} id={x.id}>
                <div className="experienceGrouperMain">
                    <div>
                        <h3>{x.employer} - <em>{x.jobTitle}</em></h3>
                        <h4>{x.workDateStarted} - {x.workDateFinished}</h4>
                    </div>
                    <div className="experienceGrouperIcons">
                        <button onClick={props.editEntry}><EditIcon fontSize="small" className="icon" /></button>
                        <button onClick={props.deleteEntry}><DeleteIcon fontSize="small" className="icon" /></button>
                    </div>
                </div>
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