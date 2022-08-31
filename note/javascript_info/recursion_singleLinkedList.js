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
//code below
function printList(list) {
	let ans = list;
	while (ans) {
		console.log(ans.value);
		ans = ans.next;
	};
}
printList(list);

function printListRecursion(list) {
	console.log(list.value);
	if (list.next) {
		printListRecursion(list.next);
	}
}

printListRecursion(list);