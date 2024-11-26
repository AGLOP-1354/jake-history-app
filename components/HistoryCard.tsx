import { View, Text, Image, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import { Colors } from '@/constants/Colors';
import { HistoryType } from '@/constants/history';
const HistoryCard = ({
  title,
  imageUrl,
  summary,
  category,
  createdAt,
}: HistoryType) => {
  const isRecentHistory = dayjs(createdAt).isAfter(dayjs().subtract(7, "day"));

  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          marginBottom: 25,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: Colors.dark.bg200,
      }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: 200 }}
          />

          {isRecentHistory && (
            <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: Colors.dark.bgBlack, padding: 4, borderTopLeftRadius: 4 }}>
              <Text style={{ color: Colors.dark.accent300, fontSize: 12, fontWeight: 'bold' }}>New</Text>
            </View>
          )}
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.dark.text100,
            padding: 10,
            paddingBottom: 0,
          }}>
          {title}
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: Colors.dark.text200,
            padding: 10,
          }}>
          {summary} {category?.name}
        </Text>

        {
          category?.id && (
            <View style={{ position: 'absolute', top: 10, right: 10, backgroundColor: category.color, padding: 5, borderRadius: 5 }}>
              <Text style={{ color: Colors.dark.text100, fontWeight: 'bold' }}>{category.name}</Text>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;