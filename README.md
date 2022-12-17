# Xerum
Xerum is a component library, mean for use in React 16.8+ applications.

**Note**: This library is undergoing a major rewrite using styled-components.  Components are missing as a result and will be added back, as they are refactored.  It is not recommended to install until v1.0 has been published.

### Installation
`npm i xerum` or `yarn add xerum`

### Using components
import with: `import { Button } from 'xerum;'` and in your current component,
use the imported component with props from the documentation (https://xerum.netlify.app):

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'xerum';

const MyComponent = () => {
  const navigate = useNavigate();
  const handleRouteChange = () => navigate('/different-route');

  return (
    <div>
      <Button
        text='Click me!' // Overrides children
        btnType='ghost' // 'transparent' or default's to 'solid'
        icon='fa-solid fa-pencil' // Fontawesome integration
        callback={handleRouteChange} // For internal functions after click listener executes.
        // url='google.com' // External navigation only.
        // passthrough={true} // Forces event bubbling when embedded under existing events.
      >
        Alternate text {/* Renders if no text prop, ignored if there is. */}
      </Button>
    </div>
  );
}
```