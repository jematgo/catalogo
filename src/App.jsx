import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    setSelectedCategory(null);
  };

  const handleExploreClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onCategoryClick={handleCategoryClick}
        onHomeClick={handleHomeClick}
      />
      
      {currentView === 'home' ? (
        <>
          <Hero onExploreClick={handleExploreClick} />
          <div ref={categoriesRef}>
            <CategoryGrid onCategoryClick={handleCategoryClick} />
          </div>
        </>
      ) : (
        <ProductGrid 
          categoryId={selectedCategory}
          onBackClick={handleHomeClick}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;

