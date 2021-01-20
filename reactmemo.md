# yarnmemo

## Prettier & ESLint をインストール

### Prettier のインストール

`yarn add -D prettier`

### ESLint をインストール

`yarn add -D eslint`  
`yarn add -D eslint-config-prettier`

<!-- `yarn add -D eslint-plugin-prettier`非推奨になったぽいのでいらない -->

それぞれ prettier と　 eslint 　を実行する

`cd react-sample`

## ESLint 初期化

node ➜ /workspaces/portfolio/react-app-portfolio (main) $ eslint --init  
✔ How would you like to use ESLint? · style  
✔ What type of modules does your project use? · esm  
✔ Which framework does your project use? · react  
✔ Does your project use TypeScript? · No / Yes  
✔ Where does your code run? · browser  
✔ How would you like to define a style for your project? · guide  
✔ Which style guide do you want to follow? · airbnb  
✔ What format do you want your config file to be in? · JavaScript  
Checking peerDependencies of eslint-config-airbnb@latest  
Local ESLint installation not found.  
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
? Would you like to install them now with npm? ‣ No / Yes

NO で答えたものを事前に個別インストールしておく

`yarn add -D @typescript-eslint/parser`
`yarn add -D @typescript-eslint/eslint-plugin`
`yarn add -D eslint-plugin-react`
`yarn add -D eslint-plugin-react-hooks`
`yarn add -D eslint-plugin-import`
`yarn add -D eslint-plugin-jsx-a11y`
`yarn add -D eslint-config-airbnb`

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
