import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/analyze-code", {
        code,
        language,
      });
      setResponse(res.data); 
    } catch (error) {
      console.error("Error analyzing code", error);
    }
  };

  return (
    <div
      className="h-[100vh] w-[100%] bg-cover "
      style={{ backgroundImage: "url('../src/assets/chat.jpg')" }}
    >
      <div className="h-screen w-full backdrop-filter backdrop-blur-lg ">
        <div className="h-[800px] w-[80%] ml-52 relative left-20">
          <h1 className=" text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ml-[30%]">
            Code Vulnerability Checker
          </h1>

          <div>
            <label className="  text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ml-[60%]">
              Choose Language:
            </label>
            <select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
            </select>
          </div>

          <div className="mt-7 ">
            <MonacoEditor
              height="500px"
              width="1000px"
              language={language}
              value={code}
              onChange={(newCode) => setCode(newCode)}
              theme="vs-dark"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="text-white mt-6 ml-[37%] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-2xl"
          >
            Analyze Code
          </button>

          {response && (
            <div>
              <h3>Analysis Results:</h3>
              <pre>{response}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
