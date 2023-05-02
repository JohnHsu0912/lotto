class Timer {
  constructor(interval = 1000) {
    this._interval = null;
    this.interval = interval;
    this.registry = {};
  }

  register(id, callback) {
    this.unregister(id);
    this.registry[id] = callback;
  }

  unregister(id) {
    delete this.registry[id];
  }

  start() {
    this.stop();
    this._interval = setInterval(() => {
      Object.values(this.registry).forEach(callback => callback());
    }, this.interval);
  }

  stop() {
    if(this._interval) {
      clearInterval(this._interval);
    }
  }
}

export default Timer;
