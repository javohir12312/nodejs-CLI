import getArgs from "./helpers/args.js";
import getWeather from "./services/api.service.js";
import { loggerError, loggerHelp, loggerSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.sevice.js";

const saveToken = async(token) => {
	if(!token.length){
		loggerError('Token was saved')
		return
	}
	try {
	await saveKeyValue('token', token)
	loggerSuccess("token was saved")
	} catch (error) {
		loggerError(error.message)
	}
}

const startCLI = () => {
	const args = getArgs(process.argv)
	if(args.h){
		loggerHelp()
	}else if(args.s){
		getWeather(args.s)
	}else if(args.t){
		return saveToken(args.t)
	}else{
		loggerError("try again")
	}

	
}

startCLI()