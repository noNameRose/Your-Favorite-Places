import { useCallback, useReducer } from "react";
import Input from "../../share/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator.js";

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE": 
            let isFormValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId)
                    isFormValid = isFormValid && action.isValid;
                else 
                    isFormValid = isFormValid && state.inputs[inputId].isValid;
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: isFormValid
            };
        default: 
            return state;
    }
}

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: "",
                isValid: false,
            },
            description: {
                value: "",
                isValid: false,
            }
        },
        isValid: false,
    });
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: "INPUT_CHANGE", value: value, isValid: isValid, inputId: id})
    }, []);

    const placeSubmitHandler = e => {
        e.preventDefault();
        // TODO
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