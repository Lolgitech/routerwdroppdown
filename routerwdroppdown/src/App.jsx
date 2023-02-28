import { HashRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./routes/about/AboutPage.jsx";
import ContactPage from "./routes/about/contact/ContactPage.jsx";
import LandingPage from "./routes/landingPage.jsx";

import Layout from "./routes/components/Layout/Layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
