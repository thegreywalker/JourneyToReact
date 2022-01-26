import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
    const titleRef = useRef("");
    const openingTextRef = useRef("");
    const releaseDateRef = useRef("");

    const [title, setTitle] = React.useState("");
    const [openingText, setOpeningText] = React.useState("");
    const [releaseDate, setReleaseDate] = React.useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const openingTextHandler = (e) => {
        setOpeningText(e.target.value);
    };

    const releaseDateHandler = (e) => {
        setReleaseDate(e.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        console.log(event.target.value);

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        };

        setTitle('');
        setOpeningText('');
        setReleaseDate('');

        props.onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    ref={titleRef}
                    value={title}
                    onChange={titleHandler}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea
                    rows="5"
                    id="opening-text"
                    ref={openingTextRef}
                    value={openingText}
                    onChange={openingTextHandler}
                ></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Release Date</label>
                <input
                    type="text"
                    id="date"
                    ref={releaseDateRef}
                    value={releaseDate}
                    onChange={releaseDateHandler}
                />
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;
