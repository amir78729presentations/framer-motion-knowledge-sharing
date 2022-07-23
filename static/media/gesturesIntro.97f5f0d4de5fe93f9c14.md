
Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.

It currently has support for **hover**, **tap**, **pan**, **viewport** and **drag** gesture detection. Each gesture has a series of event listeners that you can attach to your `motion` component.


## Hover

The hover gesture detects when a pointer hovers over or leaves a component.


### whileHover

Properties or variant label to animate to while the hover gesture is recognised.

### onHoverStart

Callback function that fires when pointer starts hovering over the component.

### onHoverEnd

Callback function that fires when pointer stops hovering over the component.

### example

```
<motion.button
  whileHover={{
    scale: 1.1,
    backgroundColor: '#000',
    rotate: 30,
  }}
  onHoverStart={() => alert('Hover starts')}
  onHoverEnd={() => alert('Hover ends')}
/>
```

