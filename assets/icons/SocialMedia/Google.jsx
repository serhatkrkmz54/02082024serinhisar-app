import { View, Text } from 'react-native'
import React from 'react'
import { Path, Rect, Svg } from 'react-native-svg'

const Google = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={props.width} height={props.height} fill="none" {...props}>
      <Rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth={props.strokeWidth} />
      <Path 
        d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" 
        stroke="currentColor" 
        strokeWidth={props.strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </Svg>

  )
}

export default Google