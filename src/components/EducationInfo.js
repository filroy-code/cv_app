import React from "react"

export default function EducationInfo(props) {

    return (
        <div className="inputs">
            <h3>Education</h3>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="school">Institution: </label>
                <input  type="text"
                        name="school"
                        //onChange={props.changeHandler}
                        placeholder="(e.g. University of Toronto)"
                />
                <br /><br />
                <div className="dates">
                    <div>
                    <label htmlFor="dateStarted">Date Started: </label>
                    <input  className="dateStarted" 
                            type="date"
                            name="dateStarted"
                            //onChange={props.changeHandler}
                            placeholder="Date Started"
                    />
                    </div>
                    <div>
                    <label htmlFor="dateFinished">Date Finished: </label>
                    <input  type="date"
                        name="dateFinished"
                        //onChange={props.changeHandler}
                        placeholder="Date Finished"
                    />
                    </div>
                </div>
                <br />
                <label htmlFor="diploma">Diploma </label>
                <input  type="text"
                        name="diploma"
                        //onChange={props.changeHandler}
                        placeholder="(e.g. Bachelor of Science)"
                />
                <br /><br />
                <button>{"Add Education"}</button>
            </form>
        </div>
    )
}