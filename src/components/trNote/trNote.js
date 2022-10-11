import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faTrash, faPencilAlt, faUpload } from '@fortawesome/free-solid-svg-icons'
import { convertDate } from '../../helpers/dateHelper';
import categoryToIcon from '../../helpers/categoriesToIconsHelper';

const TrNotesTable = ({events, note, showArchiveFlag}) => {

    const {editNote, archiveActiveNoteToggle, removeNote} = events

    const createdDate = convertDate(note.dateCreated)
    const noteDates = note.dateEdited ? `${note.dateCreated}, ${note.dateEdited}`
                                      : note.dateCreated

    const tooltipArchiveToggle = showArchiveFlag ? 'Up from Archive' : 'Drop to Archive'
    return (
            <ul className="noteRow"> 
                <li name="noteIcon">
                    <FontAwesomeIcon icon={categoryToIcon(note.category)} size="2x" />
                </li>
                <li name="noteName">{note.name}</li>
                <li name="noteCreated">{createdDate}</li>
                <li name="noteCategory">{note.category}</li>
                <li name="noteContent">{note.content}</li>
                <li name="noteDates">{noteDates}</li>
                <li name="noteControls">
                <ul className="controlButtonsWrap" >
                    <li name="editNoteControl" onClick={() => editNote(note.id)}>
                        <i data-tooltip="Edit note" aria-hidden="true">
                            <FontAwesomeIcon icon={faPencilAlt} size="lg" />
                        </i>
                    </li>
                    <li name="archiveNoteControl" onClick={() => archiveActiveNoteToggle(note.id)}>
                        <i data-tooltip={tooltipArchiveToggle} aria-hidden="true">
                            <FontAwesomeIcon icon={showArchiveFlag ? faUpload : faArchive} size="lg" />
                        </i>
                    </li>
                    <li name="removeNoteControl" onClick={() => removeNote(note.id)}>
                        <i data-tooltip="Remove note" aria-hidden="true">
                            <FontAwesomeIcon icon={faTrash} size="lg" />
                        </i>
                    </li>
                </ul>
                </li>  
            </ul>)
}                        
export default TrNotesTable