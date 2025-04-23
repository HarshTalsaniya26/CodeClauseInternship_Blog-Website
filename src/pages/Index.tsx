import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import CategoryBadge from '../components/CategoryBadge';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  // Featured article is the first article
  const featuredArticle = articles[0];
  
  // When active category changes, filter articles
  useEffect(() => {
    if (activeCategory) {
      setFilteredArticles(articles.filter(article => article.category === activeCategory));
    } else {
      setFilteredArticles(articles);
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with featured article */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-serif text-5xl font-bold mb-4">BlogHaven</h1>
              <p className="text-xl text-gray-600">Explore our collection of insightful articles on technology, travel, food, lifestyle, and health.</p>
            </div>
            
            {featuredArticle && (
              <ArticleCard 
                article={featuredArticle} 
                categories={categories} 
                featured={true} 
              />
            )}
          </div>
        </section>
        
        {/* Category filter section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === null 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full ${
                    activeCategory === category.id 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  categories={categories} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
