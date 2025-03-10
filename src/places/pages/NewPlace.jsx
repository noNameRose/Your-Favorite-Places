import { useCallback, useReducer } from "react";
import Input from "../../share/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator.js";
import { useForm } from "../../share/hooks/form-hook.jsx";



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: "",
            isValid: false,
        },
        description: {
            value: "",
            isValid: false,
        },
        address: {
            value: "",
            isValid: false,
        }
    }, false);

    const placeSubmitHandler = e => {
        e.preventDefault();
        // TODO
        // send information to the backend using fetch()
    }
    return (<form className="w-[90%] relative m-auto p-[1rem] max-w-[40rem] rounded-[6px] bg-[#e8e8e8]"
                    onSubmit={placeSubmitHandler}
    >
                <Input type="text" 
                        id="title"
                        element="input" 
                        label="Title" 
                        errorText="Please enter a valid title"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        />
                <Input  id="description" 
                        element="textarea" 
                        label="Description" 
                        errorText="Please enter a valid description (at least 5 characters)."
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        onInput={inputHandler}
                        />
                <Input  id="address" 
                        element="input" 
                        label="Address" 
                        errorText="Please enter a valid address."
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        />
                <button disabled={!formState.isValid} type="submit">ADD PLACE</button>
            </form>)
};


export default NewPlace;