import FormInput from "./FormInput";
import { useState } from "react";
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import toastr from "toastr";

const REGISTER_URL = "authaccount/registration";

// import { useRef } from "react";

const Register = () => {
    const navigate = useNavigate();
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
            pattern:"/^(([^<>()[].,;:s@\"]+([^<>()[].,;:s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/",
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
        try{
            const payload = {
                name: values.username,
                email: values.email,
                password: values.password,
              };
              const result = axios.post(REGISTER_URL, JSON.stringify(payload), {
                headers: { "Content-Type": "application/json" },
                withCredentials: false,
              });  
                console.warn(result?.data.message);
                console.log(result?.data.data);
                if (result.data.code === 1) return toastr.error(result.data.message);
                 toastr.success(result.data.message);
                navigate("/login");
            } catch {
                console.log("Failed to sign in");
            }
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
                <Link to="/">
                    <div className="navigate">Return to Login</div>
                </Link>
            </form>
        </div>
    )
}
export default Register;
