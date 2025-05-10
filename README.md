# QRFIQ File Explorer Implementation Guide

This guide provides step-by-step instructions for implementing a file explorer with table and grid view toggling and sorting functionality.

## Project Structure

```
qrfiq-file-explorer/
├── src/
│   ├── App.jsx             # Main application component
│   ├── AppContext.jsx      # Context for state management
│   ├── Header.jsx          # Header with search, sort, and view toggle
│   ├── FileTable.jsx       # Table view component
│   ├── GridView.jsx        # Grid view component
│   ├── FileExplorer.jsx    # Main file explorer component
│   ├── data.js             # Sample file data
│   ├── index.js            # Entry point
│   └── index.css           # Global styles with Tailwind directives
├── package.json            # Project dependencies
└── tailwind.config.js      # Tailwind CSS configuration
```

## Step 1: Install Dependencies

```bash
npm create react-app qrfiq-file-explorer
cd qrfiq-file-explorer
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 2: Set Up Tailwind CSS

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step 3: Implementation

### Create AppContext.jsx
This provides state management for the view mode and sorting options.

### Create data.js 
This contains the sample file data used in the application.

### Create Header.jsx
This contains the search bar, sorting dropdown, and view mode toggle button.

### Create FileTable.jsx
This displays files in a tabular format.

### Create GridView.jsx
This displays files in a grid layout with cards.

### Create FileExplorer.jsx
This is the main component that brings everything together, handling sorting logic and view toggling.

### Create App.jsx
This wraps the FileExplorer with the AppContext provider.

### Update index.js
This renders the App component to the DOM.

## Step 4: Key Implementation Details

### View Mode Toggling
The toggle functionality is implemented in the AppContext:

```javascript
const toggleViewMode = () => {
  setViewMode((prev) => (prev === "table" ? "grid" : "table"));
};
```

The Header component provides a button that calls this function:

```jsx
<button onClick={toggleViewMode}>
  {viewMode === "table" ? "Grid View" : "Table View"}
</button>
```

The FileExplorer component conditionally renders either the FileTable or GridView:

```jsx
{viewMode === "table" ? (
  <FileTable files={files} />
) : (
  <GridView files={files} />
)}
```

### Sorting Functionality
The sorting dropdown is implemented in the Header component:

```jsx
<select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
>
  <option value="name">Sort by Name</option>
  <option value="edited">Recently Edited</option>
  <option value="created">Date Created</option>
</select>
```

The FileExplorer component handles the sorting logic:

```javascript
useEffect(() => {
  const sortedFiles = [...filesData];
  
  switch (sortOption) {
    case "name":
      sortedFiles.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "edited":
      sortedFiles.sort((a, b) => {
        const dateA = new Date(a.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
        const dateB = new Date(b.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
        return dateB - dateA;
      });
      break;
    case "created":
      sortedFiles.sort((a, b) => {
        const dateA = new Date(a.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
        const dateB = new Date(b.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
        return dateB - dateA;
      });
      break;
    default:
      break;
  }
  
  setFiles(sortedFiles);
}, [sortOption]);
```

## Running the Application

To start the application, run:

```bash
npm run dev
```

This will launch the application on [http://localhost:3000]( http://localhost:5173/)
