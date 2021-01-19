# yarnmemo

## Prettier & ESLint をインストール

### Prettier のインストール

`yarn add -D prettier`

### ESLint をインストール

`yarn add -D eslint`  
`yarn add -D eslint-config-prettier`  
<!-- `yarn add -D eslint-plugin-prettier`非推奨になったぽいのでいらない -->
それぞれprettier と　eslint　を実行する

`cd react-sample`

## semantic-ui-react インストール

`yarn add semantic-ui-react`
App.tsx に追加`import { Button, Card, Statistic } from "semantic-ui-react";`

## semantic-ui-css インストール

`yarn add semantic-ui-css`  
index.tsx に追加 `import 'semantic-ui-css/semantic.min.css'`

### Hook

- state 変数 timeLeft, 更新関数 setTimeLeft を定義, timeLeft は useState を使って limit に初期化
  `const [timeLeft, setTimeLeft] = useState(limit);`

- useEffect の第 2 引数に依存配列を渡すと componentDidMount
- useEffect の第 2 引数に何も渡さないと componentDidUpdate
