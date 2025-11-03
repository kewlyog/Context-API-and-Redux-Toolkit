import './App.css';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Context API Counter</h1>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}

export default App;