import './App.css';
import ComponentA from './components/ComponentA';
import { Contact } from './models/contact.class';

function App() {

  const defaultUser = new Contact('Alejandro', 'Pascuale', 'alegpascuale@gmail.com', true);

  return (
    <div className="App">
      <ComponentA contact={ defaultUser } />
    </div>
  );
}

export default App;
