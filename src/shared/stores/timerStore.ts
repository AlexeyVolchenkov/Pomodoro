import { create } from 'zustand'

interface TimerStore {
  timer: number;
  isActive: boolean;

  setIsActive: (value: boolean) => void;
  formatedTime: () => string;
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  timer: 1500,
  isActive: false,

  setIsActive: (value) => set({ isActive: value }),

  formatedTime: () => {
    const { timer } = get();
    return `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`
  }
}))