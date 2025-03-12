import { useForm } from "../../share/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator";
import Input from "../../share/components/FormElements/Input.jsx";
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
    
    const authSubmitHandler = async e => {
        e.preventDefault();

        if (isLoginMode) {

        } else {
            try {
                const response = await fetch("http://localhost:3000/api/users/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                });
                const data = await response.json();
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        // console.log(formState.inputs);
        // auth.login();
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
    return (<div className="max-w-[20rem] 
                            m-auto 
                            my-[5em] 
                            bg-[#e8e8e8] 
                            p-[1em] 
                            rounded-[6px]
                            flex
                            flex-col
                            gap-[1em]
                            items-center
                            
                            ">
                <h2 className="font-bold text-[#00334E]">Login</h2>
                <hr className="self-stretch text-[#00334E]"/>
                <form onSubmit={authSubmitHandler} className="self-stretch flex flex-col gap-[1rem]">
                    {!isLoginMode && 
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Your name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name"
                        onInput={inputHandler}
                    />}
                    <Input 
                            element="input"
                            id="email"
                            label="Email address"
                            validators={[VALIDATOR_EMAIL()]}
                            errorText="Please enter a valid email address."
                            onInput={inputHandler}   
                    />
                     <Input 
                            element="input"
                            id="password"
                            label="Password"
                            validators={[VALIDATOR_MINLENGTH(10)]}
                            errorText="Please enter a valid password"
                            onInput={inputHandler}   
                    />
                    <div className="self-center w-[90%] relative">
                        <button type="submit" 
                                disabled={!formState.isValid}
                                className="font-bold bg-[#5588A3] rounded-[6px] py-[0.3em] text-[#e8e8e8] w-full z-10 relative"
                                style={{
                                    transform:  `${formState.isValid ? "translateY(0)" : "translateY(0.3rem)"}`,
                                    transition: "transform 0.2s"
                                }}
                                >
                            {isLoginMode ? "Login" : "Signup"}
                        </button>
                        <div className="absolute w-full h-full top-0 left-0 bg-[#00334E] transform translate-y-[0.3rem] rounded-[6px]"></div>
                    </div>
                    <button onClick={swithModeHandler} className="text-[#00334E]">New User? <span className="">Create an account</span></button>
                </form>
            </div>);
}


export default Auth