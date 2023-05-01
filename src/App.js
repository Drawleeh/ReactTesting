import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="input-group">
          <label htmlFor="Input">Input</label>
          <input type="text" id="output" />
        </div>
        <div className="input-group">
          <label htmlFor="output">Output</label>
          <input type="text" id="output" />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;