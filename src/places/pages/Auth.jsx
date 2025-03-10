import { useForm } from "../../share/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator";
import Input from "../../share/components/FormElements/Input";
import { useContext, useState } from "react";
import { AuthContext } from "../../share/context/auth-context";
const Auth = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: "",
            isValid: false,
        },
        password: {
            value: "",
            isValid: false,
        }
    }, false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const authSubmitHandler = e => {
        e.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    const swithModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: "",
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }
    return (<>
                <h2>Login Required</h2>
                <hr/>
                <form onSubmit={authSubmitHandler}>
                    {!isLoginMode && 
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        lable="Your name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name"
                        onInput={inputHandler}
                    />}
                    <Input 
                            element="input"
                            id="email"
                            lable="E-Mail"
                            validators={[VALIDATOR_EMAIL()]}
                            errorText="Please enter a valid email address."
                            onInput={inputHandler}   
                    />
                     <Input 
                            element="input"
                            id="password"
                            lable="Password"
                            validators={[VALIDATOR_MINLENGTH(10)]}
                            errorText="PleasE enter a valid password, at least 10 characters."
                            onInput={inputHandler}   
                    />
                    <button type="submit" disabled={!formState.isValid}>
                        {isLoginMode ? "LOGIN" : "SIGNUP"}
                    </button>
                    <button onClick={swithModeHandler}>Switch to {isLoginMode ? "signup": "login"}</button>
                </form>
            </>);
}


export default Auth