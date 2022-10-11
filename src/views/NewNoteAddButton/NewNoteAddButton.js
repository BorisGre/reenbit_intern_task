import React from 'react';

const NewNoteButton = ({showHideHandler}) => {
    return (
        <section className="button_container" onClick={() => showHideHandler(true)}>
            <button className="createNoteButton" type="button">Create Note</button>
        </section>
    );
}

export default NewNoteButton