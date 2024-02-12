# React Markdown Viewer

A readability-focused Markdown Previewer written in React.

## 🤔 Why does this exist?

I absolutely love **Markdown**.

For those unfamiliar, **Markdown** is a free and open source markup language used by [Github](https://github.com/), [Obsidian](https://obsidian.md/), [Discord](https://discord.com/) and many other projects to deliver a consistent text editing experience.

However, as a person with ADHD, I struggle reading long documents without colours and differing font sizes to guide my attention. Editing Markdown using tools like _GitHub_ and _VSCode_ simply doesn't cut it for me.

I decided to create a Web App that parses Markdown syntax and returns a clean, visually distinct document that's incredibly easy to read for people with brains like mine.

## 🚀 Quick Start

The app is available at [szymon-kulak.github.io/markdown-viewer/](https://szymon-kulak.github.io/markdown-viewer/).

If you find that you enjoy using the app, a much easier way to access it is installing it as a **Progressive Web App**.

#### 💻 Windows/Linux/Mac

1. On your computer, open Chrome
2. [Open the App](https://szymon-kulak.github.io/markdown-viewer/)
3. At the top right of the address bar, click Install
4. Follow the onscreen instructions to install the PWA

#### 📱 Android

1. On your Android device, open Chrome
2. Navigate to [szymon-kulak.github.io/markdown-viewer/](https://szymon-kulak.github.io/markdown-viewer/)
3. Tap Install
4. Follow the on-screen instructions

#### 🍏 iOS/iPadOS

1. On your iPhone or iPad, open Chrome
2. Navigate to [szymon-kulak.github.io/markdown-viewer/](https://szymon-kulak.github.io/markdown-viewer/)
3. At the top right of the address bar, tap Share
4. Find and tap Add to Home Screen
5. Tap Add

## 🏃‍♂️ Usage

The app consists of two panels, the editor and the preview.

On mobile, the editor is located below the preview while on the web it is to the left.

Simply type **Markdown** in the editor panel and watch it appear transformed in the preview panel.

```md
Common Markdown Elements

# Heading

## Smaller Heading

###### Smallest Heading Possible

--- (horizontal line)
**Bold Text**
_Italic Text_
[Link](https://www.google.com/)
`code`
```

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Visual Design

I focused on making this app as aesthetically pleasing as possible, designing it with a mobile-first approach, while including a more spacious layout on the desktop.

The colour palette used in the app was created by me to maximise readability and I dare say I'm extremely proud of it, might create a VSCode theme with those colours... 🤔

```scss
$body-color: #282c34;
$text-color: #fff8f0;
$preview-color: #15171b;
$block-background: #aaaaaa18;
$code-text: #ff9000;
$heading-color: #6bab90;
$emphasis-color: #ab2346;
$link-color: #6610f2;
```

If you spotted any errors in the app or the documentation, and/or want to make me a job offer, feel free to reach out at szymon.kulak@proton.me.
