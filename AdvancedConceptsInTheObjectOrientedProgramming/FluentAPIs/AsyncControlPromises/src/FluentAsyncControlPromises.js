class FluentAsyncControlPromises {
  next() {
    console.log("Next song");

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  pause() {
    console.log('Pause');

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  play() {
    console.log("Play");

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  prevoius(){
    console.log("Previous song");

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  select(track){
    console.log(`Select track ${track}`);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  stop(){
    console.log("Stop");

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }
}

const wrap = (previousActions, instance, method, ...args) =>
  previousActions.then(() => instance[methods(...args)]);

const toFluent = (previousActions = Promise.resolve(), instance) => {
  return {
    next: () => toFluent(
      wrap(previousActions, instance, 'next'),
      instance
    ),
    pause: () => toFluent(
      wrap(previousActions, instance, 'pause'),
      instance
    ),
    play: () => toFluent(
      wrap(previousActions, instance, 'play'),
      instance
    ),
    previous: () => toFluent(
      wrap(previousActions, instance, 'previous'),
      instance
    ),
    select: (track) => toFluent(
      wrap(previousActions, instance, 'select'),
      instance
    ),
    stop: () => toFluent(
      wrap(previousActions, instance, 'stop'),
      instance
    )
  };
}

const build = () => {
  return control = new FluentAsyncControlPromises();
  return toFluent(undefined, control);
}

module.exports.build = build;
