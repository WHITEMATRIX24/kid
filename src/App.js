import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PersonalSignUp from './components/PersonalSignUp';
import BusinessSignUp from './components/BusinessSignUp';
import PersonalSignIn from './components/PersonalSignIn';
import BusinessSignIn from './components/BusinessSignIn';
import ScrollToTop from './components/ScrollToTOp';
import ChatbotPage from './components/ChatbotPage';
import WishlistPage from './components/WishListPage';
import Shops from "./components/Shops";
import ActivityInfo from './components/ActivityInfo';
import Activities from "./components/Activities";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/personal-signup" element={<PersonalSignUp />} />
        <Route path="/business-signup" element={<BusinessSignUp />} />
        <Route path="/personal-signin" element={<PersonalSignIn />} /> {/* Personal sign-in route */}
        <Route path="/business-signin" element={<BusinessSignIn />} />
        <Route path="/chatbotpage" element={<ChatbotPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/activity-info" element={<ActivityInfo />} />
        <Route path="/activityinfo" element={<Activities />} />

      </Routes>
    </ScrollToTop>
  );
}

export default App;