import React, { useState, useEffect  } from 'react'
import { View, Dimensions } from 'react-native'
import {AppStyle} from './components/config/style'
import {gravityB, gravityR, dashWidth, dashHeight, space, gravityRT,dashWidthT,dashHeightT, spaceT, bgColor } from './components/config/instruction'

import {Geometry} from './components/Geometry/Geometry'
import {Dash} from './components/Dash/Dash'

export default function App() {
  const screenW = Dimensions.get('screen').width,
    screenH = Dimensions.get('screen').height,
    geometryL = screenW / 2,
    geometryR = screenH / 2,
    [geoBottom, setGeoBottom] = useState(geometryR),
    [dashRight, setDashRight] = useState(screenW),
    [dashRightT, setDashRightT] = useState(screenW + screenW/2 + 30);
    let timerIdBotton, timerIdRight, timerIdRightT;
  

  useEffect(() => {
    if(geoBottom > 0) { timerIdBotton = setInterval(() => { setGeoBottom(geoBottom => geoBottom - gravityB )}, 31)}

    return () => clearInterval(timerIdBotton) 
  }, [geoBottom])

  useEffect(() => {
    if(dashRight > -dashWidth) { 
      timerIdRight = setInterval(() => { setDashRight(dashRight => dashRight - gravityR )}, 31)
      return () => clearInterval(timerIdRight)
    } else {
      setDashRight(screenW)
    }
  },[dashRight])

  useEffect(() => {
    if(dashRightT > -dashWidthT) { 
      timerIdRightT = setInterval(() => { setDashRightT(dashRightT => dashRightT - gravityRT )}, 31)
      return () => clearInterval(timerIdRightT)
    } else {
      setDashRight(screenW)
    }
  },[dashRightT])

  return (
    <>
      <View style={AppStyle}>
        <Geometry geoBottom={geoBottom} geoLeft={geometryL}/>
        <Dash dashLeft={dashRight} dashWidth={dashWidth} dashHeight={dashHeight} space={space} bgColor={bgColor}/>
        <Dash dashLeft={dashRightT} dashWidth={dashWidthT} dashHeight={dashHeightT} space={spaceT} bgColor={bgColor}/>
      </View>
    </>
  );
}
