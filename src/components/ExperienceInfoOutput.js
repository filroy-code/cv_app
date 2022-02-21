import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ExperienceInfoOutput(props) {

    const experienceList = props.experienceInfo.map(function (x, num) {
        return(
            <div className={num === (props.editing - 1) ? "experienceEntry experienceEditing" : "experienceEntry"} key={x.id} id={x.id}>
                <div className="experienceGrouperMain">
                    <div>
                        <h3>{x.employer} - <em>{x.jobTitle}</em></h3>
                        <h4>{x.dateStarted} - {x.dateFinished}</h4>
                    </div>
                    <div className="experienceGrouperIcons">
                        <button onClick={num === (props.editing - 1) ? props.submitChanges : props.editEntry}><EditIcon fontSize="small" className="icon" /></button>
                        <button onClick={num === (props.editing - 1) ? props.submitChanges : props.deleteEntry}><DeleteIcon fontSize="small" className="icon" /></button>
                    </div>
                </div>
                <p>{x.description}</p>
            </div>
        )
    })

    return <div className="experienceInfoOutput">
    {experienceList}
    </div>
}