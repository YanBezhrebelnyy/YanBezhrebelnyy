var myNum = 10,
    myStr = 'строка',
    myBool = true,cmd
    myArr = [1, 2, 3, 4, 5],
    myObj = {
        first: 'First Name',
        last: 'Last Name'
    };

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

console.log('---');

var decimal2 = myNum.toFixed(2);
console.log(decimal2);

console.log('---');

var i = 10;
console.log(++i);
console.log(++i);
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);
console.log(++i);
console.log(i)

console.log('---');

var myTest = 20;
console.log(myTest);

console.log('---');

myTest += myNum;
console.log(myTest);

var myTest = 20;
myTest -= myNum;
console.log(myTest);

var myTest = 20;
myTest *= 2;
console.log(myTest);

var myTest = 20;
myTest /= 5;
console.log(myTest);

var myTest = 20;
myTest %= 3;
console.log(myTest);

console.log('---');

var myPi = Math.PI;
myRound = Math.round(89.279);
myRandom = Math.random(1) * 10;
myPow = Math.pow(3, 5);

console.log(myPi);
console.log(myRandom);
console.log(myPow);

console.log('---');

var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length;

console.log(strObj);
console.log(strObj.str);
console.log(strObj.str.length);

console.log('---');

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

console.log('---');

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log('---');

console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());