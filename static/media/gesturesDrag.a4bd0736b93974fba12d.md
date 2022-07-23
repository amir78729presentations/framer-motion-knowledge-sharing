## Drag

The drag gesture follows the rules of the pan gesture but applies pointer movement to the x and/or y axis of the component.

### `drag`

Enable dragging for this element. Set to false by default. Set true to drag in both directions. Set "x" or "y" to only drag in a specific direction.

```
// drag in both directions
<motion.div drag /> 
```

```
// drag in x direction
<motion.div drag="x" />
```

```
// drag in y direction
<motion.div drag="y" />
```

