/*
const wrap = (previousActions, instance, method, ...args) => 
	previousActions.then(
		() => instance[method](...args)
	);
*/

const wrap = async (previousActions, instance, method, ...args) => {
	await previousActions;
	await instance[method](...args);
}
