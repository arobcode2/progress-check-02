const _ = {};

//inputs: 1 list (array or object) is passed in
//outputs: 1 number is returned
//assumptions: the array or object will consist of only numbers
//process: [10, 5, 100, 2, 1000] => 2, {'a': 200, 'b': 1, 'c': 34} => 1, [] => infinity, {} => infinity
_.min = function(list, iteratee) {
	//create var to store minimum value
	var minVal = 0;
	var iterateeVals = [];
  //if list is array
  if (Array.isArray(list)) {
  	//if array is not empty
  	if (list.length !== 0) {
  		//if iteratee function is passed in
  		if (typeof arguments[1] === 'function') {
  			//apply iteratee of each element of the array
  			for (var i = 0; i < list.length; i++) {
  			    iterateeVals.push(iteratee(list[i]));
  			}
  			//find min val in iterateeVals
  			minVal = Math.min(...iterateeVals);
  		} else {
  			//find the smallest value in array and set it to the minimum value var
  			minVal = Math.min(...list);
  		}
  	} else {
  		//set minimum value to _Infinity
  		minVal = Infinity;
  	}
  } else {
  	//if obj is not empty
  	if (list !== {}) {
  		//iterate through array of values from list obj
  		var listVals = Object.values(list);
  		//if iteratee function is passed in
  		if (typeof arguments[1] === 'function') {
  			//apply iteratee of each element of the array
  			for (var i = 0; i < listVals.length; i++) {
  			    iterateeVals.push(iteratee(listVals[i]));
  			}
  			//find min val in iterateeVals
  			minVal = Math.min(...iterateeVals);
  		} else {
  			//find the smallest value in array and set it to the minimum value var
  			minVal = Math.min(...listVals);
  			}
  	} else {
  		//set minimum value to _Infinity
  		minVal = Infinity;
  	}
  }
  //return minimum value
  return minVal;
};