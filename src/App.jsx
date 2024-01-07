import { useState } from "react";
import "./App.css";

const TEST =
  "# Welcome😀 to my React Markdown Previewer!## This is a sub-heading... ### And here's some other cool stuff: You can also make text **bold**... whoa! Or _italic_. Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~. There's also [links](https://www.freecodecamp.org), and > Block Quotes! And if you want to get really crazy, even tables: Wild Header | Crazy Header | Another Header? ------------ | ------------- | ------------- Your content can | be here, and it | can be here.... And here. | Okay. | I think we get it. - And of course there are lists. - Some are bulleted. - With different indentation levels. - That look like this. 1. And there are numbered lists too. 1. Use just 1s if you want! 1. And last but not least, let's not forget embedded images: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

const App = () => {
  //main state for changing raw text into marked text
  const [input, setInput] = useState(TEST);

  //whenever the textarea is changed handleChange function takes what's inside of element and sets input state
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //on render input gets parsed by marked library
  const formatText = () => {
    //return { __html: marked.parse(input) };
  };

  //main html/jsx
  return (
    <div className="app">
      <textarea id="editor" onChange={handleChange} value={input}></textarea>
      {/*i don't know exatly what dangerouslySetInnerHTML does*/}
      <div id="preview" dangerouslySetInnerHTML={formatText()}></div>
    </div>
  );
};

export default App;
