import FormInput from "./FormInput";
import { useState } from "react";
import "./Login.css";

// import { useRef } from "react";

const Login =()=>{

     const [values,setValues]=useState({
        email:"",
        password:""
     });
   // const usernameRef= useRef("");

    const inputs = [
        {
            id:1,
            name:"email",
            type:"text",
            placeholder:"Email",
            errorMessage:"It should be a valid email address ",
            label:"Email", 
            required:true,
        },

        {
            id:2,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 character adn include atleast 1 character and 1 number and 1 special character",
            label:"Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required:true,
        }
    ]
    

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value });
    };

    console.log(values)
    return(
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {inputs.map((input)=>(
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;
