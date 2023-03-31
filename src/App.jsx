import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import "./styles/components/App.sass";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContent />
    </div>
  );
}

export default App;
