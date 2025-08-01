
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        {/* 
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog" element={<BlogPage />} /> 
        
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
