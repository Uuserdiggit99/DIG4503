import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/nameSearch";
import ReportingArea from "./components/reportingArea";
import AgeSearch from "./components/ageSearch";
import Create from "./components/create";

function App() {
  return (
    <div className="App">
      <NameSearch/>
      <AgeSearch/>
      <Create/>
      <ReportingArea/>
    </div>
  );
}
export default App;
