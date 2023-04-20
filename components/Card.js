import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
  },
})

export default Card
