import { DeleteForever } from "@mui/icons-material";

type NoteType = {
  id: number;
  text: string;
  name: string;
  deleteNote: (id: number) => void;

}

const Note = ({ id, text, name, deleteNote }: NoteType) => {
  return (
    <div className="note">
      <div className="note__header">
        <span style={{alignSelf:'flex-start'}}>{name}</span>
        <DeleteForever className="delete-note" aria-hidden='true' onClick={()=>deleteNote(id)}></DeleteForever>
      </div>
      <div className="note__body">{text}</div>
    </div>
  );
}

export default Note