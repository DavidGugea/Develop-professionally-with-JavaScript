const button = {
    handler : null,
    onClick : function(handler){
        // handler is a callback-handler
        this.handler = handler;
    },
    click : function(){
        this.handler();
    }
}

const handler = {
    log : function(){
        console.log("Clicked on the button.");
    },
    handle : function(){
        this.log();
    }
}

// button.onClick(handler.handle); Wrong, since this points to button, not to handler
button.onClick(handler.handle.bind(handler));
button.click();


button.onClick.bind()