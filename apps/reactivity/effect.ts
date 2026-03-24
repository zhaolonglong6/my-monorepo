export let activeEffect: (() => void) | undefined = undefined

export const effect = (fn: () => void) => {
  activeEffect = fn
  fn() // 首次执行，收集依赖
  activeEffect = undefined
}