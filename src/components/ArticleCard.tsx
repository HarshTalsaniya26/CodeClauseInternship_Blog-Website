
import { Link } from 'react-router-dom';
import { Article, Category } from '../types';
import CategoryBadge from './CategoryBadge';

interface ArticleCardProps {
  article: Article;
  categories: Category[];
  featured?: boolean;
}

export default function ArticleCard({ article, categories, featured = false }: ArticleCardProps) {
  const category = categories.find(c => c.id === article.category);
  
  return (
    <article className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${featured ? 'lg:flex' : ''}`}>
      <div className={`${featured ? 'lg:w-1/2' : 'w-full'}`}>
        <Link to={`/article/${article.id}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-64 object-cover"
          />
        </Link>
      </div>
      
      <div className={`p-6 ${featured ? 'lg:w-1/2' : ''}`}>
        {category && (
          <div className="mb-3">
            <CategoryBadge categoryId={category.id} categoryName={category.name} />
          </div>
        )}
        
        <Link to={`/article/${article.id}`}>
          <h2 className={`font-serif font-bold text-gray-900 hover:text-gray-700 mb-2 ${featured ? 'text-3xl' : 'text-xl'}`}>
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">
          {article.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
