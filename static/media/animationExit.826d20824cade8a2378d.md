## Exit animations

In React, when a component is removed from the tree, it's removed instantly. Framer Motion provides the `AnimatePresence` component to keep components in the DOM while they perform an exit animation.

```
const [num, setNum] = useState(0);

useEffect(() => {
  setTimeout(() => {
    setNum(num + 1)
  }, 1000);
}, [num]);

return (
  <AnimatePresence>
    <motion.div
      key={num}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y:0 , x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      {num}
    </motion.div>
  </AnimatePresence>
)
```
