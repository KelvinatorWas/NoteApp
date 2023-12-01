import './App.css'
import Header from './components/main/header';
import { NoteManager } from './components/notes/noteManager';
function App() {

  return (
   <div className='main'>
    <Header />
    <NoteManager />
   </div> 
  );
}

export default App
