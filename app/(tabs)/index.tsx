import { useState, useEffect } from 'react';
import { Platform, FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { useHistoryStore } from '@/utils/historyStore';
import HistoryCard from '@/components/HistoryCard';

const StatusBarHeight = getStatusBarHeight(true);

export default function HomeScreen() {
  const { history, fetchHistory } = useHistoryStore();

  useEffect(() => {
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
