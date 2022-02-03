import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Campaign from './components/Campaign';
import SingleCampaign from './components/SingleCampaign';
function App() {
  const campaigns = [
    {
      id: 1,
      name: 'Campaign 1',
    },
    {
      id: 2,
      name: 'Campaign 2',
    },
    {
      id: 3,
      name: 'Campaign 3',
    },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            path="/campaigns"
            element={<Campaign campaigns={campaigns} />}
          />
          <Route
            path="/campaigns/:id"
            element={<SingleCampaign campaigns={campaigns} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
