
const getItemData = async (): Promise<Response> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
		method: 'GET',
		mode: 'cors',
		headers: {
			// 'X-API-Key': '',
			'Content-Type': 'application/json'
		}
	})
	return response.json();
};

const main = async () : Promise<number> => {
	const num:Response = await getItemData();
	console.log(num);
	return 1;
}

main();