import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconCheckCircle from '../assets/img/svgComponents/IconCheckCircle';
import {BoxShadow} from 'react-native-shadow';
import IconStar from '../assets/img/svgComponents/IconStar';

const InventoryHome = () => {
  const shadowOpt = {
    width: 180,
    height: 48,
    color: '#009eff',
    border: 5,
    radius: 4,
    opacity: 0.1,
    x: 0,
    y: 1,
    style: {marginTop: 15},
  };

  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.bgModal} />
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalLine} />
          <ScrollView style={styles.scrollSection}>
            <Image
              style={styles.modalImg}
              source={require('../assets/img/profile.jpg')}
            />
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Angèle</Text>
                <View style={styles.modalIconCheck}>
                  <IconCheckCircle />
                </View>
              </View>
              <BoxShadow setting={shadowOpt}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalTextButton}>S'abonner</Text>
                </TouchableOpacity>
              </BoxShadow>
            </View>
            <View style={styles.modalArtistContent}>
              <Text
                style={{fontFamily: 'TwCenMT', fontSize: 20, color: '#131415'}}>
                Angèle BE BROL BE
              </Text>
              <Text
                style={{
                  fontFamily: 'ProxiNova',
                  fontSize: 15,
                  color: '#7f8387',
                  lineHeight: 28,
                }}>
                📀 Angele vl records 📀
              </Text>
              <Text>🌲🍃🌼🌞🌄</Text>
            </View>
          </ScrollView>
          <View style={styles.modalFooter}>
            <View style={styles.modalFooterCol}>
              <Text style={styles.modalFooterValue}>872k</Text>
              <Text style={styles.modalFooterSubject}>abonnés</Text>
            </View>
            <View style={styles.modalFooterCol}>
              <Text style={styles.modalFooterValue}>55.6M</Text>
              <Text style={styles.modalFooterSubject}>vues</Text>
            </View>
            <View style={styles.modalFooterCol}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.modalFooterValue, {marginRight: 7}]}>
                  31M
                </Text>
                <IconStar />
              </View>
              <Text style={styles.modalFooterSubject}>106 NOX</Text>
            </View>
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
    zIndex: 10,
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
    zIndex: 20,
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
  scrollSection: {
    width: '100%',
    marginTop: 20,
    marginBottom: 180,
  },
  modalImg: {
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
    width: 180,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#009eff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
    elevation: 5,
  },
  modalTextButton: {
    color: 'white',
    fontFamily: 'TwCenMT',
    fontSize: 24,
  },
  modalArtistContent: {
    marginTop: 22,
    width: '100%',
  },
  modalFooter: {
    paddingVertical: 20,
    position: 'absolute',
    bottom: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  modalFooterCol: {
    alignItems: 'center',
  },
  modalFooterValue: {
    fontFamily: 'TwCenMT-Bold',
    fontSize: 25,
    color: '#111619',
  },
  modalFooterSubject: {
    marginTop: 5,
    fontFamily: 'ProximaNova-Light',
    color: '#111619',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default InventoryHome;
