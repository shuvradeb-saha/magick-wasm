module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': ['@typescript-eslint'],
    'extends': ['plugin:@typescript-eslint/recommended'],
    'overrides': [{
        'files': ['*.spec.ts'],
        'rules': {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off'
        }
    }]
};