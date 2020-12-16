export default interface Serializable<T>{
    
    toJSON(): any;

    fromJSON(): T;

}