import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';

import { useHistoryStore } from '@/utils/historyStore';
import Preview from '@/components/Preview';

export default function HistoryDetailPage() {
  const { id } = useLocalSearchParams();
  const { history } = useHistoryStore();
  const historyItem = history.find((item) => item.id === id);

  if (!historyItem) {
    return null;
  }

  return (
    <>
    <Stack.Screen 
        options={{ 
          title: historyItem.title,
          headerTintColor: 'white',
          headerBackTitle: '목록',
        }} 
      />
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {historyItem.imageUrl && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: historyItem.imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        
        <Preview
          content={historyItem.content}
          storyTitle={historyItem.title}
          onlyContent={true}
          style={styles.preview}
        />
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  preview: {
    padding: 16,
  },
});
