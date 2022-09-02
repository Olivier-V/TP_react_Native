import {
  Alert,
  Linking,
  Modal,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {Camera} from 'react-native-vision-camera';

const Snap = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      style={styles.bckgrd}
      source={require('../assets/pkbll.jpg')}>
      <View>
        <Modal animationType="slide" visible={modalVisible} transparent={false}>
          <View style={styles.modal}>
            <CustomButton
              style={{marginBottom: 10}}
              onPress={async () => {
                let permission = await Camera.getCameraPermissionStatus();

                if (permission === 'authorized') {
                  navigation.navigate('Take photo');
                  setModalVisible(false);
                } else {
                  permission = await Camera.requestCameraPermission();

                  if (permission === 'denied') {
                    Linking.openSettings();
                  }
                  setModalVisible(false);
                }
              }}>
              Prendre une photo
            </CustomButton>
            <CustomButton onPress={() => setModalVisible(false)}>
              Annuler
            </CustomButton>
          </View>
        </Modal>
        <CustomButton
          style={styles.bouton}
          onPress={() => setModalVisible(true)}>
          PokemonSnap
        </CustomButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bckgrd: {
    flex: 1,
  },
  bouton: {
    marginLeft: 50,
    marginTop: 200,
  },
});

export default Snap;
