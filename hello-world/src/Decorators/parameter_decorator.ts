type watcherParameter = {
    methodName: string,
    parameterIndex: number
}
const watchedParameters: watcherParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName, parameterIndex
    });
}
class Veichle {
    move(@Watch speed: number) {

    }
}