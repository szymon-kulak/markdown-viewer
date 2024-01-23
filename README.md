# Markdown Viewer

A simple app I created to make learning Markdown easier.

For those unfamiliar, **Markdown** is a markup language used by [Github](https://github.com/), [Obsidian](https://obsidian.md/), [Discord](https://discord.com/) and many other projects to deliver a consistent text editing experience. It is free and open source, making it ideal for any project.

### Visual Design

I focused on making this app as aesthetically pleasing as possible, designing it with a mobile-first approach, while including a more spacious layout on the desktop:

```scss
@media (min-width: 800px) {
	.App {
		flex-direction: row;
	}
	#editor {
		width: 40dvw;
		height: 90dvh;
		margin: auto;
	}
	#preview {
		width: 55dvw;
		height: 100dvh;
	}
}
```

I also made sure that the app is _actually_ usable on mobile by including a query that disables the preview when using a touchscreen keyboard:

```scss
/* Hide preview when a touchscreen keyboard doesn't leave enough space */
@media (max-height: 400px) and (max-width: 800px) {
	#preview {
		display: none;
	}
	#editor {
		height: 100dvh;
	}
}
```

As with all my apps, I made it easily customisable by including SCSS variables for every colour used throughout the app:

```scss
$body-color: #282c34;
$text-color: #fff8f0;
$preview-color: #15171b;
$block-background: #aaaaaa18;
$code-text: #ff9000;
$heading-color: #6bab90;
$emphasis-color: #ab2346;
$link-color: #6610f2;

#editor {
	font-family: monospace;
	background-color: $body-color;
	color: $text-color;
	text-align: left;
	width: 100dvw;
	height: 40dvh;
	padding: 20px;
	resize: none;
	border: 1px solid $text-color;
	outline: none;
}
```

The colour palette used in the app was created by me to maximise readability and I dare say I'm extremely proud of it, might create a VSCode theme with those colours... 🤔

### Logic

The app logic was made absolutely trivial thanks to the fine folks who created [Marked](https://github.com/markedjs/marked), a library making it trivial to create markdown previews using JavaScript, so the app is dead simple:

#### State

The app uses React, so synchronising the text between the editor and preview is handled by React's state:

```jsx
const [text, editText] = useState(defaultText);

const textAreaHandler = function (e) {
	editText(e.target.value);
};

<textarea id="editor" value={text} onChange={textAreaHandler} />;
```

Then, said text is parsed by **Marked**:

```jsx
<div
	id="preview"
	dangerouslySetInnerHTML={{
		__html: marked(text),
	}}
/>
```

I also customised **Marked** to interpret new lines as HTML `<br/>` tags.

```jsx
marked.setOptions({
	breaks: true,
});
```

---

And that's about it!

I hope I have been sufficiently clear in my explanations. This app is freely available to use and customise as you see fit.

If you spotted any errors in the app or the documentation, and/or want to make me a job offer, feel free to reach out at szymon.kulak@proton.me.
