import './App.css';
import "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCampaign from './pages/CreateCampaign';
import ViewCampaign from './pages/ViewCampaign';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createCampaign" element={<CreateCampaign />} />
        <Route path="/viewCampaign" element={<ViewCampaign />} />
      </Routes>
  );
}

export default App;
