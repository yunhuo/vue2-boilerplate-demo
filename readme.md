# vue2-boilerplate-demo

vue2 脚手架。

# content

- vue2
- vuex2
- vue-router2
- webpack
    - CleanPlugin
    - HtmlWebpackPlugin
    - UglifyJsPlugin
    - DashboardPlugin
- babel
    - latest + vue-jsx 支持
    - promise 支持
    - async 支持
- fetch

# uasge

```
npm i
```

```
npm run dev         //webpack-dashboard -- webpack-dev-server --inline --hot --no-info --history-api-fallback --port 8081
```

```
npm run build       //NODE_ENV=production webpack --display-modules --sort-modules-by size
```

```
npm run analyze     //NODE_ENV=production webpack --profile --json > stats.json
```