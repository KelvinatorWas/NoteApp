import { DeleteForever, ModeEdit } from "@mui/icons-material";

type NoteType = {
  id: number;
  text: string;
  name: string;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
}

const Note = ({ id, text, name, deleteNote, editNote }: NoteType) => {
  return (
    <div className="note">
      <div className="note__header">
        <span style={{alignSelf:'flex-start'}}>{name}</span>
        <div className="note__ud">
          <ModeEdit className="edit-note" aria-hidden='true' onClick={()=>editNote(id)}></ModeEdit>
          <DeleteForever className="delete-note" aria-hidden='true' onClick={()=>deleteNote(id)}></DeleteForever>
        </div>
      </div>
      <div className="note__body">{text}</div>
    </div>
  );
}

export default Note