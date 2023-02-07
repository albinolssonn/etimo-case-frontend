import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader";
import DetailsPage from "./components/DetailsPage";
import ListPage from "./components/ListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <PageHeader />
        <Routes>
          <Route
            path="/"
            element={<ListPage />}
          />
          <Route
            path="/pokedetails/:id"
            element={<DetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
