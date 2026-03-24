import { activeEffect } from "./effect";

class Ref {
    _value:any
    sub:any
    constructor(v){
        this._value = v
    }
    

    get value(){
        console.log('获取value',activeEffect);
        if(activeEffect){
            this.sub = activeEffect
        }
        return this._value
    }
    set value(val:any){
        console.log('设置value',val);
        
        this._value = val
        this.sub && this.sub()
    }

}

const ref = (v:any)=>{
    return new Ref(v)
}
export {
    ref
}