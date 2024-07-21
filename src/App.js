import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CAMPSITES } from "./app/shared/CAMPSITES";
import CampsitesList from "./features/campsites/CampsitesList";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
