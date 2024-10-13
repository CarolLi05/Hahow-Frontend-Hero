# Hahow Frontend Hero

Hahow Frontend Hero 為 Hahow Frontend Engineer 徵才題目
- 題目連結：https://github.com/hahow/hahow-recruit/blob/master/frontend.md
- Demo 連結：https://hahow-frontend-hero.firebaseapp.com/heroes

## 執行專案

本專案使用 [Vite](https://github.com/vitejs/vite) 來建置 React 開發環境。

Clone 專案後，到資料夾根目錄執行以下步驟：

  1. 安裝 npm 套件

  ```shell
  npm install
  ```

  2. 運行開發模式

  ```shell
  npm run dev
  ```

## 專案的資料夾架構、Application 的邏輯架構，說明你的設計理念
```
folder tree
```

## 第三方 library 的使用及功能簡介

### dependencies：

- react
  - 當前主流的前端開發框架之一，
- react-router-dom
  - 前端路由的解決方案，此專案版本為 v6.26，使用 `createBrowserRouter` 及 `RouterProvider`，並用物件的方式定義路由，比起巢狀的路由寫法更為簡潔。
- styled-components
  - React 生態圈中其中一種 CSS-in-JS 的解決方案，以 ES6 模板字串撰寫 CSS，跟 CSS Modules 一樣有獨立的 className，不用擔心 className 命名重複的問題，可以透過 props 動態改變元件樣式，也可以方便對元件樣式進行擴展。

### devDependencies：

- eslint
  - 使用 eslint 做為 code style 的檢查工具。

## 註解原則

- 盡量以簡單易懂的命名去描述每個 function、元件及變數名稱，並以程式碼的編排、職責的切分等方式增加程式碼的可讀性，來取代撰寫註解；如果有比較複雜的程式碼邏輯或是特殊的設定檔，才會特別加上註解。

## 專案中遇到的困難、問題，以及解決的方法，心路歷程

### 元件的排版架構

考量此專案的規模較小，就不考慮使用第三方 UI 套件，而是用 styled-components 自己建立元件樣式，不過有參考 Bootstrap container、row 跟 col 的樣式，來配置 RWD 排版。


### 使用 React Router 處理發送請求及錯誤處理

此專案使用到 React Router 的 loader 及 action 功能來處理發送請求及錯誤訊息，loader 函式會在元件渲染前取得需要的資料，action 函式則是處理更新能力值後提交的功能，大量簡化使用 useEffect Hook 的複雜度。

### 首頁的跳轉

URL 路徑為 `/` 時想要顯示為 `/heroes` 路徑的頁面，先新增一個 HomePage 元件作為路徑 `/` 渲染的檔案，找到 React Router 官方的 Github Discussions 有人在討論類似的解方，是在路徑 `/` 的 loader 函式裡做重新導向，不過嘗試該方法後是失敗的，網頁會直接變完全空白。
思考過後發現多新增一個元件去渲染也是多此一舉，去看了 React Router 的文件後，找到 `<Navigate>` 元件，直接當作路徑 `/` 渲染的元素並導向 `/heroes`，成功解決問題。