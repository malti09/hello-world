{
  "extends": "tslint:recommended",
  "rules": {
    "align": {
      "options": [
        "parameters",
        "statements"
      ]
    },
    "array-type": false,
    "arrow-return-shorthand": true,
    "curly": true,
    "deprecation": {
      "severity": "warning"
    },
    "component-class-suffix": true,
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "eofline": true,
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "import-spacing": true,
    "indent": {
      "options": [
        "spaces"
      ]
    },
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      140
    ],
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "quotemark": [
      true,
      "single"
    ],
    "semicolon": {
      "options": [
        "always"
      ]
    },
    "space-before-function-paren": {
      "options": {
        "anonymous": "never",
        "asyncArrow": "always",
        "constructor": "never",
        "method": "never",
        "named": "never"
      }
    },
    "typedef-whitespace": {
      "options": [
        {
          "call-signature": "nospace",
          "index-signature": "nospace",
          "parameter": "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        },
        {
          "call-signature": "onespace",
          "index-signature": "onespace",
          "parameter": "onespace",
          "property-declaration": "onespace",
          "variable-declaration": "onespace"
        }
      ]
    },
    "variable-name": {
      "options": [
        "ban-keywords",
        "check-format",
        "allow-pascal-case"
      ]
    },
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type",
        "check-typecast"
      ]
    },
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true
  },
  "rulesDirectory": [
    "codelyzer"
  ]
}
