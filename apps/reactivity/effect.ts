export let activeEffect: ReactiveEffect | undefined = undefined

export interface EffectOptions {
  scheduler?: () => void
}

export class ReactiveEffect {
  scheduler?: () => void|undefined 

  constructor(public fn: () => void, options?: EffectOptions) {
    this.scheduler = options?.scheduler as () => void
  }

  run() {
    const prev = activeEffect
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    activeEffect = this
    this.fn()
    activeEffect = prev
  }
  
  xxx(){
    this.run()
  }

  notify(){
    this.xxx()
  }
  
}

export const effect = (fn: () => void, options?: EffectOptions) => {
  const e = new ReactiveEffect(fn, options)
  e.run()
}
