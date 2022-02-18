import React from "react"

export default function EducationInfo(props) {

    return (
        <div className="inputs">
            <h3>Education</h3>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="school">Institution: </label>
                <input  type="text"
                        name="school"
                        onChange={props.changeHandler}
                        placeholder="(e.g. University of Toronto)"
                        value={props.edFormStatus.school.value}
                />
                <br /><br />
                <div className="dates">
                    <div>
                    <label htmlFor="dateStarted">Date Started: </label>
                    <input  className="dateStarted" 
                            type="date"
                            name="dateStarted"
                            onChange={props.changeHandler}
                            placeholder="Date Started"
                            value={props.edFormStatus.dateStarted.value}
                    />
                    </div>
                    <div>
                    <label htmlFor="dateFinished">Date Finished: </label>
                    <input  type="date"
                        name="dateFinished"
                        onChange={props.changeHandler}
                        placeholder="Date Finished"
                        value={props.edFormStatus.dateFinished.value}
                    />
                    </div>
                </div>
                <br />
                <label htmlFor="diploma">Diploma: </label>
                <input  type="text"
                        name="diploma"
                        onChange={props.changeHandler}
                        placeholder="(e.g. Bachelor of Science)"
                        value={props.edFormStatus.diploma.value}
                />
                <br /><br />
                <button>{"Add Education"}</button>
            </form>
        </div>
    )
}