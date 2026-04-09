import { create } from 'zustand';

interface TasksStore {
  tasks: string[];

  addTask: (value: string) => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],

  addTask: (value) => set((state) => ({
    tasks: [...state.tasks, value]
  }))
}))