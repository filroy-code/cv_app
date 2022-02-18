import React from "react"

export default function ExperienceInfo(props) {

    return (
        <div className="inputs">
            <h3>Experience</h3>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="employer">Employer: </label>
                <input  type="text"
                        name="employer"
                        onChange={props.changeHandler}
                        placeholder="Employer"
                        value={props.experienceFormStatus.employer.value}
                />
                <br /><br />
                <label htmlFor="jobTitle">Title: </label>
                <input  type="text"
                        name="jobTitle"
                        onChange={props.changeHandler}
                        placeholder="(e.g. Regional Manager)"
                        value={props.experienceFormStatus.jobTitle.value}
                />
                <br /><br />
                <div className="dates">
                    <div>
                    <label htmlFor="workDateStarted">Date Started: </label>
                    <input  className="workDateStarted" 
                            type="date"
                            name="workDateStarted"
                            onChange={props.changeHandler}
                            placeholder="Date Started"
                            value={props.experienceFormStatus.dateStarted.value}
                    />
                    </div>
                    <div>
                    <label htmlFor="dateFinished">Date Finished: </label>
                    <input  type="date"
                        name="workDateFinished"
                        onChange={props.changeHandler}
                        placeholder="Date Finished"
                        value={props.experienceFormStatus.dateFinished.value}
                    />
                    </div>
                </div>
                <br />
                <label htmlFor="description">Description: </label>
                <textarea
                        name="description"
                        onChange={props.changeHandler}
                        placeholder="List any responsibilities, achievements, etc."
                        value={props.experienceFormStatus.description.value}
                        cols="45"
                />
                <br /><br />
                <button>{"Add Experience"}</button>
            </form>
        </div>
    )
}