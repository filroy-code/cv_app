import React from "react"

export default function BasicInfo() {

    const [personInfo, setPersonInfo] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const [formStatus, setFormStatus] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const [submitted, toggle] = React.useState(false)

    function submitHandler(event) {
        event.preventDefault()
        setPersonInfo(formStatus)
        console.log(personInfo)
        toggle(!submitted)
    }

    function changeHandler(event) {
        const {name, value} = event.target
        setFormStatus(prevStatus => {
            return ({...prevStatus, 
            [name]: value })
    })
    console.log(formStatus)
}

    return (
        <div className="inputs">
            <h3>Basic Info</h3>
            <form onSubmit={submitHandler}>
                <input  type="text"
                        name="firstName"
                        disabled={submitted ? "disabled" : ""}
                        onChange={changeHandler}
                        placeholder="First Name"
                />
                <input  type="text"
                        name="lastName"
                        onChange={changeHandler}
                        disabled={submitted ? "disabled" : ""}
                        placeholder="Last Name"
                />
                <input  type="email"
                        name="email"
                        onChange={changeHandler}
                        disabled={submitted ? "disabled" : ""}
                        placeholder="Email"
                />
                <button>{submitted ? "Edit" : "Confirm"}</button>
            </form>
        </div>
    )
}