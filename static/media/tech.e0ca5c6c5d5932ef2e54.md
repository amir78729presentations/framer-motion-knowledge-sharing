# Technical review

## Performance

Motion **animates values outside the React render cycle** for increased performance.

**Using MotionValues instead of state** to update visual properties will also **avoid re-renders**.

Where possible, animate just transform values and opacity, as they are GPU-accelerated. This way, you can animate hundreds of layers on modern mobile devices.

```
// GPU accelerated (fast)
<motion.div style={{ x: 0 }} animate={{ x: 100 }} />

// CPU drawing (slower)
<motion.div style={{ left: 0 }} animate={{ left: 100 }} />
```

## Server-side rendering
`motion` components are fully compatible with server-side rendering, meaning the initial state of a component will be reflected in the server-generated output.

```
// Server will output `translateX(100px)`
<motion.div initial={false} animate={{ x: 100 }} />
```
