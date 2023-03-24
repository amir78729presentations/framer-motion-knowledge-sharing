## animate
Animating a `motion` component is as straightforward as setting values on the `animate` prop.

```javascript
// As values
<motion.div animate={{ opacity: 1 }} />

// As variant
<motion.div animate="visible" variants={variants} />

// Multiple variants
<motion.div animate={["visible", "active"]} variants={variants} />

// AnimationControls
<motion.div animate={animation} />
```

example:

```javascript
<motion.div animate={{ x: -100, y: 80, rotate: 30, scale: 0.7 }} />
```
When these values change, Framer Motion will automatically generate an animation to the latest values. This animation will feel great by default, but it can be configured with the flexible transition prop.

