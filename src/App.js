import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName= { 'Jane' } lastName= { 'Doe' }
        age= { 45 }
        hairColor= { 'Black' } 
      />
      <PersonCard 
        firstName= { 'John' } lastName= { 'Smith' }
        age= { 29 }
        hairColor= { 'Blonde' } 
      />
      <PersonCard 
        firstName= { 'Maria' } lastName= { 'Smith' }
        age= { 100 }
        hairColor= { 'Brunette' } 
      />
    </div>
  );
}

export default App;
