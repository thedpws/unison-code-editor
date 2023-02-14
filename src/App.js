// Using Tailwind CSS, Headless UI, ReactIcons

import { useState, useEffect } from "react";

import Editor from "./components/Editor";
import "./App.css";
import Split from "react-split";
import Panels from "./components/Panels";
import "./styles/styles.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Header from "./components/Header";
import piston from "piston-client";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [instructionText, setInstructionText] = useState("Make a function that adds two integers");
  const [testCases, setTestCases] = useState();
  const [examples, setExamples] = useState([
    "stdin: func(1+2)",
    "stout: 3",

  ]);
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [editorTheme, setEditorTheme] = useState("Dark Mode");
  const [theme, setTheme] = useState("dark");
  const [output, setOutput] = useState("");
  const placeholders = {
    java: `public static void main(String[] args){
    System.out.println("hello world");
  }`,
    python: `print('hello world')`,
    javascript: `console.log('hello world')`,
    mysql: `SELET * FROM TABLE1`,
  };
  const [editorValue, setEditorValue] = useState(placeholders[currentLanguage]);
  const [languageValue, setLanguageValue] = useState({
    java: placeholders["java"],
    python: placeholders["python"],
    javascript: placeholders["javascript"],
    mysql: placeholders["mysql"],
  });

  // Edward's local mock postman server
  var testServer = "https://b7892dbe-8db6-4ff4-9fe4-7b3bc05cab60.mock.pstmn.io";

  const submitCodeHandler = () => {
    console.log(editorValue);
    (async () => {
      const functionCaller = `\nfunc(2,3)\nfunc(2,4)\nfunc(4,3)\nfunc(5,3)\nfunc(100,3)`;
      const input = ['func(2,3)', 'func(2,4)', 'func(4,3)', 'func(5,3)', 'func(100,3)']
      const answerKey = ['5', '6', '7', '8', '103']
      const client = piston({ server: "https://emkc.org" });

      const result = await client.execute(
        currentLanguage,
        editorValue + functionCaller
      );

      var results = result['run']['stdout'].split("\n");
  
      setOutput(result["run"]);
      for (var i = 0; i < results.length - 1; i++){
        testcases[i]["stdout"] = results[i];
        testcases[i]["stdin"] = input[i];
        if(results[i] == answerKey[i]){
          testcases[i]['result'] = "Pass"
        }
        else{
          testcases[i]['result'] = "Fail"
        }
      }
      setTestCases(testcases);
    })();
    // if (value) {
    //   const newComment = {
    //     createdBy: "edtest",
    //     description: editorValue,
    //     userId: 1,
    //   };
    //   fetch(testServer + "/submit", {
    //     method: "POST",
    //     headers: new Headers({
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     }),
    //     body: JSON.stringify(newComment),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Data recieved post");
    //       console.log(data);
    //       setTestCases(data);
    //       setLoading(false);
    //       setError(null);
    //     })
    //     .catch((error) => {
    //       setLoading(false);
    //       setError("Something went wrong, please try again later.");
    //     });
    // }
  };

  const getTestResults = () => {
    fetch(
      // Edward's local mock postman server
      testServer + "/results"
    )
      .then((data) => {
        data.json();
      })
      .then((data) => {
        console.log("test results recieved get");
        console.log(data);
        setTestCases(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong, please try again later.");
      });
  };

  const testcases = [
    { key: 1, number: 1, result: "Pass", stdin: "", stdout: "" },
    { key: 2, number: 2, result: "Fail", stdin: "", stdout: "Segmentation Fault" },
    { key: 3, number: 3, result: "Pass", stdin: "",  stdout: "" },
    { key: 4, number: 4, result: "Pass",  stdin: "", stdout: "" },
    { key: 5, number: 5, result: "Pass",  stdin: "", stdout: "" },
  ];
  const getMockTestResults = () => {
    setTestCases(testcases);
    console.log("mock test results set");
  };

  const getInstructions = () => {
    fetch("http://localhost:3333/instructions")
      .then((data) => {
        data.json();
      })
      .then((data) => {
        //console.log('instructions recieved get')
        setInstructionText(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong, please try again later.");
      });
  };

  useEffect(() => getInstructions(), []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        editorTheme={editorTheme}
        setEditorTheme={setEditorTheme}
        setTheme={setTheme}
        editorValue={editorValue}
        setEditorValue={setEditorValue}
        placeholders={placeholders}
        languageValue={languageValue}
        setLanguageValue={setLanguageValue}
      />
      <Panels
        currentLanguage={currentLanguage}
        editorValue={editorValue}
        setEditorValue={setEditorValue}
        instructions={instructionText}
        examples={examples}
        testCases={testCases}
        submitCodeHandler={submitCodeHandler}
        getMockTestResults={getMockTestResults}
        editorTheme={editorTheme}
        output={output}
      />
    </div>
  );
}

export default App;
