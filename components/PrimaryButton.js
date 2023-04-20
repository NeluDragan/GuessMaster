import { View, Text, Pressable, StyleSheet } from 'react-native'
import colors from '../constants/colors'

function PrimaryButton({ children, onPress }) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.pressed, style.buttonInnerContainer]
            : style.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: colors.buttons,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
})

export default PrimaryButton
