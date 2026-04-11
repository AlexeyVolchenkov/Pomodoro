import { create } from 'zustand';

interface Tasks {
  title: string;
  isFinished: boolean;
}

interface TasksStore {
  tasks: Tasks[];

  addTask: (title: string) => void;
  toggleTask: (title: string) => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],

  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, {title, isFinished: false}]
  })),
  toggleTask: (title) => set((state) => ({
    tasks: state.tasks.map((task) => task.title !== title ? task : {...task, isFinished: !task.isFinished})
  }))
}))