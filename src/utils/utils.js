import React from "react";

export function useForceUpdate() {
  const [, setValue] = React.useState(0);
  return () => setValue((theValue) => theValue + 1);
}