import { useState, useRef, useEffect } from "react";
import "./App.scss";
import { marked } from "marked";

function App() {
	const defaultText = `# Hello World!

## Markdown Viewer

With Markdown, you can easily make text **bold** or *italic*.

---

You can add some inline \`code\`, or you can add entire code blocks:

\`\`\`js
function memeFunc() {
	return "Never Gonna Give You Up!"
}
\`\`\`

---

You can make lists:
- With as many items as you want
- Seriously
- Try adding one!

---

You can add quotes:

> "This is a Quote, mate"
>
> -Thomas Edison, probably

---

You can even add images and links!

![image](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

[Markdown Syntax](https://www.markdownguide.org/basic-syntax/)

Delete all my text and try it out for yourself!`;

	const [text, editText] = useState(defaultText);

	// prettier-ignore
	const bottomRef = useRef();

	useEffect(() => {
		bottomRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end",
		});
	}, [text, bottomRef]);

	const textAreaHandler = function (e) {
		editText(e.target.value);
	};

	marked.setOptions({
		breaks: true,
	});

	return (
		<div className="App">
			<textarea id="editor" value={text} onChange={textAreaHandler} />
			<div id="preview">
				<div
					dangerouslySetInnerHTML={{
						__html: marked(text),
					}}
				></div>
				<div ref={bottomRef} id="bottomRef" />
			</div>
		</div>
	);
}

export default App;
