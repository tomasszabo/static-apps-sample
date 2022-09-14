module.exports = async function (context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');

	const header = req.headers['x-ms-client-principal'];
	const encoded = Buffer.from(header, 'base64');
	const principal = JSON.parse(encoded.toString('ascii') ? encoded.toString('ascii') : '{}');

	const name = (req.query.name || (req.body && req.body.name));
	const responseMessage = principal
		? principal
		: "Hello, " + name + ". You're not logged in.";
		
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: responseMessage
	};
}