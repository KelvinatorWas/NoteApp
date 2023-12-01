
export const CreateNote = () => {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="9"
        rows="9"
        placeholder="Leave a note :)"
      ></textarea>
      <div className="note__footer">
        <textarea className="note__name" placeholder="Note Name...">Name</textarea>
        <button className="note__save-btn">Save</button>
      </div>
    </div>
  );
}
