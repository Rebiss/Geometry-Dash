import React from 'react'
import { View } from 'react-native'
import rocket from './img/2130.png'

export const Geometry = ({geoBottom, geoLeft}) => {
    const style = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundImage: `url(${rocket})`,
        // backgroundRepeat: `no-repeat`,
        // backgroundAttachment: `fixed`,
        // backgroundPosition: `center`,
        width: '64px',
        height: '64px',
        left: geoLeft - 25,
        bottom: geoBottom - 25
    }
    return (
        <View style={style} />
    )
}