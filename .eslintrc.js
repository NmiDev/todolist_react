module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "no-console": "off",
    "jsx-a11y/click-events-have-key-events": "off", // Handle event with keyboard alternative
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }], // Allowed .js extension for files with JSX
    "react/jsx-one-expression-per-line": "off", // Allowed multi JSX expressions per line
  },
  "settings": {
    "import/resolver": "webpack"
  }
};
