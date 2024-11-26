import { create } from 'zustand';
import { supabase } from '@/utils/supabaseClient';
import type { HistoryType } from '@/constants/history';

interface HistoryState {
  history: HistoryType[];
  fetchHistory: () => Promise<void>;
}

export const useHistoryStore = create<HistoryState>((set) => ({
  history: [],
  fetchHistory: async () => {
    const { data } = await supabase
      .from("history")
      .select(`
        *,
        category:category(
          id,
          name,
          color
        )
      `)
      .order('createdAt', { ascending: false });
    set({ history: data || [] });
  },
}));