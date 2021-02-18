import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IconCheckCircle from '../assets/img/svgComponents/IconCheckCircle';

const InventoryHome = () => {
  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.bgModal} />
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalLine} />
          <Image
            style={styles.modalImg}
            source={require('../assets/img/profile.jpg')}
          />
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Angèle</Text>
              <View style={styles.modalIconCheck}>
                <IconCheckCircle style={{elevation: 2}} />
              </View>
            </View>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalTextButton}>S'abonner</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'black',
    opacity: 0.8,
  },
  modal: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    top: 100,
    zIndex: 1002,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '96%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
    padding: 15,
  },
  modalLine: {
    backgroundColor: '#D8D8D8',
    width: '20%',
    height: 5,
    borderRadius: 100,
  },
  modalImg: {
    marginTop: 20,
    width: '100%',
    borderRadius: 4,
  },
  modalHeader: {
    marginTop: 15,
    backgroundColor: '#f2faff',
    width: '100%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 4,
  },
  modalTitle: {
    fontSize: 50,
    fontFamily: 'TwCenMT-Bold',
    letterSpacing: -2.83,
    color: '#111619',
  },
  modalIconCheck: {
    position: 'absolute',
    right: -25,
    top: 15,
  },
  modalButton: {
    marginTop: 15,
    width: 175,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#009eff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
  },
  modalTextButton: {
    color: 'white',
    fontFamily: 'TwCenMT',
    fontSize: 24,
  },
});

export default InventoryHome;
