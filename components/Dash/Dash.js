import React from 'react'
import { View } from 'react-native'

export const Dash = ({dashLeft, dashWidth, dashHeight, space, bgColor, random}) => {
    const style = {
            position: 'absolute',
            backgroundColor: bgColor,
            width: dashWidth,
            height: dashHeight,
            left: dashLeft,
            bottom: random + dashHeight + space,
            borderRadius: '15px'
        },
        styleOne = {
            position: 'absolute',
            backgroundColor: bgColor,
            width: dashWidth,
            height: dashHeight,
            left: dashLeft,
            bottom: random,
            borderRadius: '15px'
        };


    return (
        <>
            <View style={style}/>
            <View style={styleOne}/>
        </>
    )
}