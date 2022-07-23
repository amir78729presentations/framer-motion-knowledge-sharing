## Ease

The easing function to use. Set as one of the below.

- The name of an existing easing function.
- An array of four numbers to define a cubic bezier curve.
- An easing function, that accepts and returns a value `0-1`.

If the animating value is set as an array of multiple values for a keyframes animation, `ease` can be set as an array of easing functions to set different easings between each of those values.
```
<motion.div
  animate={{ opacity: 0 }}
  transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
/>
```

These strings are the built-in named easing functions in Framer.

- `"linear"`
- `"easeIn"`, `"easeOut"`, `"easeInOut"`
- `"circIn"`, `"circOut"`, `"circInOut"`
- `"backIn"`, `"backOut"`, `"backInOut"`
- `"anticipate"`
