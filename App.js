import React, { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import Colors from './constants/colors'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import colors from './constants/colors'
import StartNewGame from './screens/StartGameButton'
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessNumber, setGuessNumber] = useState(0)
  const [startGame, setStartGame] = useState(false)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessNumber(numberOfRounds)
  }

  function GameStartHandler() {
    setStartGameScreen(true)
  }

  function StartNewGameHandler() {
    setUserNumber(null)
    setGameIsOver(true)
    setGuessNumber(0)
  }
  function onStartGameHandler() {
    setStartGame(true)
  }

  let screen = <StartNewGame onStartGame={onStartGameHandler} />
  // <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (startGame) {
    screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  }

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessNumber}
        onStartNewGame={StartNewGameHandler}
      />
    )
  }

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={[colors.primary, 'black']} style={styles.screen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <Header title="Guess a Number" />
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.25,
  },
})
