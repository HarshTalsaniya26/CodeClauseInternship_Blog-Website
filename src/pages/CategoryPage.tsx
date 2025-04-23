
import { useParams } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const filteredArticles = articles.filter(article => article.category === id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">
            {category ? category.name : 'Category Not Found'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {category ? 
              `Explore our collection of articles about ${category.name.toLowerCase()}.` : 
              'The category you are looking for does not exist.'}
          </p>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                categories={categories} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
