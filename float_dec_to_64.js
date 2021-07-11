//进制转换，将 10 进制浮点数转换成 64 进制
const SIGNS =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+".split("");

//整数部分64进制
function intTo64(num) {
    if(Number.isNaN(num)){
        return '';
    }
    let result = [];
    let div = num;
    while (div > 63) {
        result.push(SIGNS[div % 64]);
        div = Math.floor(div / 64);
    }
    result.push(SIGNS[div]);
    return result.reverse().join("");
}

//小数部分转64进制
function pointTo64(num) {
    if(Number.isNaN(num)){
        return '';
    }
    //保留12位
    let precision = 12;
    let result = [];
    let multi = Number(num);
    while (result.length < precision) {
        let res = multi * 64;
        result.push(SIGNS[parseInt(res)]);
        multi = (res - parseInt(res));
    }
    return result.join("");
}

//整个浮点数转换
function floatTo64(num){
    if(Number.isNaN(num)){
        throw new Error('please input number');
    }
    let intPart = intTo64(parseInt(num));
    let pointPart = pointTo64(num - parseInt(num))
    return intPart + '.' + pointPart;
}