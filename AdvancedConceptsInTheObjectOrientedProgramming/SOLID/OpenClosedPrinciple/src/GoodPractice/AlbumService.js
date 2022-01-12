const {
    LoadAlbumRequestHandler,
    SaveAlbumRequestHandler,
    UpdateAlbumRequestHandler
} = require("./RequestHandlers.js");

module.exports = class AlbumService {
    constructor() {
        this._requestHandlers = new Map();
        this._requestHandlers.set('save', new SaveAlbumRequestHandler());
        this._requestHandlers.set('load', new LoadAlbumRequestHandler());
        this._requestHandlers.set('update', new UpdateAlbumRequestHandler());
    }

    handleRequest(request){
        const response = {
            requestId: request.id
        };

        const requestHandler = this._requestHandlers.get(request.type);
        if(requestHandler){
            response.result = request.handle(request);
        }
        
        return Promise.resolve(response);
    }
}