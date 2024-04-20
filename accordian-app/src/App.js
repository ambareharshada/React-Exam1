import logo from "./logo.svg";
import "./App.css";
import Example1 from "./components/Example1";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <h4>Frequesntly Asked Questions - Accordion Example</h4>
      <Accordion title="What is nvm?">
        <p><b>NVM</b> stands for Node Version Manager. It's a tool that allows you to
        install and manage multiple versions of Node.js on your machine. This is
        particularly useful when you're working on different projects that may
        require different versions of Node.js, or when you want to test your
        applications with different Node.js versions.</p>
      </Accordion>
      <Accordion title="Simple example of DSA - Data Structure Algorithm">
        <strong> Data Structure: Stack </strong>
        <br />
        <p>
          A stack is a linear data structure that follows the Last In, First Out
          (LIFO) principle. In a stack, elements are added and removed from the
          same end, called the top. Think of it like a stack of plates, where
          you can only add or remove plates from the top.
        </p>
        <strong> Algorithm: Reverse a String using a Stack </strong> <br/>
        Here's a simple algorithm to reverse a string using a stack:
        <ul>
          <li>Initialize an empty stack.</li>
          <li> Iterate through each character in the input string.</li>
          <li>Push each character onto the stack.</li>
          <li>
            Pop each character from the stack and append it to a new string.
          </li>
          <li>Return the new string as the reversed string.</li>
        </ul>
      </Accordion>
    </div>
  );
}

export default App;
