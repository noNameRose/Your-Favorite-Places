import { useState, useReducer, useEffect } from "react";
import { validate } from "../../util/validator.js";
const inputReducer = (state, action) => {
    const type = action.type;
    switch(type) {
      case "CHANGE": 
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators),
        };
      case "TOUCH": 
        return {
          ...state,
          isTouch: true,
        }
      default: 
        return state;
    }
}


const Input = ({label, id, element, type, placeholder, rows, errorText, validators, onInput, content, valid}) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
      value: content || "", 
      isValid: valid, 
      isTouch: false});

    const changeHandler = e => {
      dispatch({
        type: "CHANGE",
        val: e.target.value,
        validators: validators
      })
    };

    const touchHandler = () => {
      dispatch({
        type: "TOUCH"
      })
    };
    const fieldName = label;
    const {value, isValid} = inputState;

    useEffect(() => {
      onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const inputArea = element === "input" ? 
                    (<input id={id} 
                            type={type} 
                            placeholder={placeholder} 
                            className="w-full 
                                      font-['inherit'] 
                                      border-[1px] 
                                      px-[0.15rem] 
                                      py-[0.25rem] 
                                      focus:outline-0 
                                      rounded-[0.2rem]
                                      "
                            style={{
                              borderColor: `${(!inputState.isValid && inputState.isTouch) ? "red" : "#00334E"}`
                            }}
                            value={inputState.value}
                            onBlur={touchHandler}
                            onChange={changeHandler}
                            />) 
                  : (<textarea id={id} 
                               rows={rows || 3} 
                               className="w-full border-[1px]  px-[0.15rem] py-[0.25rem] focus:outline-0 rounded-[0.2rem]"
                               style={{
                                borderColor: `${(!inputState.isValid && inputState.isTouch) ? "red" : "#00334E"}`
                                }}
                               value={inputState.value}
                               onChange={changeHandler}
                               onBlur={touchHandler}
                               />);
    return (<div className="mx-[1rem]">
                <label htmlFor={id} className="font-bold"
                        style={{
                            color: `${(!inputState.isValid && inputState.isTouch) ? "red" : "#00334E"}`
                        }}
                >{fieldName}</label>
                {inputArea}
                {!inputState.isValid && inputState.isTouch && <p className="text-red-400">{errorText}</p>}
            </div>);
};

export default Input;