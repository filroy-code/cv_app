import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function EducationInfoOutput(props) {

    const educationList = props.educationInfo.map(function (x, num) {
        return(
            <div className={num === (props.editing - 1) ? "schoolEntry editing" : "schoolEntry"} key={x.id} id={x.id}>
                <div className="icons">
                <button onClick={props.editEntry}><EditIcon fontSize="small" className="icon" /></button>
                <button onClick={num === (props.editing - 1) ? props.submitChanges : props.deleteEntry}><DeleteIcon fontSize="small" className="icon" /></button>
                </div>
                <h3>{x.school}</h3>
                <h4>{x.diploma}</h4>
                <h5>{x.dateStarted} - {x.dateFinished}</h5>
            </div>
        )
    })

    return <div className="educationInfoOutput">
    {educationList}
    </div>
}