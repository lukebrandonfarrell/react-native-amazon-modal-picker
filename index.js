import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';

class ModalSelector extends React.Component {
  select(i){
    const { labels, values, onSelect } = this.props;

    if(!_.isEmpty(values)){
      onSelect(values[i]);
    }else {
      onSelect(labels[i]);
    }
  }

  render() {
    const { title, labels, values } = this.props;

    return (
      <Modal isVisible={this.props.visible} style={ styles.modalStyle }>
        <View style={{ flex: 1 }}>
          <View style={ styles.titleStyle }>
            <Text style={[ material.title, styles.titleTextStyle ]}>{ this.props.title }</Text>
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

const styles =  StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    margin: 40,
    alignItems: undefined,
    justifyContent: undefined,
  },
  titleStyle: {
    padding: 15,
    backgroundColor: '#CD2C2E',
  },
  titleTextStyle : {
    color: 'white',
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
