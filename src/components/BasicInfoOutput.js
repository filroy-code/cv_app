import React from "react"

export default function BasicInfoOutput(props) {

    return <div className="basicInfoOutput">
        <h1>{props.personInfo.firstName} {props.personInfo.lastName}</h1>
        <h3>{props.personInfo.email}</h3>
        <h3>{props.personInfo.phoneNumber}</h3>
    </div>
}