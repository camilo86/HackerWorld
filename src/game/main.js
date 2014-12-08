game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function () {

    game.createScene('Main', {
        backgroundColor: 0xb9bec7,
        init: function () {
            // main loop
        }
    });

});
