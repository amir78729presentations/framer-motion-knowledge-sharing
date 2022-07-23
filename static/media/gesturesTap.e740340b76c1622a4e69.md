## Tap

The hover gesture detects when a pointer hovers over or leaves a component.


### onTapStart

Callback when the tap gesture starts on this element.

### onTap

Callback when the tap gesture successfully ends on this element.

### onTapCancel

Callback when the tap gesture ends outside this element.

### example

```
<motion.button
  whileTap={{
    scale: 1.1,
    backgroundColor: '#000',
    rotate: 30,
  }}
  onTapStart={() => alert('Tap started')}
  onTap={() => alert('Tap ended successfully')}
  onTapCancel={() => alert('Tap canceled')}
/>
```

