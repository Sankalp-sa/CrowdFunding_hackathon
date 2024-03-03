import './App.css';
import "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCampaign from './pages/CreateCampaign';
import ViewCampaign from './pages/ViewCampaign';
import MoreDetailsCampaign from './pages/MoreDetailsCampaign';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createCampaign" element={<CreateCampaign />} />
        <Route path="/viewCampaign" element={<ViewCampaign />} />
        <Route path="/moredetailscampaign/:id" element={<MoreDetailsCampaign />} />
      </Routes>
  );
}

export default App;
