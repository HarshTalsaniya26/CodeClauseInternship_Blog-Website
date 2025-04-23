
export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  comments: Comment[];
}

export interface Category {
  id: string;
  name: string;
}
