class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { }
}
let pair=new KeyValuePair<string,string>('key','value');
//! or
let pair2=new KeyValuePair('key','value');