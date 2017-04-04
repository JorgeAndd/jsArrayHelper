module.exports = {
	function intersect(a, b) {
		var t;

		if (b.length > a.length) {
		t = b;
		b = a;
		a = t;
	}

	return a.filter(function (e) {
	return b.indexOf(e) > -1;
	});
	}

	function diff(a, b) {
		var difference = a.filter(x => b.indexOf(x) == -1);

		return difference;
	}

	function union(a, b) {
		var hash = {};
		var arr = [];
		for (var i = 0; i < a.length; i++) {
		 if (hash[a[i]] !== true) {
		   hash[a[i]] = true;
		   arr[arr.length] = a[i];
		 }
		}
		for (var i = 0; i < b.length; i++) {
		 if (hash[b[i]] !== true) {
		   hash[b[i]] = true;
		   arr[arr.length] = b[i];
		 }
		}
		return arr;
	}

	function min(a) {
		var min = Number.MAX_VALUE;

		for (var i = 0; i < a.length; i++) {
			if(a[i] < min) min = a[i];
	}

	return min;
	}

	function max(a) {
		var max = Number.MIN_VALUE;

		for (var i = 0; i < a.length; i++) {
			if(a[i] > max) max = a[i];
	}

	return max;
}
}

