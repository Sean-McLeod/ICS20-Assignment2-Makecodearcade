namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . a a a a a a . . . . . 
. . . . a a a a a a a a . . . . 
. . . . a a a a a a a a . . . . 
. . . . a f f f f f f a . . . . 
. . . . a a f a a f a a . . . . 
. . . . a a a a a a a a . . . . 
. . . . a a f f f f a a . . . . 
. . . . . a a a a a a . . . . . 
. . . . . a a . a a . . . . . . 
. . . . a a . . a a a a . . . . 
. . a a a . . a a . . a a . . . 
. a a . . . . a . . . . a a a . 
. . a . . a a a . . . . . . a . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . 7 7 f 7 f 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . 7 7 . 7 . 7 . 7 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100008080808080808080808080808080808080808080808080808080808080808080808080808080808080808080508080808080808050808080808080808080808080808080508080608080808080808080708080808080808080808080807080808080808080808080805080808080808080808080808080808080808080808080806080808080808080808080805080808080808080808050808080808050808080805080808080808080808080508080808080808080808080808070808080808070808080808080608080808080808080808080808080808080808080808080808080808080808080808080808040804040404040404040404040808040404`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . 2 . . 
. . . . . . . 2 . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1],
            TileScale.Sixteen
        ))
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass1)
info.startCountdown(15)
myEnemy.follow(mySprite, 73)
