module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: 'standard',
    parserOptions: {
        ecmaVersion: 11
    },
    rules: {
        indent: [
            'error',
            4
        ],
        'brace-style': [
            'error',
            'stroustrup'
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'never'
        ],
        'no-unused-vars': [
            'error',
            { varsIgnorePattern: '^task' }
        ]
    }
}
