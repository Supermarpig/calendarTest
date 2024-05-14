# 專案說明

這是一個使用react + vite + ts  開發的月曆組件專案，支持單日期選擇和範圍日期選擇功能。

## 資料夾結構

```bash
├── src
│ ├── assets
│ │ └── react.svg
│ ├── components
│ │ ├── calendar.base.tsx
│ │ ├── icons.tsx
│ │ ├── range-calendar-header.tsx
│ │ ├── range-calendar-item.tsx
│ │ ├── range-calendar-m.tsx
│ │ ├── range-calendar.tsx
│ │ ├── range.tsx
│ │ ├── single-calendar.tsx
│ │ └── single.tsx
│ ├── constants
│ │ └── constants.ts
│ ├── libs
│ │ └── cn.ts
│ ├── provider
│ │ └── config-provider.tsx
│ ├── types
│ │ └── types.ts
│ ├── utils
│ │ └── index.ts
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
```

## 組件說明

- **components**:
  - `calendar.base.tsx`: 基本月曆組件，包含核心邏輯和結構。
  - `icons.tsx`: 包含月曆中使用的圖標組件。
  - `range-calendar-header.tsx`: 範圍選擇月曆的頭部組件。
  - `range-calendar-item.tsx`: 範圍選擇月曆的單個項目（日期單元格）組件。
  - `range-calendar-m.tsx`: 範圍選擇月曆的子組件。
  - `range-calendar.tsx`: 範圍日期選擇月曆的主要組件。
  - `range.tsx`: 與範圍選擇相關的組件。
  - `single-calendar.tsx`: 單日期選擇月曆的主要組件。
  - `single.tsx`: 與單日期選擇相關的組件。
- **constants/constants.ts**: 存放專案中使用的常量值。
- **libs/cn.ts**: 用於動態設置 CSS 類名的工具函數。
- **provider/config-provider.tsx**: 配置提供者組件，負責提供配置和上下文。
- **types/types.ts**: TypeScript 類型和接口定義。
- **utils/index.ts**: 提供通用輔助函數的工具文件。

## 入口文件

- **App.tsx**: 主應用組件，負責組裝和渲染其他組件。
- **index.css**: 主樣式表，定義全局樣式。
- **main.tsx**: 應用的主入口文件，負責將 React 組件掛載到 DOM。

## 安裝步驟

1. clone此倉庫：

    ```bash
    git clone https://github.com/Supermarpig/calendarTest.git
    ```

2. 進入專案目錄：

    ```bash
    cd calendarTest
    ```

3. 安裝依賴：

安裝 NodeJS, 確認版本 `20.10.0`
下載 pnpm
pnpm 官網:<https://pnpm.io/zh-TW/installation#%E4%BD%BF%E7%94%A8-npm-%E4%BE%86%E5%AE%89%E8%A3%9D>

```bash
npm install -g pnpm

pnpm i
```

## 使用方法

啟動專案：

```bash
pnpm dev
```
