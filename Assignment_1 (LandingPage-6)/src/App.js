import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Home from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
}

export default App;
