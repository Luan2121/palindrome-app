import AppProviders from './AppProviders';

// components
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import './bootstrap';

function App() {
  return (
    <AppProviders>
      <Navbar />
      <Results />
    </AppProviders>
  )
}

export default App;
