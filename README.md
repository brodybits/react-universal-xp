# react-universal-xp

Universal interface to [`react-native-web`](https://www.npmjs.com/package/react-native-web) and
[`react-native`](https://www.npmjs.com/package/react-native)

This is an alternative solution to using [`react-primitives`](https://www.npmjs.com/package/react-primitives). There should
be no issues with using `react-universal-xp` components together with
[`react-primitives`](https://www.npmjs.com/package/react-primitives) components.

**LICENSE:** [MIT LICENSE](./LICENSE)

## Usage

**Sample:**

```jsx
/** @jsx h */
import { createElement as h } from 'react'

import { Text, View } from 'react-universal-xp'

const headerBackgroundStyle = {backgroundColor: 'blue'}

const headerTextStyle = {color: 'gold', fontSize: 48}

function App() {
  return (
    <View style={headerBackgroundStyle}>
      <View>
        <Text style={headerTextStyle}>
          ☆☆ ☆☆☆ ☆☆
        </Text>
      </View>
      <View>
        <Text style={headerTextStyle}>
          ☆ Demo app ☆
        </Text>
      </View>
    </View>
  )
}

export default App
```

## How it works

This module imports from [`react-native-web`](https://www.npmjs.com/package/react-native-web) if either of the following is true:

- existence of a Truthy `global.document` object
- the [`is-node`](https://www.npmjs.com/package/is-node) package indicates that the process is running in Node.js (as needed to work on a Razzle web server)

Otherwise, this module imports from [`react-native`](https://www.npmjs.com/package/react-native).

Here is the entire implementation in [`index.js`](./index.js), as an ES5 module:

```js
/** detects if this is in a browser or Node.js web server */
var isWeb = (!!global.document || require('is-node'))

var universalExports = isWeb
  ? require('react-native-web')
  : require('react-native')

module.exports = universalExports
```

## Major TODO items

- [ ] some form of automatic testing
- [ ] test with [`faceyspacey/react-universal-component`](https://github.com/faceyspacey/react-universal-component)
- [ ] document usage on a Razzle web server

## References

- <https://facebook.github.io/react-native/docs/components-and-apis.html>
- <https://hackernoon.com/up-and-running-with-universal-components-66678132cad>
- <https://labs.mlssoccer.com/the-road-to-universal-components-at-major-league-soccer-eeb7aac27e6c>
- <https://medium.com/styled-components/announcing-primitives-support-for-truly-universal-component-systems-5772c7d14bc7>
- <https://labs.mlssoccer.com/react-native-storybook-%EF%B8%8F-f22fa8676333> - interesting counterpoint
- <https://github.com/necolas/react-native-web/issues/1146#issuecomment-484144646> - original inspiration behind the implementation

## License

[MIT LICENSE](./LICENSE)
