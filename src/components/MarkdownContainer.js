import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './MarkdownContainer.module.css'
import {useEffect, useState} from "react";


const MarkdownContainer = ({title, markdown, component}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(markdown)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

  return (
    <>
      <ReactMarkdown
        children={content}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                wrapLines
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
      {component}
    </>
  );
}

export default MarkdownContainer;
