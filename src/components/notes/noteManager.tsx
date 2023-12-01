import '../style/note.css'
import Note from './note';
import { CreateNote } from './noteFunc';

export const NoteManager = () => {
  return (
  <div className='notes'>
    <Note />
    <Note />
    <CreateNote />
  </div>
  );
}