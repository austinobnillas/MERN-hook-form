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
                    {firstName.length < 2 && firstName.length > 0 ? (
                        <p>First Name must be at least 2 characters long</p>
                    ) : "" }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }></input>
                    {lastName.length < 2 && lastName.length > 0 ? (
                        <p>Last Name must be at least 2 characters long</p>
                    ) : "" }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
                    {email.length < 5 && email.length > 0 ? (
                        <p>Email must be at least 5 characters long</p>
                    ) : "" }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                    {password.length < 8 && password.length > 0 ? (
                        <p>Password must be at least 8 characters long</p>
                    ) : "" }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={passwordConfirm} onChange={ (e) => setPasswordConfirm(e.target.value)}></input>
                    {password !== passwordConfirm ? (
                        <p>Passwords must match</p>
                    ) : "" }
                </div>
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirmed Password: {passwordConfirm}</p>
            </div>
        </div>
    );
}

export default Form;