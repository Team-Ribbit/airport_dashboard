// config Jest
module.exports = {
  testEnvironment: 'jsdom',
  reporters: [
    "default",
    [
      "jest-junit",
      {
        "outputDirectory": "<rootDir>/junit-reports",
        "uniqueOutputName": "false",
        "suiteName": "React tests",
        "outputName": "template-react.xml",
        "addFileAttribute": "true",
        "reportTestSuiteErrors": "true",
        "includeConsoleOutput": "false",
        "classNameTemplate": "{classname}",
        "titleTemplate": "{title}",
        "ancestorSeparator": " > "
      }
    ]
  ]

};
