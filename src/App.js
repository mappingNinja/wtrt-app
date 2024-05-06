import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Questions from "./components/questions/questions";
import ViewAnswers from "./components/questions/viewAnswers";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route key="questions" exact path="/" element={<Questions />} />
          <Route
            key="viewAnswers"
            exact
            path="/viewAnswers"
            element={<ViewAnswers />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
