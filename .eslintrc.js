module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  rules: {
    'react/prop-types': 'off', //react안에서 타입검사 off
    'no-extra-semi': 'error', // 확장자로 js와 jsx 둘다 허용하도록 수정
    'react/jsx-filename-extension': [
      // js에서 JSX 문법 사용 허용
      1,
      {
        extensions: ['js', 'jsx'],
      },
    ],
    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수 인수에 괄호가 필요함(필요 없는 경우 생략 -> 인수가 하나인 경우)
    'no-unused-vars': 'warn', // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //콘솔로그가 있으면 프로덕션 배포시 경고
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off', //디버거가 있으면 프로덕션 배포시 경고
    'import/prefer-default-export': ['off'], // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': ['warn'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/jsx-props-no-spreading': [
      // props spreading을 허용하지 않는 규칙 해제
      1,
      {
        custom: 'ignore',
      },
    ],
    'react/jsx-key': 'warn', //JSX 반복문에서 key 없을 시 에러
    'react/react-in-jsx-scope': 'off', // import 'React from 'react' 없으면 나는 경고 삭제
    'react/no-unescaped-entities': 'off',
    'no-var': 'error', //var 키워드 사용시 에러
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': 'off', //타입스크립트에서 JSX를 허용하지 않음 마이그레이션시 지울 것!
  },
};
