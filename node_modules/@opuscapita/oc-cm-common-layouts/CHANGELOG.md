# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## 3.0.0
* Theme: Refactored colors object (contains breaking changes)

## 2.5.3
* Small fix in `Content.Row` render

## 2.5.2
* Fix peer dependency version requirement

## 2.5.1
* Upgrade packages
* Migrate to styled-components 4

## 2.5.0
* Added a simple `Primitive.Spinner`
* Added a header prop to `Content.Card`

## 2.4.0
* Added a loading spinner to `Content.Card`
* IE fixes in `Content.InputRow`

## 2.3.0
* Added a valueWidth prop to `Content.Row`
* Changed `Content.Row` align-items property to prevent content in `Content.Column` from stretching
* Removed topOffset prop and height CSS property from `Content.Row`

## 2.2.0
* Reorganized theme a bit
* Added a `labelWidth` prop to `Content.InputRow`

## 2.1.0
* Added a loading spinner to `Content.Card`
* Fixed a few alignment bugs in `Content.InputRow`

## 2.0.0
* Removed React Bootstrap package
* Colors and other variables are now imported from oc-cm-common-styles
* Enhanced Primitive.Button component and a styled text input component (`Primitive.Input`)
* Some minor style changes to `Header.Basic`
* Removed `theme.js` imports
* ThemeProvider is now being used in `src_docs`
* ID is now a required prop in `InputRow`, `ReadonlyRow`, `InputColumn` and `ReadonlyColumn`

## 1.0.1
* Fix: Enhancing Masonry's update logic
* Fix: Expand/Collapse icon did not work properly

## 1.0.0
* Fix: Masonry layout will now update when its `Content.Card` child component gets expanded / collapsed
* Added InputColumn and `ReadonlyColumn` HOCs. Components are mainly extending corresponding Row components.
* Added custom theme props for `InputColumn` HOC.

## 0.3.0
* Cards can now be expanded and collapsed
* Removed some unused variables from theme

## 0.2.5
* Changed theme.header.button.height

## 0.2.4
* Fix `Content.Row` and `Content.Column` components 'this is undefined' in webpack 4 projects.

## 0.2.3
* BorderlessButton: removed box-shadow & outline

## 0.2.2
* Added button

## 0.2.1
* Removed layout width to fit in with sidebar

## 0.2.0
* Added className/ID props to some more components.
* Removed header HOCs and moved NavigationHeader into its own repo (https://github.com/OpusCapita/oc-cm-navigation-header)

## 0.1.2
* Webpack config changes. Added className/ID props to some components

## 0.1.1
* Add display flex to Card so that content stretches, useful for datagrid.

## 0.1.0
* Initial release
