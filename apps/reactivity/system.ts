
import type { ReactiveEffect } from './effect'

export interface Link {
  sub: ReactiveEffect
  nextSub: Link | undefined
  prevSub: Link | undefined
}

// 定义依赖对象的接口
export interface Dep {
  subHead?: Link
  subTail?: Link
}

// 连接链表关系
export const link = (dep: Dep, subs: ReactiveEffect) => {
    const newLink: Link = {
      sub: subs,
      nextSub: undefined,
      prevSub: undefined,
    }
    if (dep.subTail) {
      dep.subTail.nextSub = newLink
      dep.subTail = newLink
    } else {
      dep.subHead = newLink
      dep.subTail = newLink
    }
}

// 传播更新
export const propagate = (subNode: Link) => {
    const effectList: ReactiveEffect[] = []
    let node = subNode
    while (node) {
      effectList.push(node.sub)
      node = node.nextSub as Link
    }

    effectList.forEach((effect) => {
      if (effect.scheduler) {
        effect.scheduler()
      } else {
        effect.run()
      }
    })
}


