## AnimatePresence

**Animate components when they're removed from the React tree.**

`AnimatePresence` allows components to animate out when they're removed from the React tree.

It's required to enable exit animations because React lacks a lifecycle method that:

1. Notifies components when they're going to be unmounted and 
2. Allows them to defer that unmounting until after an operation is complete (for instance an animation).
