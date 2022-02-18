import React from "react"

export default function BasicInfo(props) {

    return (
        <div className="inputs">
            <h3>Basic Info</h3>
            <form onSubmit={props.submitHandler}>
                <input  type="text"
                        name="firstName"
                        disabled={props.submitted ? "disabled" : ""}
                        onChange={props.changeHandler}
                        placeholder="First Name"
                        value={props.formStatus.firstName.value}
                />
                <br />
                <input  type="text"
                        name="lastName"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Last Name"
                        value={props.formStatus.lastName.value}
                />
                <br />
                <input  type="email"
                        name="email"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Email"
                        value={props.formStatus.email.value}
                />
                <br />
                <button>{props.submitted ? "Edit" : "Confirm"}</button>
            </form>
        </div>
    )
}