import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import ViewPet from './views/ViewPet';

function App() {
  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <NewPet path="/pets/new"/>
          <ViewPet path="/pets/:id"/>
          <EditPet path="/pets/:id/edit"/>
        </Router>
    </div>
  );
}

export default App;
