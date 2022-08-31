let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//Loop 
function printList(list) {
	let temp = list;
	let arr = [];
	
	while (temp) {
		arr.push(temp.value);
		temp = temp.next;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}
//printList(list);

//Recursion
function printListRecursion(list) {
	if (list.next) {
		printListRecursion(list.next);
	}

	console.log(list.value);
}

printListRecursion(list);