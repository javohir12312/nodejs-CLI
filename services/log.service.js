// const { default: chalk } = require("chalk");
import chalk from "chalk";
import dedent from "dedent-js"
const loggerError = (error) =>{
    console.log(chalk.bgRed("error")+" "+error);
}

const loggerSuccess = (succes) =>{
    console.log(chalk.bgGreen(succes));
}

const loggerHelp = (succes) =>{
     console.log(dedent
        `${chalk.bgCyan("HELP")}
        -s [City] for install city
        -h for help
        -t [API_TOKEN] for saving token 
        `
    );
    
}


export { loggerError,    loggerSuccess,loggerHelp}


