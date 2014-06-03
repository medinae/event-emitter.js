/**
 * Event Emitter
 */
function EventEmitter ()
{
    this.element = document.createElement('div');
}

/**
 * Emit a new event
 *
 * @param {String} type
 * @param {Object} data
 */
EventEmitter.prototype.emit = function(type, data)
{
    var test;

    this.element.dispatchEvent(new CustomEvent(type, {detail: data}));
};

/**
 * Add a listener
 *
 * @param {String} name
 * @param {Function} callback
 */
EventEmitter.prototype.addEventListener = function(name, callback)
{
    this.element.addEventListener(name, callback, false);
};

/**
 * Remove a listener
 *
 * @param {String} name
 * @param {Function} callback
 */
EventEmitter.prototype.removeEventListener = function(name, callback)
{
    this.element.removeEventListener(name, callback, false);
};

/**
 * On alias
 */
EventEmitter.prototype.on = EventEmitter.prototype.addEventListener;

/**
 * Off alias
 */
EventEmitter.prototype.off = EventEmitter.prototype.removeEventListener;