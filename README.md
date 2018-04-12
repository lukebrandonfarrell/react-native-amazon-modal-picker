# react-native-amazon-modal-picker

[![npm](https://img.shields.io/npm/v/react-native-amazon-modal-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-native-amazon-modal-picker)
[![npm licence](http://img.shields.io/npm/l/react-native-amazon-modal-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-amazon-modal-picker)
[![npm downloads](http://img.shields.io/npm/dt/react-native-amazon-modal-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-amazon-modal-picker)

React Native selection modal inspired by Amazons mobile application modal style.

![Amazon](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-amazon-modal-picker/IMG-0450.jpg)
![Preview](https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-amazon-modal-picker/modal.gif)

## Install

To get started install via npm:
```sh
 npm install react-native-amazon-modal-picker --save
```

## Usage

To use in React Native. Import:
```js
 import ModalSelect from 'react-native-amazon-modal-picker';
```

Then add it to your code:
```js
<ModalSelect
  isVisible={this.state.modalOpen}
  title='Selector'
  labels={[...Array(30).keys()]}
  onSelect={(value) => {
    this.setState({ modalValue: value, modalOpen: false }); //<- Closes Modal and sets value
  }}
  headerColor='#6e2ccd' />
```

## Props

| Prop            | Type          | Optional  | Default              | Description                                                                             |
| --------------- | ------------- | --------- | -------------------- | --------------------------------------------------------------------------------------- |
| isVisible       | bool          | No        | false                | Is the modal visible?                                                                   |
| onSelect        | func          | No        |                      | Function which gets called when a option is pressed. Value passed as parameter.         |
| title           | string        | Yes       | 'Select'             | Tile of modal                                                                           |
| labels          | array         | No        |                      | Array of labels to render in modal                                                      |
| values          | array         | Yes       |                      | Custom values to pass to onSelect when item is clicked. Must be equal length to labels  |
| headerColor     | string        | Yes       | '#CD2C2E'            | Colour of header                                                                        |

## Contributing

If you want to issue a PR, go ahead ;)

## Authors

* [**Luke Brandon Farrell**](https://lukebrandonfarrell.com/) - *Author*

## License

This project is licensed under the MIT License
