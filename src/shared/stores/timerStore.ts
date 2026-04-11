import { create } from 'zustand'

type Mode = 'Фокус' | 'Перерыв'

interface TimerStore {
  totalTime: number;
  timer: number;
  isActive: boolean;
  currentMode: Mode;
  nextMode: Mode;

  setIsActive: (value: boolean) => void;
  formatedTime: () => string;
  switchMode: (current: Mode, next: Mode) => void;
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  totalTime: 1500,
  timer: 1500,
  isActive: false,
  currentMode: 'Фокус',
  nextMode: 'Перерыв',

  setIsActive: (value) => set({ isActive: value }),

  formatedTime: () => {
    const { timer } = get();
    return `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`
  },

  switchMode: (next, current) => {
    if (next === 'Перерыв') {
      set({
        totalTime: 300,
        timer: 300,
      })
    } else if (next === 'Фокус') {
      set({
        totalTime: 1500,
        timer: 1500,
      })
    }
    set({ currentMode: next, nextMode: current })
  },
}))