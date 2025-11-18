import './App.css';
import Home from './Components/Home';
import { GlobalFunctionsProvider } from './StateContext/GlobalFunctionsContext';

function App() {
  return (
    <GlobalFunctionsProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalFunctionsProvider>
  );
}

export default App;
