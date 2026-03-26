import { activeEffect } from "./effect";

class RefImpl<T> {
    _value: T;
    __is_value=true
    sub?: () => void;

    constructor(v: T) {
        this._value = v;
    }

    get value(): T {
        if (activeEffect) {
            this.sub = activeEffect;
        }
        return this._value;
    }

    set value(val: T) {
        this._value = val;
        this.sub?.();
    }
}

const ref = <T>(v: T): RefImpl<T> => {
    return new RefImpl(v);
}

const isRef = <T>(v:RefImpl<T>|undefined)=>{
    return !!v?.__is_value
}
export {
    ref,
    isRef
}