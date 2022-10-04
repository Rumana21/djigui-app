import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NewsFeeds from "./pages/NewsFeed/newsFeed";
import NavBar from "./components/NavBar/navBar"
import Training from "./pages/Training/training.jsx"
import Directory from "./pages/Directory/directory.jsx"
import ForumSeassion from './pages/ForumSeassion/forumSeassion';
import Events from './pages/Events/events';
import EnrollTraining from './pages/Training/enrollTraining';
import TrainingDetails from './pages/Training/trainingDetails';
import FinancialServices from './components/Directory/financialServices';
import LegalServices from './components/Directory/legalServices';
import Job from './pages/Job/job';
import Host from './pages/Host/host';

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<NewsFeeds />} />
        <Route path="/training" element={<Training />} />
        <Route path="/resources" element={<Directory />} />
        <Route path="/forumSeassion" element={<ForumSeassion />} />
        <Route path="/events" element={<Events />} />
        <Route path="/enrollTraining/id:" element={<EnrollTraining />} />
        <Route path="/trainingDetails/id:" element={<TrainingDetails />} />
        {/* <Route path="/financialServices" element={<FinancialServices />} />
        <Route path="/legalServices" element={<LegalServices />} /> */}
        <Route path="/job" element={<Job />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </Router>

    </>

  );
}

export default App;
