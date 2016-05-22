# unlogify
logger for Frontend. `unlogify` will disable logs in production.

## Install

```
$ npm i unlogify -S
```

## How To

`Unlogify` is just a log wrapper.

```js
const log = require('unlogify')();

log("hogehoge");
// => hogehoge
```

In Webpack build (or Other build system), set `NODE_ENV=production` for production build.

```js
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
```

If `NODE_ENV=production` is set, `unlogify` will disable logs.

```js
const log = require('unlogify')();

log("hogehoge");
// => Nothing to show
```

## Lisence
MIT