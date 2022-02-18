import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function EducationInfoOutput(props) {

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
    const educationList = props.educationInfo.map(x => {
        return(
            <div className="schoolEntry" key={x.id} id={x.id}>
                <div className="icons">
                <button onClick={props.editEntry}><EditIcon fontSize="small" className="icon" /></button>
                <button onClick={props.deleteEntry}><DeleteIcon fontSize="small" className="icon"/></button>
                </div>
                <h3>{x.school}</h3>
                <h4>{x.diploma}</h4>
                <h5>{x.dateStarted} - {x.dateFinished}</h5>
            </div>
        )
    })

    /*return <div className="educationInfoOutput">
        <h3>{props.educationInfo.school} </h3>
        <h3>{props.educationInfo.dateStarted} - {props.educationInfo.dateFinished}</h3>
        <h3>{props.educationInfo.diploma}</h3>
        <h3>{props.educationInfo.id}</h3>
    </div> */

    return <div className="educationInfoOutput">
    {educationList}
    </div>
}