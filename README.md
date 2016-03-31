2016-hackathon-chatapp
====

チャットアプリのソースコード

## アプリの起動

1. 次のコマンドを実行します

    ```bash
# アプリのディレクトリに移動
cd ~/hackathon/chatapp
# アプリの開発で使用するライブラリをインストール（初回のみ）
npm install
# 起動コマンドを実行
npm start
    ```

2. `http://サーバのIPアドレス:ポート番号/` にブラウザでアクセスします

    例：`http://127.0.0.1:3000/`

## 機能

### 基本要件

#### ログイン画面

* ログイン画面からユーザ名を入力して「入室する」ボタンでチャット画面に遷移する
    * ユーザ名が未入力で「入室する」が押されたらエラーダイアログを表示する

#### チャット画面

* ログイン画面で入力されたユーザ名に「さん」を加えて表示する
    * 入力：山田太郎
    * 表示：ログインユーザ：山田太郎さん
* 「投稿」ボタンでメッセージを投稿する
    * 投稿されたメッセージは自分を含め、すべてのクライアントに投稿者名とともに表示される
    * 例） ○○○○さん：（投稿文）
* 「メモ」ボタンでメモを投稿する
    * 投稿されたメモは自分にだけ表示される
    * 例） ○○○○さんのメモ：（投稿文）
* 投稿は新しい順に表示される
* ユーザの入退室時に自分を除いた他のクライアントに入退室のメッセージが表示される
    * 入室の例） ○○○○さんが入室しました
    * 退室の例） ○○○○さんが退室しました

### 追加要件

※追加実装した機能を追記してください

* ...
* ...
* ...