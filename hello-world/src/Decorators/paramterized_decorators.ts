type ComponentOptions = {
    selector: string;
}
export function component(value: ComponentOptions) {
    return (constructor: Function) => {
        console.log('the selector is:' + value.selector);
        constructor.prototype.value = ''
    };
}
@component({ selector: 'button' })
class HtmlComponent { }
