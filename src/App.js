import './App.css';
import Addition from './Addition';

function App() {
  const styles = {
    container: {
      backgroundColor: "steelblue"
      , color: "white"
      , paddingTop: 30
      , paddingLeft: 100
      , paddingBottom: 100
    }
  }

  return (
    <div style={styles.container}>
      <h1>Add stuff up...</h1>
      <Addition numOne={42} numTwo={42} />
      <Addition numOne={8} numTwo={9} />
      <Addition numOne={4} numTwo={5} />
    </div>
  );
}

export default App;
