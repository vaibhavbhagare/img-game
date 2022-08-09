import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import MainRoute from "./routes/Routes";
import { GlobalStyle } from "./assets/style";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainRoute />
    </div>
  );
}

export default App;
