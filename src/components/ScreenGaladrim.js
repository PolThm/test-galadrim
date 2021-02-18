import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const InventoryHome = () => {
  return (
    <View>
      <Image style={styles.imgMainBg} source={require('../assets/img/bg.jpg')} />
      <View style={styles.bgModal} />
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.line} />
          <Image
            style={styles.imgProfile}
            source={require('../assets/img/profile.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgMainBg: {
    width: '100%',
    height: '100%',
  },
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
    top: 120,
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
  line: {
    backgroundColor: '#D8D8D8',
    width: '20%',
    height: 5,
    borderRadius: 100,
  },
  imgProfile: {
    marginTop: 20,
    width: '100%',
    borderRadius: 4,
  }
});

export default InventoryHome;
