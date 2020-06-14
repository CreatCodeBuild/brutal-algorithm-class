import Phaser from "phaser";
import * as csp from "../lib/csp";

export async function moveTo(scene, source, destination, speed, maxtime?): Promise<void> {
    scene.physics.moveToObject(source, destination, speed, maxtime);
    while (true) {
        await csp.sleep(16.6); // 60 fps
        var distance = Phaser.Math.Distance.Between(source.x, source.y, destination.x, destination.y);
        //   console.log(body.speed, body.position);
        // https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.ArcadePhysics.html#moveTo__anchor
        // moveTo moves to the direction indefinitely without stop.
        // https://phaser.io/examples/v3/view/physics/arcade/move-and-stop-at-position
        // todo: need to check distance and stop
        if (distance < 10) {
            source.body.reset(destination.x, destination.y);
            return;
        }
    }
}
