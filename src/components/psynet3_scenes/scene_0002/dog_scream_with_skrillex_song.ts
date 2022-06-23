import {Vec2, Vec3, genRandomColor, WinType, DataObjType} from '../useful';


const windowInfo: WinType = {
  width: 950,
  height: 540,
  fps: 30
}

let data_obj: DataObjType = {
  Fonts: {},
  Imgs: {
    corn_dog_img: undefined,
  },
  Scenes: {},
  States: {
    background_color: genRandomColor(200, 255),
    dogPoints: [
      new Vec2(0, 0),
      new Vec2(0, windowInfo.height),
      new Vec2(windowInfo.width, windowInfo.height),
      new Vec2(windowInfo.width, 0),
    ]
  }
}


function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Imgs.corn_dog_img = p.loadImage('/scene_0002/corn_dog.png');
  }

  // view
  p.draw = function () {
    const clock = Math.round(p.millis());

    if (clock % 2 === 0) {
      data_obj.States.background_color = genRandomColor(200, 255);

    }

    p.background(data_obj.States.background_color.x, data_obj.States.background_color.y, data_obj.States.background_color.z);
    // draw corn dog
    p.push();

    // put img center , corn_dog_img
    p.translate(windowInfo.width / 2, windowInfo.height / 2);
    p.scale(1.2 + 0.3 * Math.sin(clock / 30), 1.2 + 0.3 * Math.cos(clock / 30));
    p.image(data_obj.Imgs.corn_dog_img, -data_obj.Imgs.corn_dog_img.width / 2, -data_obj.Imgs.corn_dog_img.height / 2);

    p.pop();

  }

}

export default sketch;
