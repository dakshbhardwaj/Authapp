import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const HomeScreen = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        style={styles.video}
        resizeMode="cover"
        repeat
        controls={true}
        onLoad={() => console.log('Video loaded')}
        onError={error => console.log('Video error:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    zIndex: 1, // Ensures video is above other elements
  },
});

export default HomeScreen;
