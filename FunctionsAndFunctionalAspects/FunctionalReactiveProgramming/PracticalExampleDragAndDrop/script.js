const Rx = require('rxjs');

function init(){
    const dragTarget = document.getElementById("drag-target");

    // Data-stream for the mouseup-Event
    const mouseUpStream = Rx.Observable.fromEvent(
        document, "mouseup"
    );
    // Data-stream for the mousemove-Event
    const mouseMoveStream = Rx.Observable.fromEvent(
        document, 'mousemove'
    );
    // Data-stream for the mousedown-Event
    const mouseDownStream = Rx.Observable.fromEvent(
        dragTarget, "mousedown"
    );

    mouseDownStream
        .mergeMap(mouseDownEvent => 
            mouseMoveStream.map(mouseMoveEvent => {
                mouseMoveEvent.preventDefault();

                return{
                    left : mouseMoveEvent.clientX - mouseDownEvent.offsetX,
                    top : mouseMoveEvent.clientY - mouseDownEvent.offsetY,
                }
            })
            .takeUntil(mouseUpStream)
            .subscribe(position => {
                console.log(`Relative position -- > Left : ${position.left} || Right : ${position.right}`);
            }));
}