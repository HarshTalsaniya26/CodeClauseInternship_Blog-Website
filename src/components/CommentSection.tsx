
import { useState } from 'react';
import { Comment } from '../types';

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState(comments);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) return;
    
    const comment: Comment = {
      id: `c${Date.now()}`,
      author: name,
      content: newComment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setLocalComments([...localComments, comment]);
    setNewComment('');
    setName('');
  };

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-serif font-bold mb-6">Comments ({localComments.length})</h3>
      
      {localComments.map(comment => (
        <div key={comment.id} className="border-b border-gray-200 py-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">{comment.author}</h4>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
      
      <form onSubmit={handleSubmit} className="mt-8">
        <h4 className="text-xl font-serif font-bold mb-4">Leave a Comment</h4>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
}
