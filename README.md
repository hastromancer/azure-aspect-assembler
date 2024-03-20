# Azure Aspect Assembler

A lightweight library for assembling modular components of web applications, enabling a cleaner and more maintainable codebase.

## Features

- Register and manage components dynamically.
- Built-in event system for component lifecycle management.
- Fetch data with integrated Axios support.
- Environmental variable support with Dotenv.

## Installation

```bash
npm install azure-aspect-assembler
```

## Usage

```javascript
import AspectAssembler from 'azure-aspect-assembler';

const assembler = new AspectAssembler();

// Register a component
const componentId = assembler.registerComponent('exampleComponent', { /* component definition */ });

// Fetch data
assembler.fetchData('https://api.example.com/data')
.then(data => console.log(data))
.catch(error => console.error(error));

// Listen for events
assembler.on('componentRegistered', (event) => console.log(`Component registered: \${event.name}`));
assembler.on('dataFetched', (data) => console.log('Data fetched:', data));
assembler.on('fetchError', (error) => console.error('Fetch error:', error));
```

## License

MIT
