import React from 'react';
import {StyleProp, ViewStyle, StyleSheet, Text, TouchableOpacity, View, Switch, TextInput, ActivityIndicator, KeyboardAvoidingView, KeyboardAvoidingViewBase, Button, TouchableHighlight, TouchableHighlightBase } from 'react-native';

/**
 * Description placeholder
 * @date 12/25/2022 - 11:38:43 PM
 * @author James Gibbons
 *
 * @interface FM_Generic_Button
 * @typedef {FM_Generic_Button}
 */
interface FM_Generic_Button {
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {*}
   */
  onPress: any,
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?(number | string)}
   */
  width?: number | string,
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?(number | string)}
   */
  height?: number | string,
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {string}
   */
  text: string, 

  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?(number | string)}
   */
  paddingTop?: number | string,
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?(number | string)}
   */
  paddingBottom?: number | string,

  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?string}
   */
  colour?: string,
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?string}
   */
  fontColour?: string,

  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @type {?GenericButtonType}
   */
  buttonType?: GenericButtonType

  disabled?: boolean
}

/**
 * Description placeholder
 * @date 12/25/2022 - 11:38:43 PM
 * @author James Gibbons
 *
 * @export
 * @enum {number}
 */
export enum GenericButtonType {
  PRIMARY,
  SECONDARY
};

/**
 * Description placeholder
 * @date 12/25/2022 - 11:38:43 PM
 * @author James Gibbons
 *
 * @type {string}
 */
export var FM_BTN_PRIMARY = 'black';
/**
 * Description placeholder
 * @date 12/25/2022 - 11:38:43 PM
 * @author James Gibbons
 *
 * @type {string}
 */
export var FM_BTN_TEXT_PRIMARY = 'white';

/**
 * Description placeholder
 * @date 12/25/2022 - 11:38:43 PM
 * @author James Gibbons
 *
 * @export
 * @class GenericButton
 * @typedef {GenericButton}
 * @extends {React.Component<FM_Generic_Button>}
 */
export class GenericButton extends React.Component <FM_Generic_Button> {

  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @private
   * @type {*}
   */
  private styles: any;

  /**
   * Creates an instance of FM_Button.
   * @param {*} props
   * @memberof FM_Button
   */
  constructor(props: any) {
    super(props);
  }

  /**
   *
   *
   * @private
   * @return {*}  {StyleProp<ViewStyle>}
   * @memberof FM_Button
   */
  private getButtonStyles(): StyleProp<ViewStyle> {
    return this.styles.buttonWrap;
  }

  private buildStyles(): void {
    try {
      let buttonType: GenericButtonType = GenericButtonType.PRIMARY;
      if(this.props.buttonType) {
        buttonType = this.props.buttonType;
      }
  
      let backgroundColor = '';
      let fontColour = '';
      if(buttonType == GenericButtonType.PRIMARY) {
        backgroundColor = 'black';
        fontColour = 'white';
      }
      else if(buttonType == GenericButtonType.SECONDARY) {
        backgroundColor = 'white';
        fontColour = 'black';
      }
  
      // override if we are disabled.
      if(this.props.disabled) {
        backgroundColor = "#D3D3D3";
      }
  
      // define generic button styles.
      this.styles = StyleSheet.create({
        buttonWrap: {
          alignSelf: 'flex-start',
          width: this.props.width,
  
          paddingBottom: this.props.paddingBottom,
          paddingTop: this.props.paddingTop
        },
  
        buttonTextWrap: {
          backgroundColor: backgroundColor,
          borderRadius: 5,
  
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
  
          width: "100%"
        },
  
        buttonText: {
          textAlign: 'center',
          fontWeight: 'normal',
          color: fontColour,
        }
      });

    }
    catch(error) {
      throw error;
    }
  }
  
  /**
   * Description placeholder
   * @date 12/25/2022 - 11:38:43 PM
   * @author James Gibbons
   *
   * @returns {*}
   */
  public render() {
    this.buildStyles();

    return (
      <TouchableOpacity
        onPress={this.props.onPress} 
        style={
          this.styles.buttonWrap
        }
        activeOpacity={0.1}
        disabled={this.props.disabled}
      >
        <View style={this.styles.buttonTextWrap}>
          <Text style={this.styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}