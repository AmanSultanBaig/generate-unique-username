# Introduction

Javascript library to generate you unique username provide by your name

## Parameter

You shoult pass the required parameter to the function to generate username, 
otherwise it will give you an error

```javascript
generateUsername(name: String: required)
```

# Installation

`npm install generate-username`

# Usage

```javascript
const generateUsername = require("generate-username");

console.log(generateUsername("Aman Sultan Baig"));
```

### Expected Output

```javascript
amansultanbaig_1297
```
