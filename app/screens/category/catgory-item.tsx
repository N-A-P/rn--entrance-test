import {TouchableOpacity, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../lib/ui/text';
import {Category} from '../../redux/category/slice';
import React from 'react';

type Props = {
  item: Category;
  isPicked: boolean;
  onSelect: (id: number) => void;
};
export const CategoryItem = ({item: {name, id}, onSelect, isPicked}: Props) => {
  // const categoryWidth = (0.8 * dimension.width) / 3;

  const onPress = () => {
    onSelect(id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          // marginLeft: props.index ? MARGIN_CATEGORY_ITEM : 0,
          // width: categoryWidth,
        },
      ]}
      onPress={onPress}>
      <LinearGradient
        colors={
          isPicked
            ? ['rgba(138,50,169,1)', 'rgba(138,0,255,1)']
            : ['rgba(0,0,0,1)', 'rgba(0,0,0,1)']
        }
        useAngle
        angle={45}
        locations={[0, 0.6]}
        style={styles.background}>
        <Text level="body" style={styles.title}>
          {name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
type CateRowProps = {
  data: Category[];
  selected: Array<number>;
  onSelect: (id: number) => void;
};
export function CategoryRow(props: CateRowProps) {
  return (
    <View style={styles.row}>
      {props.data.map((item, index) => (
        <React.Fragment key={item.id}>
          <CategoryItem
            isPicked={props.selected.includes(item.id)}
            onSelect={props.onSelect}
            item={item}
          />
          {index !== props.data.length && <View style={styles.separator} />}
        </React.Fragment>
      ))}
      {/* <FlatList
        data={props.data}
        horizontal
        style={styles.row}
        // contentContainerStyle={styles.row}
        keyExtractor={(_, id) => id.toString() }
        ItemSeparatorComponent={() =><View style={styles.separator} />}
        renderItem={({item}) =>
          <CategoryItem
           isPicked={props.selected.includes(item.id)}
           onSelect={props.onSelect} item={item} />
        }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    flex: 1,
  },
  separator: {
    width: 10,
  },
  row: {
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    flexDirection: 'row',
    // flex: 1,
  },
  background: {
    flex: 1,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {textAlign: 'center'},
});
