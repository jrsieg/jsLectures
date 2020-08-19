/* 
SWITCH STATEMENTS 
*/

let friend = 'Tom';

switch(friend){
    case 'Tom':
        console.log('Hey Tim, when will you bring bread?');
        break;
    case 'Ken':
        console.log('Hey Ken, do you own a dog?');
        break;
    case 'Alex':
        console.log('Hey Alex, how many cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep =='boolean'){
    case true:
        console.log('yep is a string of a boolean');
        break;
    default:
        console.log('yep is not a string of a number');


}