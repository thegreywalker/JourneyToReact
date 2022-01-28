import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim() !== "");
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput((value) => value.trim() !== "");
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if ((emailIsValid, firstNameIsValid, lastNameIsValid)) formIsValid = true;

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) return;

        console.log(firstNameValue, lastNameValue, emailValue);

        resetEmail();
        resetFirstName();
        resetLastName();
    };

    const firstNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";

    const lastNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";
    return (
        <form onSubmit={SubmitHandler}>
            <div className={firstNameClasses}>
                <div className="form-control">
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && (
                        <p className="error-text">
                            Please Enter the First Name!
                        </p>
                    )}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && (
                        <p className="error-text">
                            Please Enter the Last Name!!
                        </p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && (
                    <p className="error-text">Please Enter an E-Mail!!</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
