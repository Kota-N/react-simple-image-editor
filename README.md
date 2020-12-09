# react-simple-image-editor

![sample1](https://kota-n.github.io/readme-images-react-image-editor/sample1.jpg)

react-simple-image-editor is a simple image editor component for React.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-simple-image-editor.

```bash
npm install react-simple-image-editor
```

## Usage

```javascript
import SimpleEditor from 'react-simple-image-editor';

const MyLegendaryComponent = () => (
  <SimpleEditor
    editorUI={{
      theme: 'blue',
      image: 'your image path',
    }}
  />
);
```

Image path can be an image URL or an imported image file.

`Example using an imported image file:`

```javascript
import SimpleEditor from 'react-simple-image-editor';
import testImage from './relative/path/test-image.jpg/';

const MyLegendaryComponent = () => (
  <SimpleEditor
    editorUI={{
      theme: 'blue',
      image: testImage,
    }}
  />
);
```

![sample2](https://kota-n.github.io/readme-images-react-image-editor/sample2.jpg)

## Themes

Currently available themes: 'default' 'red' 'green' 'blue' 'yellow'

![sample3](https://kota-n.github.io/readme-images-react-image-editor/sample3.jpg)
