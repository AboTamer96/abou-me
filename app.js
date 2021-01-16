// 'use strict';

// var usersName = prompt('write your name');
// alert('your namer is: ' + usersName);
// // var NameQ = prompt('Is my name Salah yes/no ?');

// // var NameQ_= NameQ .toLocaleLowerCase();


do {
    var NameQ = prompt('Is my name Salah yes/no ?');

    var NameQ_ = NameQ.toLocaleLowerCase();
    switch (NameQ_) {
        case 'yes':
            case 'y':
            alert('right');
            break;
        default:
            alert('Try Again')
    }
} while (NameQ_ !== 'yes' && NameQ_!=='y');



// var namberr=prompt('give number');
// while (numberr==5) {
//     alert('salah');

// }