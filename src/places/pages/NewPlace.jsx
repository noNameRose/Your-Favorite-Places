import { useCallback, useReducer } from "react";
import Input from "../../share/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator.js";
import { useForm } from "../../share/hooks/form-hook.jsx";
import { useHttpClient } from "../../share/hooks/http-hooks.jsx";



const NewPlace = () => {
    const {sendRequest, error, clearError, isLoading} = useHttpClient();
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
        sendRequest("http://localhost:3000/api/places", "POST", JSON.stringify({
            title: formState.inputs.title.value,
            description: formState.inputs.description.value,
            address: formState.inputs.address.value,
            creator: 
        }));
    }
    return (<form className="w-[90%] 
                            m-auto 
                            p-[1rem] 
                            max-w-[40rem] 
                            rounded-[6px] 
                            bg-[#e8e8e8]
                            flex
                            flex-col
                            gap-[1rem]
                            my-[8rem]
                        
                            "
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
                <button disabled={!formState.isValid} 
                        type="submit"
                        className="font-bold text-[#e8e8e8] bg-[#5588A3] py-[0.2em] rounded-[6px] w-[90%] sm:w-[95%] self-center"
                >
                    Add Place
                </button>
            </form>)
};


export default NewPlace;