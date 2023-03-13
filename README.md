# React Components by Alexprr

This repository was created to validate OpenClassrooms 14th project.

## Getting Started

Install this package:

```shell
npm add alex-custom-modal
```

Import the Modal component:

```js
import { Modal } from "alex-custom-modal";
```

Example :

This is a example of the `Modal` component implementation.

The `Modal` component can be rendered like any other React component in JSX.

```js
const ModalContainer = ({ onClose }) => {
	return <Modal onClose={onClose} link="target" />;
};
```

The `Modal` component needs two props : `onClose` and `link`.

The `onClose` prop is a callback function that is called when you click on the close icon
The `link` prop is a string value that fills the `href` attribute of the <a> tag inside the `Modal`. This is used for redirection.
