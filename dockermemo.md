# 構築手順

- 参考サイト`https://qiita.com/2754github/items/413bdaaa90834e219dc8`

## Dockerfile 作成

## Docker-compose.yml 作成

## コンテナを作成

docker-compose.yml の内容に基づいてイメージを作成  
`docker-compose build`

### Docker コンテナの確認

`docker ps` 起動中のコンテナ一覧  
`dokcer ps -a` 全てのコンテナ一覧

### Docker コンテナでの作業

`docker exec -it コンテナ名 bash`

<!-- docker exec -it cc6d38999b8d /bin/bash -->

### React アプリの作成

<!-- `docker-compose run --rm node`
`npx create-react-app hello-world --template typescript` -->

<!-- - `docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample"` -->

<!-- - `docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample --template typescript"` -->

- `docker-compose run --rm node sh -c "npx create-react-app react-sample --template typescript"`
- `docker-compose run --rm node sh -c "npx create-react-app react-app-portfolio --template typescript"`

#### 既存コード用

- `docker-compose run --rm node sh -c "npm install -g create-react-app"`

- 参考ソースの場合は事前に`yarn add -D typesync`しておくこと

- この場合 CLI から`yarn`した後に`yarn start`する

## Docker コンテナの立ち上げ

`docker-compose up`

## トラブルシューティング

- hotreload が効かない `https://nakatanorihito.com/programming/docker-react-hot-reloading/`
