import httpInstance from './config';


//GET METHOD
const GET =( url) => {
	// console.log('ss',url);
	// sent a GET request
	let response = httpInstance.get(url)
	.catch(error => {
		if (error.response) {
			// Request made and server responded
			// console.log(error.response.data);
			// console.log(error.response.status);
			if(error.status===403){
				//For checking session is expired or not and redirect to login page.
				// localStorage.removeItem('access_token');
			}
		  } else if (error.request) {
			// The request was made but no response was received
			// console.log(error.request);
		 } else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		  }
	  });
	// // console.log(response);
	 return response;
}

const POST = (url, body, header) => {
	return httpInstance.post(url, body, {
	  headers: header
	});
}

const PUT = (url, body, header) => {
	return httpInstance.put(url, body, {
	  headers: header
	});
}


const DELETE = (url,body={}) => {
	return httpInstance.delete(url,{ data: body });
}


// export const GETASYNC = async (url,header="") => {
// 	const response =  await httpInstance.get(url);
//     return response.data;
// }

// export const POSTASYNC = async (url,body, header) => {
// 	const response =  await httpInstance.post(url,body);
//     return response.data;
// }

// export const PUTASYNC = async (url,body) => {
// 	const response =  await httpInstance.put(url,body);
//     return response.data;
// }

// export const DELETEASYNC = async(url,body) => {
// 	const response =  await httpInstance.delete(url,body);
//     return response.data;
// }


export default { GET, PUT, POST, DELETE };