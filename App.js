import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Router from "./src/navigation/Router";

export default function App() {
   return (
      <>
         <StatusBar style="auto" />
         <Router />
      </>
   );
}
