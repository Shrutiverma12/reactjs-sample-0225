import React from 'react';

const EditTaskModal = ({ task, onClose, onSave, onChange, onDelete }) => {
  return (
    <div className='fixed inset-0 bg-blue/30 backdrop-blur-[2px]  flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative'>
        {/* Close button */}
        <button
          className='absolute top-3 right-3 text-gray-500 hover:text-black'
          onClick={onClose}
        >
          ✕
        </button>

        {/* Task Title */}
        <div className='mb-4'>
          <label className='text-sm font-medium text-gray-600'>
            Task Title
          </label>
          <input
            className='w-full border mt-1 p-2 rounded'
            value={task.title}
            onChange={(e) => onChange({ ...task, title: e.target.value })}
          />
        </div>

        {/* Task Details */}
        <div className='mb-4'>
          <label className='text-sm font-medium text-gray-600'>Details</label>
          <textarea
            className='w-full border mt-1 p-2 rounded'
            value={task.details}
            onChange={(e) => onChange({ ...task, details: e.target.value })}
          />
        </div>

        {/* Action buttons */}
        <div className='flex justify-between gap-2'>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className='bg-blue-900 text-white px-4 py-2 rounded flex-1 hover:bg-blue-800'
            onClick={onSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
