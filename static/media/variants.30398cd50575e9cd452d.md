## Variants

Setting animate as an object is useful for simple, single-component animations. But sometimes we want to create animations that propagate throughout the DOM, and orchestrate those animations in a declarative way. We can do so with variants.

Variants are sets of pre-defined targets.

```javascript
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
```

They're passed into motion components via the variants prop.

```javascript
<motion.div variants={variants} />
```

These variants can be referred to by label, wherever you can define an animation object.

```javascript
<motion.div
  initial="hidden" // we will discuss later
  animate="visible"
  variants={variants}
/>
```

