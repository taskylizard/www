

export const clamp = (min: number, val: number, max: number) =>
  Math.min(max, Math.max(val, min))
