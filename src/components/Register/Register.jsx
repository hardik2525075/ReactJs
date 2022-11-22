import FormInput from "./FormInput";
import { useState } from "react";
import './Register.css'
// import { useRef } from "react";

const Register = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    // const usernameRef= useRef("");

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-12 characters",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,12}$",
            required: true,
        },

        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Email",
            errorMessage: "It should be a valid email address ",
            label: "Email",
            required: true,
        },

        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 character adn include atleast 1 character and 1 number and 1 special character",
            label: "Password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },

        {
            id: 4,
            name: "confirmPb assword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password dosen't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values)
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Register;
