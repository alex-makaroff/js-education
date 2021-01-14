module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },

    env: {
        browser: true,
        es6: true,
        node: true
    },

    // Rules order is important, please avoid shuffling them
    extends: [
        // Base ESLint recommended rules
        // 'eslint:recommended',

        // Uncomment any of the lines below to choose desired strictness,
        // but leave only one uncommented!
        // See https://eslint.vuejs.org/rules/#available-rules
        'plugin:vue/essential', // Priority A: Essential (Error Prevention)
        // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
        // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        'airbnb-base'

    ],

    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        'vue'

    ],

    globals: {
        ga: true, // Google Analytics
        cordova: true,
        __statics: true,
        process: true,
        Capacitor: true,
        chrome: true
    },

    // add your custom rules here
    rules: {
        'no-param-reassign': 'off',
        'space-before-function-paren': ['error', 'always'],
        'no-plusplus': 'off',
        'comma-dangle': ['warn', 'never'],
        'consistent-return': 'off',
        'max-len': ['warn', 200],
        indent: ['error', 4, {
            SwitchCase: 1,
            ignoredNodes: ['TemplateLiteral', 'MemberExpression']
        }],
        'template-curly-spacing': ['off'],
        'no-console': 'warn', // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'global-require': 'off',
        'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': ['error', { consistent: true }],
        'prefer-destructuring': ['error', {
            object: true,
            array: false
        }],
        'prefer-object-spread': 'error',

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-restricted-syntax': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/comment-directive': ['off', { reportUnusedDisableDirectives: false }]
    }
};
