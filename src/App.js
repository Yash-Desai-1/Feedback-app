import './App.css';

import FeedbackStats from './components/FeedbackStats';
import Headers from './components/Headers';
import FeedbackList from './components/FeedbackList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/About';
import AboutIconLink from './components/AboutIconLink';
//context
import { FeedbackProvider } from './context/FeedbackContext';
function App() {

  return (
    <FeedbackProvider>
      <Router>
        <div className="container">

          <Headers />
          <Routes>
            <Route exact path='/' element={<>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIconLink />

            </>

            }>

            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
