import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE": 
            let isFormValid = true;
            // Check if all input field is valid
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue;
                }
                // This check is only for the action in which
                // user just changed
                if (inputId === action.inputId)
                    isFormValid = isFormValid && action.isValid;
                else // Other input
                    isFormValid = isFormValid && state.inputs[inputId].isValid;
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                                        value: action.value, 
                                        isValid: action.isValid
                                    },
                },
                isValid: isFormValid
            };
        case "SET_DATA": 
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default: 
            return state;
    }
}

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
                    type: "INPUT_CHANGE", 
                    value: value, 
                    isValid: isValid, 
                    inputId: id})
        }, []);

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: "SET_DATA",
            inputs: inputData,
            formIsValid: formValidity
        })
    }, [])
    return [formState, inputHandler, setFormData];
}