import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={passwordConfirm} onChange={ (e) => setPasswordConfirm(e.target.value)}></input>
                </div>
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{passwordConfirm}</p>
            </div>
        </div>
    );
}

export default Form;