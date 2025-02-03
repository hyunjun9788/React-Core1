import "./App.css";
import Button from "./Button.jsx";
import Child from "./Child.jsx";

function App() {
  return (
    <div>
      <ul>
        <li key="1">안녕하세요</li>
        <li key="2">남현준입니다.</li>
      </ul>
      <Button />
      <Child />
    </div>
  );
}
console.log(JSON.stringify(App(), null, 2));
export default App;
