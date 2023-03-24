## Viewport
The viewport gesture can be used to create scroll-triggered animations with the whileInView prop.

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/>
```