import Serializable from "../common/types/serializable";

export interface Store<T>{
    setValues():void;
    reset():void;
}

export interface SerializableStore<T> extends Store<T>, Serializable<T> {}