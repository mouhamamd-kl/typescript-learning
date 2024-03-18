interface Result<T> {
    data: T | null,
    error: string | null
}
function fetch<T>(url: string): Result<T> {
    console.log(url);

    return { data: null, error: null };
}
interface User {
    name: string
}
interface Product {
    title: string
}
let da = fetch<User>('hello')
let data = fetch<Product>('hello')