/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    root: true,
    settings: {
        react: {
            version: 'detect',
        },
    },
}
