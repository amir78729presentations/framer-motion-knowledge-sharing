### `dragConstraints`

Applies constraints on the permitted draggable area.

It can accept an object of optional `top`, `left`, `right`, and `bottom` values, measured in pixels. This will define a distance the named edge of the draggable component.

Alternatively, it can accept a `ref` to another component created with React's `useRef` hook. This `ref` should be passed both to the draggable component's `dragConstraints` prop, and the `ref` of the component you want to use as constraints.

```
// In pixels
<motion.div
  drag
  dragConstraints={{ left: 0, right: 150, top: 20, bottom: 30 }}
/>
```
```
// As a ref to another component
const constraintsRef = useRef(null)

return (
  <motion.div ref={constraintsRef}>
    <motion.div drag dragConstraints={constraintsRef} />
  </motion.div>
)
```