# Transition

*A Transition defines how values animate from one state to another.*

A `Transition` is an object which can contain `Orchestration` props like `delay`, that **schedule the animation as a whole.**

```
<motion.div
  animate={{ x: 100 }}
  transition={{ delay: 1 }}
/>
```

It can also accept props that define which type of animation to use a `Tween`, `Spring` or `Inertia`.

```
<motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}
/>
```

A different type of animation can be defined for each animating value. `default` can be used to define animations for any remaining values.

```
<motion.div
  animate={{ x: 100, y: 100, opacity: 1 }}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 2 }
  }}
/>
```
