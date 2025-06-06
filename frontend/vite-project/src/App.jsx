import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import './App.css'
import axios from 'axios'
import rehypeHightlight from "rehype-highlight"
import 'highlight.js/styles/github-dark.css'
import Markdown from 'react-markdown'

function App() {
  const [count, setCount] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
    return 1 + 1
  }`)
  const [review,setReview]=useState('')
useEffect(()=>{
  prism.highlightAll()
})

async function reviewCode() {
  try {
    const response = await axios.post(
      'https://codereviewerbackend.onrender.com/ai',
      { code },
      {
        withCredentials: true,
      }
    );
    setReview(response.data);
  } catch (error) {
    console.error("Error reviewing code:", error);
  }
}
  return (
    <>
      <main>
        <div className="left">
          <div className='code'>
          <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className='review'>Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHightlight]}>
          {review}
          </Markdown>
          </div>
      </main>
      
    </>
  )
}

export default App
