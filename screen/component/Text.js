import React from 'react'
import {Text} from 'react-native';

export const TextDefault = props => {
    return <Text style={{fontFamily:"Lato-Regular",...props.styles}}>{props.children}</Text>
}
