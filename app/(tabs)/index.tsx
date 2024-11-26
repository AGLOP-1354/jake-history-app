import { useState, useEffect } from 'react';
import { Platform, ScrollView, FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { supabase } from '@/utils/supabaseClient';
import type { HistoryType } from '@/constants/history';
import HistoryCard from '@/components/HistoryCard';

const StatusBarHeight = getStatusBarHeight(true);

export default function HomeScreen() {
  const [history, setHistory] = useState<HistoryType[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await supabase
          .from("history")
          .select(
            `
            *,
            category:category(
              id,
              name,
              color
            )
          `
          )
      setHistory(data || []);
    };
    
    fetchHistory();
  }, []);

  return (
    <FlatList
      data={history}
      renderItem={({ item }) => <HistoryCard {...item} />}
      keyExtractor={(item, idx) => `${item.id}-${idx}`}
      contentContainerStyle={{
        paddingTop: Platform.OS === 'ios' ? StatusBarHeight + 30 : 10,
        paddingBottom: Platform.OS === 'ios' ? 85 : 65,
        paddingHorizontal: 25,
      }}
    />
  );
}
