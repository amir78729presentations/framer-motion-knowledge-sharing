## Enter animations

### initial

Properties, variant label or array of variant labels to start in.

Set to `false` to initialise with the values in `animate` (disabling the mount animation).

```javascript
// As values
<motion.div initial={{ opacity: 1 }} />

// As variant
<motion.div initial="visible" variants={variants} />

// Multiple variants
<motion.div initial={["visible", "active"]} variants={variants} />

// As false (disable mount animation)
<motion.div initial={false} animate={{ opacity: 0 }} />
```

Here's an example:

```javascript
<motion.div 
    initial={{ x: 50, y: 20, rotate: -60, scale: 1.1}}
    animate={{ x: -100, y: 80, rotate: 30, scale: 0.7 }}
/>
```

output: