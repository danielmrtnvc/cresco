import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Habit {
  id: number;
  name: string;
  day: number;
  streak: number;
  completedDays: string[];
  goal: string;
}

const DashboardPage = () => {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      name: 'Exercise',
      day: 1,
      streak: 0,
      completedDays: [],
      goal: '30 minutes of exercise',
    },
    {
      id: 2,
      name: 'Read',
      day: 1,
      streak: 0,
      completedDays: [],
      goal: '10 pages of a book',
    },
    {
      id: 3,
      name: 'Meditate',
      day: 1,
      streak: 0,
      completedDays: [],
      goal: '15 minutes of meditation',
    },
  ]);

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [newHabitName, setNewHabitName] = useState<string>('');
  const [newHabitGoal, setNewHabitGoal] = useState<string>('');

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  };

  // Handle marking a habit as complete
  const handleMarkComplete = (id: number) => {
    const today = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    setHabits((prev: Habit[]) =>
      prev.map((habit: Habit) =>
        habit.id === id
          ? {
              ...habit,
              day: Math.min(habit.day + 1, 90), // Ensure the day doesn't exceed 90
              streak: habit.streak + 1,
              completedDays: [...habit.completedDays, today], // Add today to completedDays
            }
          : habit
      )
    );

    // Display notification
    const completedHabit = habits.find(h => h.id === id);
    if (Notification.permission === 'granted' && completedHabit) {
      new Notification(`${completedHabit.name} - Habit Completed!`);
    }
  };

  // Request notification permission on mount
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Add new habit
  const handleAddHabit = () => {
    if (newHabitName && newHabitGoal) {
      const newHabit: Habit = {
        id: Date.now(), // Use timestamp as unique id
        name: newHabitName,
        day: 1,
        streak: 0,
        completedDays: [],
        goal: newHabitGoal,
      };
      setHabits([...habits, newHabit]);
      setNewHabitName('');
      setNewHabitGoal('');
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}>
      <div className="flex justify-between p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Habit Tracker</h1>
        <button onClick={toggleDarkMode} className="bg-gray-500 text-white p-2 rounded">
          Toggle Dark Mode
        </button>
      </div>

      <div className="p-6">
        {/* Add New Habit Form */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Habit</h2>
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="Habit Name"
            className="mt-2 p-2 w-full border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
          />
          <input
            type="text"
            value={newHabitGoal}
            onChange={(e) => setNewHabitGoal(e.target.value)}
            placeholder="Habit Goal"
            className="mt-2 p-2 w-full border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handleAddHabit}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
          >
            Add Habit
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <motion.div
              key={habit.id}
              className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl font-semibold">{habit.name}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Goal: {habit.goal}</p>

              <div className="mt-4">
                <div className="text-gray-500 dark:text-gray-400">Day: {habit.day}/90</div>
                <div className="text-gray-500 dark:text-gray-400">Streak: {habit.streak}</div>

                {/* Progress Circle */}
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm">{`${habit.streak} Day Streak`}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-sm">{`${habit.completedDays.length}/90`}</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg
                      className="w-24 h-24"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      <circle
                        className="text-gray-200 dark:text-gray-700"
                        cx="18"
                        cy="18"
                        r="15"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle
                        className="text-blue-500"
                        cx="18"
                        cy="18"
                        r="15"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={`${(habit.completedDays.length / 90) * 100}, 100`}
                        strokeDashoffset="25"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={() => handleMarkComplete(habit.id)}
                  className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Mark as Complete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
