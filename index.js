import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

class ModalSelector extends React.Component {
  select(i){
    const { labels, values, onSelect } = this.props;

    if(values){
      onSelect(values[i]);
    }else {
      onSelect(labels[i]);
    }
  }

  render() {
    const { isVisible, title, labels, values, headerColor } = this.props;

    return (
      <Modal isVisible={isVisible} style={ styles.modalStyle }>
        <View style={{ flex: 1 }}>
          <View style={[ styles.titleStyle, { backgroundColor: headerColor } ]}>
            <Text style={[ styles.titleTextStyle ]}>{ this.props.title }</Text>
          </View>

          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {
                labels.map((label, i) => {
                  return (
                    <TouchableOpacity key={i} onPress={() => this.select(i)}>
                      <View style={ styles.labelContainerStyle }>
                        <Text style={ styles.labelTextStyle }>{ label }</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              }
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

ModalSelector.defaultProps = {
  isVisible: false,
  title: 'Select',
  labels: null,
  values: null,
  headerColor: '#CD2C2E',
};

ModalSelector.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  labels: PropTypes.array,
  values: PropTypes.array,
  onSelect: PropTypes.func,
  headerColor: PropTypes.string,
};

const styles =  StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    margin: 40,
    alignItems: undefined,
    justifyContent: undefined,
  },
  titleStyle: {
    padding: 15,
  },
  titleTextStyle : {
    color: 'white',
    backgroundColor : 'transparent',
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.361328,
    lineHeight:28,
  },
  labelContainerStyle: {
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
  },
  labelTextStyle: {
    padding: 16,
  }
});

export default ModalSelector;
