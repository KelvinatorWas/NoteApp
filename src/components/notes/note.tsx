import { DeleteForever } from "@mui/icons-material";
const Note = () => {
  return (
    <div className="note">
      <div className="note__header">
        <span style={{alignSelf:'flex-start'}}>Name</span>
        <DeleteForever className="delete-note" aria-hidden='true'></DeleteForever>
      </div>
      <div className="note__body"></div>
    </div>
  );
}

export default Note