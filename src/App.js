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
import raw from "./assets/answer-key.txt";

function App() {
  const CANVAS_KEY =
    "18024~ipMZOtE9ZsV1GYIWdfidcEzigZNQro7XWWNcG1xS30d7JFLh4zOlfNGNm1HbGUCn";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [instructionText, setInstructionText] = useState(
    "Make a function that adds two integers"
  );
  const [testCases, setTestCases] = useState();
  const [examples, setExamples] = useState(["stdin: func(1+2)", "stout: 3"]);
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [editorTheme, setEditorTheme] = useState("Dark Mode");
  const [theme, setTheme] = useState("dark");
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
  const [correctFunction, setCorrectFunction] = useState('')
  const [testCaseAnswers, setTestCaseAnswers] = useState(['no function'])
  // Edward's local mock postman server
  var testServer = "https://b7892dbe-8db6-4ff4-9fe4-7b3bc05cab60.mock.pstmn.io";

  const testCodeHandler = () => {
    console.log(editorValue);
    (async () => {
      const functionCaller = `\nadding(2,3)\nadding_answer(2,3)\nadding(2,4)\nadding_answer(2,4)\nadding(4,3)\nadding_answer(4,3)\nadding(5,3)\nadding_answer(5,3)\nadding(100,3)\nadding_answer(100,3)`;
      const input = ["2 3", "2 4", "4 3", "5 3", "100 3"];
      const client = piston({ server: "https://emkc.org" });
      console.log(editorValue + correctFunction + functionCaller);
      const result = await client.execute(
        currentLanguage,
        editorValue + correctFunction + functionCaller
      );
      console.log(result);

      var results = result["run"]["stdout"].split("\n");

      var testcases = [];

      console.log(results);
      var j = 0;
      for (var i = 0; i < results.length - 1; i += 2) {
        var testcase = {
          key: 1,
          number: 1,
          result: "Fail",
          stdin: "code",
          stdout: "",
          stdout_expected: "",
        };
        testcase.key = j + 1;
        testcase.number = j + 1;
        testcase["stdout"] = results[i];
        testcase["stdout_expected"] = results[i + 1];
        testcase["stdin"] = input[j];
        if (results[i] == results[i + 1]) {
          testcase["result"] = "Pass";
        } else {
          testcase["result"] = "Fail";
        }
        testcases[j] = testcase;
        j++;
      }
      console.log(testcases);
      setTestCases(testcases);
    })();
  };

  const submitCodeHandler = () => {
    console.log(editorValue);
    (async () => {
      const functionCaller = `\nadding(100,-3)\nadding_answer(100,-3)\nadding(0,4)\nadding_answer(0,4)\nadding(123941, -4)\nadding_answer(123941, -4)\nadding(1243, 3124)\nadding_answer(1243, 3124)`;
      const input = ['100 -3', '0 4', '123941 -4', '1243 3124']
      const client = piston({ server: "https://emkc.org" });
      console.log(editorValue + correctFunction + functionCaller)
      const result = await client.execute(
        currentLanguage,
        editorValue + correctFunction + functionCaller
      );
      console.log(result)

      var results = result['run']['stdout'].split("\n");

      var testcases = []

      console.log(results)
      var j = 0;
      for (var i = 0; i < results.length - 1; i += 2) {
        var testcase = { key: 1, number: 1, result: "Fail", stdin: "code", stdout: "", stdout_expected: "" };
        testcase.key = j + 1;
        testcase.number = j + 1;
        testcase["stdout"] = results[i];
        testcase["stdout_expected"] = "Hidden Test Case"
        testcase["stdin"] = "Hidden Test Case";
        if (results[i] == results[i + 1]) {
          testcase['result'] = "Pass"
        }
        else {
          testcase['result'] = "Fail"
        }
        testcases[j] = testcase
        j++;
      }
      console.log(testcases)
      setTestCases(testcases);
    })();
  };
  const getAnswer = () => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setCorrectFunction(text);
      });
  };

  useEffect(() => getAnswer(), []);
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
        testCodeHandler={testCodeHandler}
        editorTheme={editorTheme}
      />
    </div>
  );
}

export default App;
