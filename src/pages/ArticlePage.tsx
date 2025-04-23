
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBadge from '../components/CategoryBadge';
import CommentSection from '../components/CommentSection';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  const category = article ? categories.find(c => c.id === article.category) : null;
  
  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link to="/" className="text-blue-600 hover:underline">Return to Homepage</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Article header */}
          <header className="mb-10">
            <div className="mb-4">
              {category && (
                <CategoryBadge categoryId={category.id} categoryName={category.name} />
              )}
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
            
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </header>
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Comments */}
          <CommentSection comments={article.comments} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
