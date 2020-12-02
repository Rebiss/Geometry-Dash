import React from 'react'
import { View } from 'react-native'

export const Geometry = ({geoBottom, geoLeft}) => {
    const geoWidth = 50,
        geoHeight = 50;

    const style = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: '#78FD02',
        width: '50px',
        height: '50px',
        left: geoLeft - (geoWidth/2),
        bottom: geoBottom - (geoHeight/2)
    }
    return (
        <View style={style} />
    )
}