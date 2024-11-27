import { useState, useEffect } from 'react';
import { Platform, FlatList, View, useWindowDimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { useHistoryStore } from '@/utils/historyStore';
import HistoryCard from '@/components/HistoryCard';

const StatusBarHeight = getStatusBarHeight(true);

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const { history, fetchHistory } = useHistoryStore();
  
  const isTablet = width >= 768;
  const columns = isTablet ? 2 : 1;

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <FlatList
      data={history}
      renderItem={({ item }) => (
        <View style={{ 
          width: `${100 / columns}%`,
          padding: 8 
        }}>
          <HistoryCard {...item} />
        </View>
      )}
      numColumns={columns}
      key={columns}
      keyExtractor={(item, idx) => `${item.id}-${idx}`}
      contentContainerStyle={{
        paddingTop: Platform.OS === 'ios' ? StatusBarHeight + 30 : 10,
        paddingBottom: Platform.OS === 'ios' ? 85 : 65,
        paddingHorizontal: 25,
      }}
    />
  );
}
