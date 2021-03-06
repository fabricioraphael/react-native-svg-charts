import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

import { Svg } from 'expo'
const { Text, G } = Svg

class ProgressCircleWithCenterTextExample extends React.PureComponent {

    render() {

        const TextGroup = () => (
            <G key="title">
                <Text
                    textAnchor="middle"
                    alignmentBaseline="text-bottom"
                    fontSize="20"
                    fontWeight="bold">
                    Title
                </Text>
                <Text
                    key="subtitle"
                    textAnchor="middle"
                    alignmentBaseline="text-top">
                    Subtitle
                </Text>
            </G>
        )

        return (
            <ProgressCircle
                style={{ height: 200 }}
                progress={ 0.7 }
                progressColor={ 'rgb(134, 65, 244)' }
            >
                <TextGroup/>
            </ProgressCircle>
        )
    }

}

export default ProgressCircleWithCenterTextExample
