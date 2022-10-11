let maxStrLength = 0;
let result = [];

for (let str of strs) {
	maxStrLength = Math.max(str.length, maxStrLength);
}

loop1: 
for (let i = 0; i < maxStrLength; i++) {
	let char = strs[0].charAt(i);

	for (let str of strs) {
		if (str.charAt(i) !== char) {
			break loop1;
		}
	}

	result.push(char);
}

return result.join('');
