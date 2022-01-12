module.exports = class AlbumService {
    handleRequest(request) {
        const response = {
            requestId: request.id
        };

        // Very hard to extend
        switch (request.type){
            case 'save':
                console.log("Saving album");
                response.result = {
                    saved: true
                };
                break;
            case 'load':
                console.log('Loading album');
                response.result = {
                    loaded: true
                };
                break;
            case 'update':
                console.log('Updating album');
                response.result = {
                    update: true
                };
                break;
        }


        return Promise.resolve(response);
    }
}
