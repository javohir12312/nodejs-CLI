import getArgs from "./helpers/args.js";
import { loggerError, loggerHelp, loggerSuccess } from "./services/log.service.js";


const startCLI = () => {
	const args = getArgs(process.argv)
	if(args.h){
		loggerHelp()
	}else if(args.s){
		logg
	}else if(args.t){
		// save token
	}else{
		// invvalid
	}

	// res
}

startCLI()