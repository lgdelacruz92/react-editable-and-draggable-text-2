# React Editable Text

> This library is built as a complement to DNS Container. A library that allows you to add images and drag and scale content

[![NPM](https://img.shields.io/npm/v/image-drag-and-scale.svg)](https://www.npmjs.com/package/image-drag-and-scale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![](https://media.giphy.com/media/VDHZr9ubhTmOPDHT4p/giphy.gif)](https://media.giphy.com/media/VDHZr9ubhTmOPDHT4p/giphy.gif)

## Install

```bash
npm install --save react-editable-text

# or
yarn add react-editable-text

# peer dependencies (install these separately)
# "@material-ui/core": "^4.6.1"
# "clsx": "^1.0.4",
# "image-drag-and-scale": "^1.1.5-beta.0"
```

## Usage

```jsx
import React from "react";
import "./App.css";
import Text from "./Text/text";

function App() {
  let texts = { id: "unique-1" };
  const textRef = React.useRef();

  return (
    <div className="App">
      <Text textData={texts} onUpdate={() => {}} ref={textRef} />
    </div>
  );
}

export default App;
```

# Version Update

## v1.0.0

> First release. If you find issues, please post an issue on the github

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
