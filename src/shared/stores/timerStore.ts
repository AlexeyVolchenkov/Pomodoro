import { create } from 'zustand'

interface TimerStore {
  totalTime: number;
  timer: number;
  isActive: boolean;

  setIsActive: (value: boolean) => void;
  formatedTime: () => string;
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  totalTime: 1500,
  timer: 1000,
  isActive: false,

  setIsActive: (value) => set({ isActive: value }),

  formatedTime: () => {
    const { timer } = get();
    return `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`
  }
}))