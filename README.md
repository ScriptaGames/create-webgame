Generate a web game project.

To create a new web game project, all you need is npm:

```
npm init webgame
```

## Loading all types of files

webpack's [loader][wp-load] system is used to import files into your game.  Your game will come with loaders for a few filetypes by default, such as images, fonts, and CSS.

If you need to load other types of files during the build, see [awesome-webpack][awesome-webpack] for a huge list of loaders of many filetypes.

To demonstrate how to add one of these loaders to your project, let's take `raw-loader` for example.  It allows you to import any file as a String.  Let's add it to your project.

```
npm install raw-loader --save-dev
```

Then open up `webpack.config.js` and add this object to the `rules` array.  You'll see several other loaders already in the array, simply add this one to the end of the array.

```js
{
    test: /\.txt$/i,
    use: 'raw-loader',
},
```

TODO: test these instructions


## Publishing your game to NPM

If you wish to publish your game to NPM, remove the `private` flag from `package.json` and follow a blog post like [this one][first-npm] which steps through how to publish a package to NPM.

## When I save changes, `watch` doesn't recompile

This is usually due to editor configuration.  Please see [webpack's suggestions][watch-tips] for how to disable "safe write" in your editor's configuration.

## Hot Module Reloading

TODO: write some docs on how to use HMR.  An example in three.js of using HMR for live-refreshing shaders and textures would be excellent.

Under the tight pressure of a game jam, the extra work of setting up HMR probably isn't worth it, *unless* you know you're going to put a lot of work into a single shader, or texture.  In that case, being able to save the shader or texture and have it show up immediately in the game is worth the up-front cost of setting up HMR.

## Lazy loading

If your game has some code, or some assets, that you don't need to load right away, you can lazy-load it as follows.  This can be a nice optimization to get your main menu up as fast as possible, while other assets download in the background.

TODO: test and expand on these steps ( https://webpack.js.org/guides/code-splitting/#dynamic-imports )

 1. To begin lazy loading the asset: `const lazyLoadedAsset = require("promise?global!./a-lazy-asset.js");`
 2. When the time comes that you really need the asset to be ready: `await lazyLoadedAsset;`

This feature is powered by webpack's [promise-loader][promise-loader].

## index.js

It's recommended that you leave the `index.js` file untouched, and implement your game within `game.js`.  The purpose of `index.js` is to set up a few things before your game starts, such as a [Promise polyfill][es6-promise] and [browser feature detections][modernizr].

[es6-promise]: https://github.com/stefanpenner/es6-promise
[watch-tips]: https://webpack.js.org/guides/development/#adjusting-your-text-editor
[first-npm]: https://eladnava.com/publishing-your-first-package-to-npm/
[wp-load]: https://webpack.js.org/concepts/loaders/
[awesome-webpack]: https://github.com/webpack-contrib/awesome-webpack#loaders
[promise-loader]: https://github.com/gaearon/promise-loader
[modernizr]: https://modernizr.com/
