import React from 'react';
import { Star, Calendar, User } from 'lucide-react';

const FeedbackCard = ({ feedback, showActions = false, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {feedback.name || 'Anonymous'}
              </span>
            </div>
            <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
              {feedback.department}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex space-x-1">
              {renderStars(feedback.rating)}
            </div>
            <span className="text-sm text-gray-600">({feedback.rating}/5)</span>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(feedback.status)}`}>
            {feedback.status}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date(feedback.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{feedback.feedback}</p>
      </div>

      {showActions && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onStatusChange(feedback.id, 'In Progress')}
            className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200 transition-colors"
          >
            Mark In Progress
          </button>
          <button
            onClick={() => onStatusChange(feedback.id, 'Resolved')}
            className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors"
          >
            Mark Resolved
          </button>
          <button
            onClick={() => onStatusChange(feedback.id, 'Pending')}
            className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
          >
            Mark Pending
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;