import FormInput from "./FormInput";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useToastr } from "../toastr";

const LOGIN_URL = "authaccount/login";

// import { useRef } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const usernameRef= useRef("");

  const toastr = useToastr();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address ",
      label: "Email",
      pattern:
        '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 character adn include atleast 1 character and 1 number and 1 special character",
      label: "Password",
      pattern: "^[0-9]{6,12}$",
      required: true,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      const result = await axios.post(LOGIN_URL, JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
      toastr.success(result.data.message);
      navigate("/home");
    } catch (err) {
      console.log("Failed to sign in");
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

//   console.log(values);
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <Link to="/register">
          <div className="navigate">Return to Register</div>
        </Link>
      </form>
    </div>
  );
};
export default Login;
