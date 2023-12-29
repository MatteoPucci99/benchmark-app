import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "./assets/epicode_logo.png";
import WelcomePage from "./components/WelcomePage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import FeedbackPage from "./components/FeedbackPage";
const App = () => {
  return (
    <BrowserRouter>
      <Container
        fluid
        id="mainContainer"
        style={{ height: "100vh", fontFamily: "Inter" }}
      >
        <img src={logo} alt="logo" width={250} id="logo" />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
