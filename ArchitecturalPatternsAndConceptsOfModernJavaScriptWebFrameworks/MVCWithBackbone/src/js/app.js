const Backbone = require("backbone");

const Album = Backbone.Model.extend({
    defaults: {
        title: '',
        artist: ''
    }
});
const AlbumList = Backbone.Collection.extend({
    model: Album
});
const AlbumView = Backbone.View.extend({
    el: $('body'),
    initialize: function() {
        this.render();
    },
    render: function() {
        const self = this;
        $(this.el).append('<ul></ul>');
        _(this.collection.models).each(function(item) {
            self.appendItem(item);
        }, this);
    },
    appendItem: function(item) {
        const list = $('ul', this.el);
        const listItem = list.append(
            `
            <li>
                <input class="title" value="${item.get('title')}"/>
                <input class="artist" value="${item.get('artist')}"/>
            </li>
            `
        );
    },
    events: {
        'change .title' : 'handleChangedTitle',
        'change .artist' : 'handleChangedArtist',
    },
    handleChangedTitle : function(t) {
        alert("Changed title");
    },
    handleChangedArtist: function(t) {
        alert("Changed artist");
    }
});

const albumList = new AlbumList([
    new Album({title: "Title1", artist: "Artist1"}),
    new Album({title: "Title2", artist: "Artist2"}),
    new Album({title: "Title3", artist: "Artist3"}),
    new Album({title: "Title4", artist: "Artist4"}),
]);
const listView = new AlbumView({
    collection: albumList
});