/* eslint-disable react-hooks/rules-of-hooks */
import '../style/note.css'
import Note from './note';
import { CreateNote, NoteType } from './noteFunc';
import { ChangeEvent, useEffect, useState } from 'react';

let currID = 0;
let loadOnce = 0;

type EditType = {
  edit?:boolean;
  id?: number;
}

const loadData = (setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>) => {
  const localData = localStorage.getItem('notes');
  // console.log('Local Data: ', localData);

  if (localData && !loadOnce) {
    const jsonData:NoteType[] = JSON.parse(localData);
    const lastItem = jsonData[jsonData.length-1];
    currID = lastItem ? lastItem.id : 0;
    // console.log("data: ", jsonData)
    setNotes(() => [...jsonData]);
    loadOnce++;
  }
}

export const NoteManager = () => {

  const [[notes, setNotes], [inputText, setNoteTextInput], [inputName, setNameInput], [editMode, setEditMode]]: 
  [[NoteType[],  React.Dispatch<React.SetStateAction<NoteType[]>>],
  [string, React.Dispatch<React.SetStateAction<string>>], 
  [string, React.Dispatch<React.SetStateAction<string>>],
  [EditType, React.Dispatch<React.SetStateAction<EditType>>]] = [useState<NoteType[]>([]), useState(''), useState(""), useState({})];


  // loads the saved data
  useEffect(() => {
    loadData(setNotes);
  }, [])

  const saveData = () => {
    // console.log('Saved Data')
    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  const saveNote = () => {
    editMode.edit = false;

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
    saveData();
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

  const editNote = (id:number) => { // yeah its a cheat way
    if (!editMode.edit) setEditMode({edit:true, id:id});
    
    const data = notes.find((note) => { return note.id === id ? note : null });
    console.log("data: ",data)
    if (data) {
      deleteNote(id);

      setNameInput(data.name);
      setNoteTextInput(data.text);
    }
  }
  
  useEffect(() => {
    saveData()
  }, [notes])

  console.log(editMode)
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
        editNote = {editNote}
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