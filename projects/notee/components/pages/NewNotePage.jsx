import React from 'react'
import NewNoteForm from '../NewNoteForm/NewNoteForm'



const NewNote = props => {
    
    return (
        <NewNoteForm
            folder={props.folder}
        />
    )
}


export default NewNote;