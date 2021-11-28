import Navbar from "./components/Navbar";
import AppProviders from './AppProviders';
import './bootstrap';

function App() {
  return (
    <AppProviders>
      <Navbar />
    </AppProviders>
  )
}

export default App;
