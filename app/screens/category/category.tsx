import React from 'react';
import {FlatList, Image, View} from 'react-native';
import ScreenWrapper from '../../lib/layout/screen';
import {atoms} from '../../lib/layout/atoms';
import Text from '../../lib/ui/text';
import {useCategoryController} from './category-controller';
import {CategoryRow} from './catgory-item';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function Spacer() {
  return <View style={atoms.pt_md} />;
}
export default function CategoryScreen() {
  const {categories, onSelect, selected} = useCategoryController();
  const inset = useSafeAreaInsets();
  return (
    <ScreenWrapper bgScale={0.8} bg={require('../../../assets/images/bg2.png')}>
      <View style={[atoms.flex_1, atoms.px_lg, atoms.justify_center]}>
        <View
          style={[
            atoms.flex_1,
            atoms.justify_between,
            atoms.mb_3xl,
            {paddingTop: inset.top},
          ]}>
          <View style={[atoms.flex_row, atoms.justify_between]}>
            <Image source={require('../../../assets/images/arrow.png')} />
            <Text style={atoms.font_bold} level="body">
              Done
            </Text>
          </View>
          <View>
            <Text style={atoms.font_bold} level="h1">
              Wellcome to Nexle Entrance Test
            </Text>
            <Text style={atoms.mt_md} level="body">
              Please select categories what you would like to see on your feed.
              You can set this later on Filter.
            </Text>
          </View>
        </View>
        <View style={[atoms.flex_2, {paddingBottom: inset.bottom}]}>
          <FlatList
            style={atoms.flex_1}
            extraData={selected}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={Spacer}
            data={categories}
            renderItem={({item}) => (
              <CategoryRow
                selected={selected}
                onSelect={onSelect}
                data={item}
              />
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
