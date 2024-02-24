import LeftSide from "./App-containres/left-sidebar";
import Main from "./App-containres/main";
function App() {
  return (
    <div className="app">
      <div className="left_sidebar">
        <LeftSide />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="right_sidebar">
        
      </div>
    </div>
  );
}
export default App;
