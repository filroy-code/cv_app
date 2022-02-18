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
                />
                <br />
                <input  type="text"
                        name="lastName"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Last Name"
                />
                <br />
                <input  type="email"
                        name="email"
                        onChange={props.changeHandler}
                        disabled={props.submitted ? "disabled" : ""}
                        placeholder="Email"
                />
                <br />
                <button>{props.submitted ? "Edit" : "Confirm"}</button>
            </form>
        </div>
    )
}