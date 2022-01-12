class FluentAsyncControl {
    next(callback) {
        console.log("Next song");

        setTimeout(
            () => {
                console.log("Next song callback");
                if (typeof callback === 'function') {
                    callback();
                }
            },
            500
        );

        return this;
    }

    pause(callback) {
        console.log("Pause");

        setTimeout(
            () => {
                console.log("Pause callback");
                if (typeof callback === 'function'){
                    callback();
                }
            },
            500
        );

        return this;
    }

    play(callback) {
        console.log("Play");

        setTimeout(
            () => {
                console.log("Play callback");
                if (typeof callback === "function"){
                    callback();
                }
            },
            500
        );

        return this;
    }

    previous(callback) {
        console.log("Previous song");

        setTimeout(
            () => {
                console.log("Previous song callback");

                if (typeof callback === "function"){
                    callback();
                }
            },
            500
        );

        return this;
    }

    select(track, callback) {
        console.log(`Select track ${track}`);

        setTimeout(
            () => {
                console.log("Select track callback");

                if (typeof callback === "function"){
                    callback();
                }
            },
            500
        );

        return this;
    }

    stop(callback) {
        console.log("Stop");

        setTimeout(
            () => {
                console.log("Stop callback");

                if (typeof callback === "function"){
                    callback();
                }
            },
            500
        );

        return this;
    }
}

const wrap = (previousActions, instance, method, ...args) => 
	previousActions.then(
		() => new Prmoise((resolve, reject) => {
			instance[method](...args, resolve);
		}))

const toFluent = (previousActions = Promise.resolve(), instance) => {
	return {
		next: () => toFluent(wrap(previousActions, instance, 'next'), instance),
		pause: () => toFluent(wrap(previousActions, instance, 'pause'), instance),
		play: () => toFluent(wrap(previousActions, instance, 'play'), instance),
		previous: () => toFluent(wrap(previousActions, instance, 'previous'), instance),
		select: () => toFluent(wrap(previousActions, instance, 'select'), instance),
		stop: () => toFluent(wrap(previousActions, instance, 'stop'), instance)
	};
}

const build = () => {
	const control = new FluentAsyncControl();
	return toFluent(undefined, control);
}

module.exports.build = build;