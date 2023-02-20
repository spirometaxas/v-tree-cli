# v-tree-cli
Print the V-Tree Fractal to the console!

![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-banner.png)

[![npm version](https://img.shields.io/npm/v/v-tree-cli)](https://www.npmjs.com/package/v-tree-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/v-tree-cli)](https://bundlephobia.com/package/v-tree-cli)
[![downloads](https://img.shields.io/npm/dy/v-tree-cli)](https://www.npmjs.com/package/v-tree-cli)
[![license](https://img.shields.io/npm/l/v-tree-cli)](https://github.com/spirometaxas/v-tree-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

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
    rotate: <left|right|flip|standard>,
    line: <bold|double|standard> 
}));
```
The config params are optional. 

## Options
### Recursive Step  
```
$ v-tree-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ v-tree-cli 3
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-3.png)

```
$ v-tree-cli 4
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4.png)

### Size
```
$ v-tree-cli <n> [size]
```
The optional `[size]` param allows the V-Tree to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a V-Tree of `<n>` recursive steps the size of a triangle with `[size]` recursive steps.  

#### Example:
```
$ v-tree-cli 2 4
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-2-4.png)

### Rotation
```
$ v-tree-cli <n> --rotate=<left|right|standard>
```
The optional `--rotate` param rotates the V-Tree.  Supported values:

- `left`: Rotate left 90 degrees
- `right`: Rotate right 90 degrees
- `flip`: Rotate 180 degrees
- `standard`: No rotation (default)

#### Example:
```
$ v-tree-cli 4 --rotate=right
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4-rotate_right.png)

```
$ v-tree-cli 4 --rotate=flip
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4-rotate_flip.png)

```
$ v-tree-cli 4 --rotate=left
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4-rotate_left.png)

### Line Type
```
$ v-tree-cli <n> --line=<bold|double|standard>
```
The optional `--line` param draws the V-Tree using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ v-tree-cli 4 --line=bold
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4-line_bold.png)

```
$ v-tree-cli 4 --line=double
```
![What v-tree-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/v-tree-cli/main/img/v-tree-4-line_double.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/v-tree-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)