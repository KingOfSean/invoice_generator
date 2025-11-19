import './App.css';
import Home from './Components/Home';
import { GlobalFunctionsProvider } from './StateContext/GlobalFunctionsContext';
import { AppStateVariablesProvider } from './StateContext/AppStateVariablesContext';

function App() {
  return (
    <GlobalFunctionsProvider>
      <AppStateVariablesProvider>
        <div className="App">
          <Home />
        </div>
      </AppStateVariablesProvider>
    </GlobalFunctionsProvider>
  );
}

export default App;
