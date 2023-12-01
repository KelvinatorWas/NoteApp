import { ChangeEvent } from "react";

export type NoteType = {
  id: number;
  text: string;
  name: string;
}

type Handler = {
  inputHandler: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  inputNameHandler: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  saveNote: () => void;
  inputText:string;
  inputName:string;
}


export const CreateNote = ({inputHandler, inputNameHandler, saveNote, inputText, inputName}: Handler) => {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="9"
        rows="9"
        placeholder="Leave a note :)"
        value={inputText}
        onChange={inputHandler}
      ></textarea>
      <div className="note__footer">
        <textarea className="note__name" placeholder="Note Name..." onChange={inputNameHandler} value={inputName}></textarea>
        <button className="note__save-btn" onClick={saveNote}>Save</button>
      </div>
    </div>
  );
}
