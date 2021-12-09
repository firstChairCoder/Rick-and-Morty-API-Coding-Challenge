import React, { useState } from "react"
import { Button, StyleSheet, View } from "react-native"

import getStyleSheet from "./assets/components/getStyleSheet"

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme () {
    setDarkTheme(!darkTheme)
  }

  const styles = getStyleSheet(darkTheme)
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button 
          title={backgroundColor}
          onPress={toggleTheme()}
        />
      </View>
    </View>
  )
}