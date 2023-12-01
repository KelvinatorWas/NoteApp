/* eslint-disable react-hooks/rules-of-hooks */
import '../style/note.css'
import Note from './note';
import { CreateNote, NoteType } from './noteFunc';
import { ChangeEvent, useState } from 'react';


let currID = 0;

export const NoteManager = () => {

  const [[notes, setNotes], [inputText, setNoteTextInput], [inputName, setNameInput]]: 
  [[NoteType[],  React.Dispatch<React.SetStateAction<NoteType[]>>],
  [string, React.Dispatch<React.SetStateAction<string>>], 
  [string, React.Dispatch<React.SetStateAction<string>>]] = [useState<NoteType[]>([]), useState(''), useState("")];

  const saveNote = () => {
    console.log("Hey the note is saved!")
    setNotes((prevState) => [
      ...prevState,
      {
        id: currID,
        text: inputText,
        name: inputName
      },
    ]);
    currID += 1;
    
    setNameInput('');
    setNoteTextInput('');
    console.log(inputName)
  }

  const inputHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setNoteTextInput(e.target.value)
  }

  const inputNameHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setNameInput(e.target.value)
  }

  const deleteNote = (id:number) => {
    setNotes(notes.filter((note) => note.id != id));
  }
  
  return (
  // info
  // https://react.dev/learn/passing-props-to-a-component doc / info
  <div className='notes'>
    {notes.map((note) => (
      <Note
        key = {note.id}
        id = {note.id}
        text = {note.text}
        name = {note.name}
        deleteNote = {deleteNote}
      />
      ))}
    <CreateNote
      inputHandler = {inputHandler}
      inputNameHandler = {inputNameHandler}
      saveNote = {saveNote}
      inputText = {inputText}
      inputName = {inputName}/>
  </div>
  );
}