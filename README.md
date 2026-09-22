# React-Router-BackNavigationApp

`useNavigate`を使って、ブラウザの履歴を1つ戻る「戻る」ボタンを実装するReact Routerの練習アプリです。

## 目次

* [概要](#概要)
* [学習目標](#学習目標)
* [課題内容](#課題内容)
* [ページ構成](#ページ構成)
* [プロジェクト構成](#プロジェクト構成)
* [画面遷移](#画面遷移)
* [実装のポイント](#実装のポイント)
* [インストール](#インストール)
* [起動](#起動)
* [使用技術](#使用技術)

## 概要

`useNavigate`を使用して、ブラウザの履歴を操作する練習を行います。

HomeページからAboutページへ移動し、Aboutページの「戻る」ボタンをクリックすると、ブラウザの履歴を1つ戻します。

## 学習目標

* `useNavigate`の使い方を理解する
* `navigate()`によるプログラムからのページ遷移を理解する
* `navigate(-1)`による履歴操作を理解する
* React Routerを使用したページ遷移を実装する

## 課題内容

以下のページを作成します。

* `/`：Homeページ
* `/about`：Aboutページ

HomeページからAboutページへ移動できるようにします。

Aboutページには「戻る」ボタンを配置し、クリックするとブラウザの履歴を1つ戻します。

### 条件

* `/` にHomeページを作成する
* `/about` にAboutページを作成する
* HomeからAboutへ移動できるようにする
* Aboutページに「戻る」ボタンを配置する
* 「戻る」をクリックすると1つ前のページへ戻る
* `navigate(-1)`を使用する

## ページ構成

| ページ   | URL      | 内容            |
| ----- | -------- | ------------- |
| Home  | `/`      | Aboutページへ移動する |
| About | `/about` | 1つ前のページへ戻る    |

## プロジェクト構成

```text
src/
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx
└── main.tsx
```

## 画面遷移

```text
Home (/)
   │
   │ Aboutへ移動
   ↓
About (/about)
   │
   │ 戻る
   ↓
Home (/)
```

## 実装のポイント

Aboutページで`useNavigate`を使用します。

```tsx
import { useNavigate } from "react-router";

const navigate = useNavigate();

const handleBack = () => {
  navigate(-1);
};
```

`navigate(-1)`を実行すると、ブラウザの履歴を1つ戻ることができます。

## インストール

```bash
npm install react-router
```

## 起動

```bash
npm run dev
```

## 使用技術

* React
* TypeScript
* React Router
* Vite
