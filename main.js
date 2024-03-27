// set
// --------37-----------
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);
// console.log(set);

// --------38-----------
// 1--------
// let set = new Set([1, 2, 3, 1, 3, 4]);
// console.log(set);
// 2--------
// let set = new Set([1,2,3])
// set.add(2);
// console.log(set);

// --------39-----------
// 1--------
// let set = new Set([1,2,3]);
// console.log(set.size);
// 2--------
// let set = new Set([1,2,3]);
// console.log(set.has(3));

// --------40-----------
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(4);
// let sum = 0;
// for (let elem of set){
//     sum += elem;
// }
// console.log(sum);

// --------41-----------
// 1---------
// let set = new Set([1,2,3]);
// let arr = [...set];
// console.log(arr);
// ------------------
// let set = new Set([1,2,3]);
// let arr = Array.from(set);
// console.log(arr);
// 2---------
// let arr = [1,2,3];
// let set = new Set(arr);
// console.log(set);

// --------42-----------
// function dubl(arr){
//     return [...new Set(arr)];
// }
// let arr = [1,2,4,3,4,1];
// let res = dubl(arr);
// console.log(res);

// --------43-----------
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }
// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });
// ----------------------------------------------------------------------
// псевдомассивы
// --------45-----------
// let elems = document.querySelectorAll('p');
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
// console.log(elems.length);
// for (let elem of elems) {
// 	console.log(elem);
// }

// --------46-----------
// let elems = document.querySelectorAll('p');
// console.log(elems.slice(1, 3));

// --------47-----------
// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];
// test.forEach(elem =>{
//     if (Array.isArray(elem)) {
//         console.log(elem, ' массив');
//     } else {
//         console.log(elem, 'объект');
//     }
// });

// --------48-----------
// let elems = document.querySelectorAll('p');
// let arr = [];

// for (let elem of elems) {
// 	arr.push(elem);
// }
// let sub = arr.slice(1, 3);

// console.log(sub);


