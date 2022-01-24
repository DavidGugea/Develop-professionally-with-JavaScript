Logger = {
    log(message) {
        console.log(message);
    },
    warn(message) {
        console.warn(message);
    },
    error(message) {
        console.error(message);
    }
}

NewLogger = {
    reportLog(message) {
        console.log(`${new Date()}: ${message}`);
    },
    reportWarn(message) {
        console.warn(`${new Date()}: ${message}`);
    },
    reportError(message) {
        console.error(`${new Date()}: ${message}`);
    }
}

function LoggerAdapter(logger) {
    return {
        log(message) {
            logger.reportLog(message);
        },
        warn(message) {
            logger.reportWarn(message);
        },
        error(message) {
            logger.error(message);
        }
    }
}

logger = new LoggerAdapter(NewLogger);
logger.log("Program started");