import { activeEffect } from './effect'
import { link, propagate, type Dep, type Link } from './system'

class RefImpl<T> {
  _value: T
  __is_value = true

  subHead?: Link
  subTail?: Link

  constructor(v: T) {
    this._value = v
  }

  get value(): T {
    trackRef(this)
    return this._value
  }

  set value(val: T) {
    this._value = val
    triggerRef(this)
  }
}

const ref = <T>(v: T): RefImpl<T> => {
  return new RefImpl(v)
}

const isRef = <T>(v: RefImpl<T> | undefined) => {
  return !!v?.__is_value
}

// 依赖追踪
export const trackRef = (dep: Dep) => {
  if (activeEffect) {
    link(dep,activeEffect)
  }
}

// 依赖触发
export const triggerRef = (dep: Dep) => {
    propagate(dep.subHead as Link)
}
export { ref, isRef }
