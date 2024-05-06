import React from 'react';
import {Image, ImageProps, StyleSheet, useWindowDimensions} from 'react-native';

type BackgroundProps = ImageProps & {
  bgScale?: number;
};

const Background: React.FC<BackgroundProps> = ({
  bgScale = 1,
  source,
  style,
}) => {
  const dimension = useWindowDimensions();
  const imageSize = Image.resolveAssetSource(source!);
  const scaledHeight =
    (dimension.width / imageSize.width) * imageSize.height * bgScale;

  return (
    <Image
      style={[styles.image, {height: scaledHeight}, style]}
      source={source}
    />
  );
};

export default Background;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    // resizeMode: 'stretch',
    zIndex: 0,
  },
});
