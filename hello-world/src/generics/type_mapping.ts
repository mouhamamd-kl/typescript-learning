interface Product3 {
    name: string;
    price: number;
}
type readOnlyProduct = {
    [k in keyof Product3]: Product3[k];
}
//! more generic solution
type readOnly<T> = {
    readonly [k in keyof T]: T[k];
}
type nullable<T> = {
    readonly [k in keyof T]: T[k] | null;
}