import { useState } from 'react';
import EditTaskModal from '../EditTaskModal';

const Dashboard = () => {
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    index: null,
    title: '',
    details: '',
  });

  const openEditModal = (index) => {
    setCurrentTask({
      index,
      title: tasks[index].title,
      details: tasks[index].details || '',
    });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[currentTask.index] = {
      ...updatedTasks[currentTask.index],
      title: currentTask.title,
      details: currentTask.details,
    };
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
      setShowInput(false);
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== currentTask.index
    );
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <div className='bg-blue-900 p-4 flex justify-between items-center text-white'>
        <h1 className='text-2xl font-bold'>TasksBoard</h1>
        <img
          src='https://i.pravatar.cc/40'
          alt='profile'
          className='rounded-full w-10 h-10'
        />
      </div>

      {/* Task Board */}
      <div className='p-6'>
        <div className='border p-4 rounded shadow max-w-sm'>
          <div className='justify-between items-center mb-2'>
            <h2 className='text-lg font-medium'>My Tasks</h2>
            <button
              onClick={() => setShowInput(!showInput)}
              className='text-blue-900 hover:scale-110'
            >
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4 mt-1 mr-1'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4v16m8-8H4'
                  />
                </svg>
                Add Task
              </div>
            </button>
          </div>

          {/* Input field for new task */}
          {showInput && (
            <div className='flex items-center gap-2 mb-2'>
              <input
                type='text'
                className='w-full px-3 py-1 border rounded'
                placeholder='Enter a task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className='bg-blue-900 text-white px-3 py-1 rounded'
                onClick={handleAddTask}
              >
                Add
              </button>
            </div>
          )}

          {/* Task list */}
          <ul className='space-y-2 mt-4'>
            {tasks.map((t, i) => (
              <li
                key={i}
                className='flex items-center justify-between  rounded px-3 py-2'
              >
                <div className='flex items-center gap-3'>
                  {/* Circle checkbox */}
                  <button onClick={() => toggleComplete(i)}>
                    {t.completed ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-green-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                    ) : (
                      <div className='w-5 h-5 border-2 border-gray-400 rounded-full'></div>
                    )}
                  </button>

                  {/* Task text */}
                  <span
                    className={t.completed ? 'line-through text-gray-400' : ''}
                  >
                    {t.text}
                  </span>
                </div>

                {/* Edit icon */}
                <button
                  onClick={() => openEditModal(i)}
                  className='text-blue-900 hover:underline text-sm'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 text-blue-800 hover:text-blue-600'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.862 3.487a2.116 2.116 0 113.09 2.894l-10.5 10.5a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897l10.5-10.5z'
                    />
                  </svg>
                </button>
                {isEditing && (
                  <EditTaskModal
                    task={currentTask}
                    onClose={() => setIsEditing(false)}
                    onSave={handleSaveEdit}
                    onChange={(updatedTask) => setCurrentTask(updatedTask)}
                    onDelete={handleDeleteTask}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Add Button (bottom-right corner) */}
      <button
        onClick={() => setShowInput(true)}
        className='fixed bottom-6 right-6 bg-blue-900 text-white text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg'
      >
        +
      </button>
    </div>
  );
};

export default Dashboard;
