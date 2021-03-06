class EventFacade {
    static addEvent(element, event, callback) {
        if (typeof callback == 'function') {
            if(window.addEventListener) {
                element.addEventListener(event, callback, false);
            } else if (document.attachEvent) {
                element.attachEvent('on' + event, callback);
            } else {
                element['on' + event ]  = callback;
            }
        }
    }
}