import React from 'react'
import styles from "./Button.module.css"

const Button = (props) => {
    const buttonClick = (event) => {
        console.log(event.target.value);
    }
    return (
        <button className={styles.button} type={props.type || 'button'} onClick={buttonClick}>
            {props.children}
        </button>
    )
}

export default Button;