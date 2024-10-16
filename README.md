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

## 專案架構邏輯與規劃

### 目錄架構

主要的程式碼位於 `/src` 目錄中。

- `/apis`
  - 專案中需要呼叫的外部 API。
- `/components`
  - React components
  - 負責元件的畫面呈現與使用者交互的處理。
- `/pages`
  - 負責頁面渲染與 routing 相關邏輯的處理。
- `/hooks`
  - 負責專案需要使用到的狀態管理與狀態相關的功能邏輯。
- `/router_task`
  - React Router 所使用到的 Data API，
- `/styles`
  - styled-components 的樣式全域設定。

### 元件
盡量將應用的狀態與狀態相關的邏輯抽離，讓元件專注於畫面呈現與使用者交互的處理。

## 第三方 library 的使用及功能簡介

### dependencies：

- react
  - 實作使用者介面的 JavaScript 函式庫，為主流的前端使用者介面開發之一。不同於過去網頁前端以頁面為一個單元的開發，以宣告式的寫法定義資料 (狀態) ，呈現在畫面上，並處理使用者交互。
  - React 以一個 component 為單元，使得開發更利於模組化。
- react-router-dom
  - 前端路由的解決方案，此專案版本為 v6.26，使用 `createBrowserRouter` 及 `RouterProvider`，並用物件的方式定義路由，比起巢狀路由寫法更為簡潔。
  - 提供 Data API，可以處理發送請求及錯誤訊息。
- styled-components
  - React 生態圈中其中一種 CSS-in-JS 的解決方案，以 ES6 模板字串撰寫 CSS，跟 CSS Modules 一樣有獨立的 className，不用擔心 className 命名重複的問題，可以透過 props 動態改變元件樣式，方便對樣式進行擴展。
- react-hot-toast
  - 簡易輕量的 react notification UI 套件。

### devDependencies：

- eslint
  - 使用 eslint 做為 code style 的檢查工具。

## 註解原則

- 盡量以簡單易懂的命名去描述每個 function、元件及變數名稱，並以程式碼的編排、職責的切分等方式增加程式碼的可讀性，來取代撰寫註解；如果有比較複雜、違反直覺的程式碼邏輯，或是特殊的設定檔，才會特別加上註解特別說明。

## 專案中遇到的困難、問題，以及解決的方法，心路歷程

### 元件的排版架構

考量此專案的規模較小，就不考慮使用第三方 UI 套件，而是用 styled-components 自己建立元件樣式，不過有參考 Bootstrap container、row 跟 col 的樣式，來配置 RWD 排版。


### 使用 React Router 處理發送請求及錯誤處理

此專案使用到 React Router 的 loader 及 action 功能來處理發送請求及錯誤訊息，loader 函式會在元件渲染前取得需要的資料，action 函式則是處理更新能力值後提交的功能，大量簡化使用 useEffect Hook 的複雜度。

### index 路徑的跳轉

URL 路徑為 `/` 時想要顯示為 `/heroes` 路徑的頁面，在過去的經驗中很少有這樣的需求，所以直覺性的先新增一個 HomePage 元件作為路徑 `/` 渲染的檔案，以此為出發點去找出解決方法。
有找到 React Router 官方的 Github Discussions 有人在討論類似的解方，是在路徑 `/` 的 loader 函式裡做重新導向，不過經過嘗試後，該方法是失敗的，網頁會直接變完全空白。
反覆的去嘗試、了解其他方法之後，慢慢釐清發現多新增一個元件去渲染也是多此一舉，再去看了 React Router 的文件，找到 `<Navigate>` 元件，直接當作路徑 `/` 渲染的元素並導向 `/heroes`，成功解決問題。