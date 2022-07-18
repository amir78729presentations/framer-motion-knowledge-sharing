### More about variants

#### Dynamic variants

Each variant can be defined as a function that resolves when a variant is accessed. These variant functions are provided a single argument, which can be set in a component's `custom` prop.

```javascript
const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}

return items.map((item, i) => (
  <motion.li
    custom={i}
    animate="visible"
    variants={variants}
  />
))
```

#### Multiple variants

Props like `animate`, `whileHover` etc. can define one or more variants by passing a string or an array of strings.

```javascript
<motion.ul variants={["open", "primary"]} />
```

If variants define the same values, variants appearing later in the array will take precedence over those earlier in the array.
