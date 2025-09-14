# Slimy Tiger Loader Integration

This document explains how to use the Uiverse.io "Slimy Tiger" loader by Nawsome in your React portfolio project.

## Components Created

### 1. LoadingSpinner.jsx
The core loader component that renders the animated squares.

**Props:**
- `className` (optional): Additional CSS classes to apply

**Usage:**
```jsx
import LoadingSpinner from './Components/Small Components/LoadingSpinner';

<LoadingSpinner />
<LoadingSpinner className="my-custom-class" />
```

### 2. PageLoader.jsx
A full-screen loader overlay component for page transitions.

**Props:**
- `isVisible` (boolean): Controls visibility of the loader
- `message` (string, optional): Text to display below the loader

**Usage:**
```jsx
import PageLoader from './Components/Small Components/PageLoader';

const [loading, setLoading] = useState(true);

<PageLoader isVisible={loading} message="Loading your portfolio..." />
```

### 3. LoaderDemo.jsx
A demo page showcasing both loader variants with examples.

## Files Structure

```
src/
└── Components/
    └── Small Components/
        ├── LoadingSpinner.jsx    # Core loader component
        ├── LoadingSpinner.css    # Original Uiverse.io CSS styles
        ├── PageLoader.jsx        # Full-screen loader wrapper
        └── LoaderDemo.jsx        # Demo page
```

## How to Access

Navigate to `/loader` in your development server to see the demo:
- http://localhost:5173/loader (or your dev server URL)

## Integration Examples

### 1. Page Loading State
```jsx
import { useState, useEffect } from 'react';
import PageLoader from './Components/Small Components/PageLoader';

function MyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call or data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <PageLoader isVisible={loading} message="Loading page..." />
      {!loading && (
        <div>Your page content here</div>
      )}
    </>
  );
}
```

### 2. Inline Loading State
```jsx
import LoadingSpinner from './Components/Small Components/LoadingSpinner';

function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // API call
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Submit'}
      </button>
    </div>
  );
}
```

## Customization

The loader uses CSS custom properties (variables) for easy customization:

```css
.loadingspinner {
  --square: 26px;           /* Size of each square */
  --offset: 30px;           /* Spacing between squares */
  --duration: 2.4s;         /* Animation duration */
  --delay: 0.2s;            /* Animation delay */
}
```

To customize colors, modify the `background` property in `LoadingSpinner.css`:
```css
.loadingspinner div {
  background: darkorange;   /* Change this to your preferred color */
}
```

## License

This loader is from Uiverse.io by Nawsome and is licensed under the MIT License.

## Credits

- Original creator: [Nawsome](https://uiverse.io/Nawsome/slimy-tiger-93)
- Source: [Uiverse.io](https://uiverse.io)