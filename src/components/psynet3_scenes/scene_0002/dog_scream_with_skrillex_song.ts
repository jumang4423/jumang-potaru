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
    dog_back_pos_x: 0,
    dog_back_pos_x_is_vertical: false,
    dogPoints: [
      new Vec2(0, 0),
      new Vec2(0, windowInfo.height),
      new Vec2(windowInfo.width, windowInfo.height),
      new Vec2(windowInfo.width, 0),
    ]
  }
}

function draw_dog_going_x(p, dataObj: DataObjType, windowInfo: WinType) {

  dataObj.States.dog_back_pos_x = dataObj.States.dog_back_pos_x + 20;
  if (dataObj.States.dog_back_pos_x > windowInfo.width + dataObj.Imgs.corn_dog_img.width) {
    dataObj.States.dog_back_pos_x = 0;
    dataObj.States.dog_back_pos_x_is_vertical = !dataObj.States.dog_back_pos_x_is_vertical;
  }

  p.push();
  // dog going x from left to right
  p.translate(dataObj.States.dog_back_pos_x, dataObj.Imgs.corn_dog_img.height / 2);

  if (dataObj.States.dog_back_pos_x_is_vertical) {
    p.scale(2, 0.5);
  } else {
    p.scale(0.5, 2);
  }


  p.image(dataObj.Imgs.corn_dog_img, -dataObj.Imgs.corn_dog_img.width / 2, -dataObj.Imgs.corn_dog_img.height / 2 + windowInfo.height / 4);

  p.pop();

}

function draw_dog_back(p, dataObj: DataObjType, windowInfo: WinType) {
  const clock = Math.round(p.millis());
  // draw corn dog
  p.push();

  // put img center , corn_dog_img
  p.translate(windowInfo.width / 2, windowInfo.height / 2);
  p.scale(1.2 + 0.3 * Math.sin(clock / 30), 1.2 + 0.3 * Math.cos(clock / 30));
  p.image(dataObj.Imgs.corn_dog_img, -dataObj.Imgs.corn_dog_img.width / 2, -dataObj.Imgs.corn_dog_img.height / 2);

  p.pop();

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

    draw_dog_going_x(p, data_obj, windowInfo);

    draw_dog_back(p, data_obj, windowInfo);

  }

}

export default sketch;
