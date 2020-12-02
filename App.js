import React, { useState, useEffect  } from 'react'
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import {AppStyle} from './components/config/style'
import {gravityB, gravityR, dashWidth, dashHeight, space, gravityRT, dashWidthT, dashHeightT, spaceT, bgColor, random } from './components/config/instruction'

import {Geometry} from './components/Geometry/Geometry'
import {Dash} from './components/Dash/Dash'

export default function App() {
  const screenW = Dimensions.get('screen').width,
    screenH = Dimensions.get('screen').height,
    geometryL = screenW / 2,
    geometryR = screenH / 2,
    [geoBottom, setGeoBottom] = useState(geometryR),
    [dashRight, setDashRight] = useState(screenW),
    [dashRightT, setDashRightT] = useState(screenW + screenW/2 + 30),
    [dashH, setDashH] = useState(0), //nneg
    [dashHT, setDashHT] = useState(0),
    [isGameOver, setIsGameOver] = useState(false);
    let timerIdBotton, timerIdRight, timerIdRightT;
  

  useEffect(() => {
    if(geoBottom > 0) { timerIdBotton = setInterval(() => { setGeoBottom(geoBottom => geoBottom - gravityB )}, 30)}

    return () => clearInterval(timerIdBotton) 
  }, [geoBottom])

  useEffect(() => {
    if(dashRight > -dashWidth) { 
      timerIdRight = setInterval(() => { setDashRight(dashRight => dashRight - gravityR )}, 31)
      return () => clearInterval(timerIdRight)
    } else {
      setDashRight(screenW)
      setDashH(random)
    }
  },[dashRight])

  useEffect(() => {
    if(dashRightT > -dashWidthT) { 
      timerIdRightT = setInterval(() => { setDashRightT(dashRightT => dashRightT - gravityRT )}, 30)
      return () => clearInterval(timerIdRightT)
    } else {
      setDashRight(screenW)
      setDashHT(random)
    }
  },[dashRightT])

  useEffect(() => {    
    if (
      ((geoBottom < (dashH + dashHeight + 30) || geoBottom > (dashH + dashHeight + space - 30)) && (dashRight > screenW/2 - 30 && dashRight < screenW/2 + 30 ))
      || 
      ((geoBottom < (dashHT + dashHeight + 30) || geoBottom > (dashHT + dashHeight + space - 30)) && (dashRight > screenW/2 - 30 && dashRightT < screenW/2 + 30 ))) 
      {
        console.log('game over')
      gameOver()
    }
  },[])

  const gameOver = () => {
    clearInterval(timerIdBotton)
    clearInterval(timerIdRight)
    clearInterval(timerIdRightT)
    setIsGameOver(true)
  },
  jumping = () => {
    if(!isGameOver && (geoBottom < screenW)) {
      setGeoBottom(geoBottom => geoBottom + 50)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={jumping}>
      <View style={AppStyle}>
        <Geometry geoBottom={geoBottom} geoLeft={geometryL}/>
        <Dash dashLeft={dashRight} dashWidth={dashWidth} dashHeight={dashHeight} space={space} bgColor={bgColor} random={random}/>
        <Dash dashLeft={dashRightT} dashWidth={dashWidthT} dashHeight={dashHeightT} space={spaceT} bgColor={bgColor}  random={random}/>
      </View>
    </TouchableWithoutFeedback>
  );
}
