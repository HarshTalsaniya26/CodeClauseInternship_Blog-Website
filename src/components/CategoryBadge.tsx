
import { Link } from 'react-router-dom';

interface CategoryBadgeProps {
  categoryId: string;
  categoryName: string;
}

export default function CategoryBadge({ categoryId, categoryName }: CategoryBadgeProps) {
  return (
    <Link 
      to={`/category/${categoryId}`}
      className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition"
    >
      {categoryName}
    </Link>
  );
}
