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
    - async/await 支持
- fetch

Wow such a small vue2-kit!

![6cef4239-5a34-49a2-9342-a6e55821d67b](https://cloud.githubusercontent.com/assets/6868950/19335694/d725ccbc-9137-11e6-93a5-3456939f307a.png)

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
