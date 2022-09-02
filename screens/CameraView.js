import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraView = ({route, navigation}) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  async function trigger() {
    const photo = await camera.current.takePhoto({
      flash: 'auto',
    });
    setImageUri('file://' + photo.path);
    console.log(photo.path);
  }

  const [imageUri, setImageUri] = useState('');
  if (imageUri) {
    return (
      <>
        <Image style={styles.previewImage} source={{uri: imageUri}} />
      </>
    );
  }

  if (device == null) {
    return <Text style={StyleSheet.textChargement}>chargement</Text>;
  } else {
    return (
      <>
        <Camera
          ref={camera}
          photo={true}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        <TouchableOpacity style={styles.button} onPress={trigger} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  textChargement: {
    color: '#0a0a0a',
    fontSize: 30,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CameraView;
