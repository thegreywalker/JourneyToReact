import React from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = React.useState("");
    const [isTouched, setIsTouched] = React.useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    };
     
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
