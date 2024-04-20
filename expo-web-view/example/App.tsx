import {WebView} from 'expo-web-view';
import {StyleSheet} from "react-native";

export default function App() {
  return (
      <WebView
          style={styles.webView}
          url={"https://expo.dev"}
          onLoad={(event) => alert(`loaded ${event.nativeEvent.url}`)}
      />
  )
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
