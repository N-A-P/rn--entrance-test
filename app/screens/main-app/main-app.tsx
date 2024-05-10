import React from 'react';
import {Button, View} from 'react-native';
import ScreenWrapper from '../../lib/layout/screen';
import Text from '../../lib/ui/text';
import {goBack} from '../../navigation/navigation-service';
import {atoms} from '../../lib/layout/atoms';
import {color} from '../../lib/layout/token';

export default function MainAppScreen() {
  return (
    <ScreenWrapper disableShadow>
      <View style={[atoms.flex_1, atoms.justify_center, atoms.align_center]}>
        <Text color={color.PRIMARY} level="h1">
          Well come to the app
        </Text>
        <Button title="goBack" onPress={goBack} />
      </View>
    </ScreenWrapper>
  );
}
