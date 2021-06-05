# okayama.open-seminar.org

[![CircleCI](https://circleci.com/gh/osokayama/osokayama.github.io/tree/ci.svg?style=svg)](https://circleci.com/gh/osokayama/osokayama.github.io/tree/ci)

## ローカルでの確認方法

```
$ npm run dev
```

http://localhost:3000/ で確認ができます。

## ファイルの生成

```
$ npm run generate
```

### 初めて使う場合(依存ライブラリのインストール)

nodejsをインストール後

```
$ npm install
```

## 過去の開催年向けページビルド

### `.env` の設定変更

```
BASE_DIR=/2020
```

※開催年に変更

### 過去の開催実績ページをコメントアウト

`/data/header_data.js`

```
export default {
  menus: [
    { text: 'テーマに込める思い', url: 'theme.html' },
    { text: 'よくあるご質問', url: 'faq.html' },
    { text: 'タイムテーブル', url: 'timetable.html' },
    { text: '実行委員会', url: 'staff.html' },
    { text: 'スポンサー', url: 'sponsor.html' },
    // { text: '過去の開催実績', url: 'past.html' }
  ]
}
```

### 静的ページビルド&配置

```
$ npm run generate
```

生成された `dist` 以下のファイルを `static/開催年` ディレクトリにコピー

### 過去の開催実績ページ修正

`/data/past_data.js` に該当年のデータを追加

```
export default {
  histories: [
    {
      year: 2020,
      theme: '【エンジニアリング x ○○】（えんじにありんぐ かける なんか）',
      image: '../2020/images/top.jpg'
    },
...
    {
      year: 2008
    }
  ]
}
```

※作業終了後に `.env` `/data/header_data.js` は元に戻すこと