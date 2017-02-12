# react-dicision-tree [![Travis][build-badge]][build] [![Codecov][codecov-badge]][codecov]
react dicision tree component.

## features
- only webpack, no gulp/grunt etc
- write es6/es7 code.
- dist minified/unmimified umd and source map
- test with karma-webpack
- code coverage
- live reload to code change(by webpack)
- proper comment header for distribution
- with ci, codecov badge( read `.travis.yml`)
- proper npm commands

## get/dev
```bash
git clone git@github.com:zxdong262/react-dicision-tree.git
cd react-dicision-tree

# deps install
npm i
npm i react react-dom

# start dev
npm start
# then edit src/*.jsx to see changes

# build (auto rebuild when code change)
npm run build

# test and create code coverage
npm run test

```

## License
MIT

[build-badge]: https://img.shields.io/travis/zxdong262/react-dicision-tree/master.svg?style=flat-square
[build]: https://travis-ci.org/zxdong262/react-dicision-tree
[codecov-badge]: https://img.shields.io/codecov/c/github/zxdong262/react-dicision-tree/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/zxdong262/react-dicision-tree