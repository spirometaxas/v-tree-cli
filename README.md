# v-tree-cli
Print the V-Tree Fractal to the console!

## Usage
### Via `npx`:
```
$ npx v-tree-cli <n>
$ npx v-tree-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global v-tree-cli
$ v-tree-cli <n>
$ v-tree-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install v-tree-cli
```
then:
```
const v_tree = require('v-tree-cli');
console.log(v_tree.create(<n>);
console.log(v_tree.create(<n>, { 
    size: <number>, 
    rotate: <left|right|standard>,
    line: <bold|standard> 
}));
```
The config params are optional. 