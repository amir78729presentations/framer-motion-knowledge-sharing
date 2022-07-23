## Animation Controls

Usually, animations in a motion component will be triggered automatically, either when the contents of the `animate` prop change or if a gesture (hover/tap etc) starts/stops.

`useAnimationControls` can create animation controls that can be used to manually start/stop animations on one or more `motion` components, or compose multiple animations together.

```
import { motion, useAnimationControls } from "framer-motion"

function Component() {
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start({ scale: 2 })
  }, [])
  
  return <motion.div animate={controls} />
}
```

### Create 

Create animation controls by calling `useAnimationControls()`.

```
const controls = useAnimationControls()
```

Pass `controls` to one or more `motion` components via their `animate` prop.

```
<motion.div animate={controls} />
```

### Start/stop animations

Animations can be started with the `controls.start` method.

`start` accepts either a set of values to animate to (and an optional `transition`), or, if the component(s) it's provided to have a variants prop set, a `variant` label.

```
// value
controls.start({
  x: "100%",
  backgroundColor: "#f00",
  transition: { duration: 3 },
})

// variant
controls.start("hidden")

```

### Sequence

`start` returns a `Promise`, so it can be used to sequence animations using `await` or `then`.

Different controls can be sequenced together, and these sequences can be composed into functions that themselves can then be sequenced.

```
const sequence = async () => {
  await menuControls.start({ x: 0 })
  return await itemControls.start({ opacity: 1 })
}
```

### `stop`

Stops animations on all linked components.


### Dynamic start

`start` can also accept a function that can dynamically start each component and the controls are bound to with a different animation definition.

Custom data can be sent to this function via the component's `custom` prop.

```
const controls = useAnimationControls()

useEffect(() => {
  controls.start(i => ({
    scale: 1,
    transition: { delay: i * 0.3 },
  }))
}, [])

return (
  {informations?.map((info, index) => (
    <motion.div
      custom={index} 
      animate={controls}
      initial={{ scale: 0 }}
    />
  ))}
)
```


