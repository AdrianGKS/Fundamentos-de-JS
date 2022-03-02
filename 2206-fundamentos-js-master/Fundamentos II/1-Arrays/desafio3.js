/*const n = [10, 7, 8, 5, 10];
n.pop();
console.log(n);
let media =  (n[0] + n[1] + n[2] + n[3]) / n.length;
console.log(media);*/

function media (n = [10, 7, 8, 5, 10], media) {
    n.pop(); 
    return console.log(`A média é ${media = (n[0] + n[1] + n[2] + n[3]) / n.length}`);
}

media()