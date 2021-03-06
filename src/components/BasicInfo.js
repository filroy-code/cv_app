import React from "react"

export default function BasicInfo(props) {

    return (
        <div className={props.submitted ? "inputs disabled basicInfoInput" : "inputs basicInfoInput"}>
            <h3>Basic Info</h3>
            <form onSubmit={props.submitHandler}>
            <label htmlFor="firstName">First Name: </label>
                <input  type="text"
                        name="firstName"
                        disabled={props.submitted ? "disabled" : ""}
                        onChange={props.changeHandler}
                        placeholder="First Name"
                        value={props.formStatus.firstName}
                />
                <br /><br />
                <label htmlFor="lastName">Last Name: </label>
                <input  type="text"
                        name="lastName"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Last Name"
                        value={props.formStatus.lastName}
                />
                <br /><br />
                <label htmlFor="email">Email: </label>
                <input  type="email"
                        name="email"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Email"
                        value={props.formStatus.email}
                />
                <br /><br />
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input  type="tel"
                        name="phoneNumber"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="(555)-555-5555"
                        value={props.formStatus.phoneNumber}
                />
                <br /><br />
            </form>
            <div />
            <button className="submitButton" onClick={props.submitHandler}>{props.submitted ? "Edit" : "Confirm"}</button>
        </div>
    )
}