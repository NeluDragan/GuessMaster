import { Text, StyleSheet } from 'react-native'
import { View } from 'react-native'
import Card from '../components/Card'
import PrimaryButton from '../components/PrimaryButton'

function StartNewGame({ onStartGame }) {
  function GameStartHandler() {
    onStartGame(true)
  }
  return (
    <View style={styles.screen}>
      <Card style={styles.outputContainer}>
        <PrimaryButton onPress={GameStartHandler}>
          Start a New Game!
        </PrimaryButton>
      </Card>
      <View>
        <Text style={styles.summaryText}>
          In this game, you will choose a number between 1 and 99, and the AI
          will try to guess the number that you have chosen. After each guess,
          you will tell the AI whether your chosen number is higher or lower
          than the number it has guessed. The AI will use this information to
          make its next guess until it correctly guesses your chosen number. The
          game will end once the AI has correctly guessed your number. The goal
          of the game is to see how few attempts the AI takes to guess your
          number. Good luck!
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outputContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: 50,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    margin: 34,
    fontWeight: 'bold',
  },
})

export default StartNewGame
