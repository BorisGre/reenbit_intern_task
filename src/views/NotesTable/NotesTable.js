import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import { Context } from '../../components/context';
import NoRecords from '../../components/noRecords/noRecords';
import ThNotesTable from '../../components/thNote/thNote';
import TrEditNotesTable from '../../components/trEditNote/trEditNote';
import TrNotesTable from '../../components/trNote/trNote';
import { getCurrentDate } from '../../helpers/dateHelper';

//Main Table component
const NotesTable = () => {
    //use for actions dispatching
     const boundedActions = useContext(Context);

    //Get notesList from notesReducer
    const showArchiveFlag = useSelector(state => state.notes.showArchivedNotes)//bool
    const editedNoteDefaultId = 'none'

    const editNoteId = useSelector(state => state.notes.editNoteId)//
    const notesAll = useSelector(state => state.notes.notes)
    
    const notesForShowing = notesAll.filter(note => note.archived === showArchiveFlag)

    //show archived or active notes
    const notesArchiveActiveToggle = () => boundedActions.archiveActiveToggle()

    //Remove all visible notes from state
    const removeAllShowingNotes = () => boundedActions.removeAllVisible()

    //sending note to or from archive by id
    const archiveActiveNoteToggle = (noteId) => boundedActions.toFromArchive(noteId)
    
    //remove note from state by id
    const removeNote = (noteId) => boundedActions.removeNote(noteId)

    //Edit selected note by id
    const editNote = (noteId) => boundedActions.edit(noteId)
      
    //cancel editing of note and rollback to pre-edited state
    const cancelEdit = () => boundedActions.cancelEdit(editedNoteDefaultId)

    //save edited note to state
    const saveEdited = ({id, name, category, content}) => {
        const dateEdited = getCurrentDate()
        const middleObj = {name, category, content, dateEdited}
        boundedActions.saveEdited(id, middleObj, editedNoteDefaultId)
    }
    
    const thEvents = {notesArchiveActiveToggle, removeAllShowingNotes}
    const noteEvents = {editNote, archiveActiveNoteToggle, removeNote}
    const noteEditEvents = {cancelEdit, saveEdited}

    return (

        <section className="notesTable">
            <ThNotesTable events={thEvents} showArchiveFlag={showArchiveFlag}/>
                <div className="tableBody">
                 {notesForShowing.length > 0 ? notesForShowing.map(note => {
                     return (note.id !== editNoteId ? <TrNotesTable key={note.name+note.id} note={note} events={noteEvents} showArchiveFlag={showArchiveFlag}/>
                                                    : <TrEditNotesTable key={note.name+note.id} note={note} events={noteEditEvents}/>)
                    })
                                            : <NoRecords/>
                 }
                </div>
        </section>   
    );
}

export default NotesTable;