import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Text from '../text';

type CheckBoxProps = {
  onToggle: (nextValue: boolean) => void;
  value?: boolean;
  containerStyle?: ViewStyle;
  label: string;
};

const CheckBox: React.FC<CheckBoxProps> = props => {
  const onPress = () => {
    const nextValue = !props?.value;
    props?.onToggle?.(nextValue);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, props.containerStyle]}>
        <Image
          style={styles.checkbox}
          source={
            props?.value
              ? require('../../../../assets/images/checked-box.png')
              : require('../../../../assets/images/unchecked-box.png')
          }
        />
        <Text style={styles.label} level="body">
          {props.label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    height: 24,
    width: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
});
