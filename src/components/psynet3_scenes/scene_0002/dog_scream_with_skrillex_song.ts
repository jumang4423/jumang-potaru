import {Vec2, Vec3, genRandomColor, WinType, DataObjType, draw_portal_link} from '../useful';


const windowInfo: WinType = {
  width: 950,
  height: 540,
  fps: 30
}

let data_obj: DataObjType = {
  Fonts: {
    body_font: undefined,
  },
  Imgs: {
    corn_dog_img: undefined,
  },
  Scenes: {
    to_scene_0003: {
      to_sketch_id: "3",
      index_state: 0,
      speed: 2,
      pos: new Vec2(485, 395),
      size: new Vec2(90,90),
      images: [],
    },
    to_scene_0005: {
      to_sketch_id: "5", // not yet
      index_state: 0,
      speed: 2,
      pos: new Vec2(585, 395),
      size: new Vec2(90,90),
      images: [],
    }
  },
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
    dataObj.States.dog_back_pos_x = -dataObj.Imgs.corn_dog_img.width * 2;
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
  p.translate(windowInfo.width / 2 - 200, windowInfo.height / 2);
  p.scale(1.2 + 0.3 * Math.sin(clock / 30), 1.2 + 0.3 * Math.cos(clock / 30));
  p.image(dataObj.Imgs.corn_dog_img, -dataObj.Imgs.corn_dog_img.width / 2, -dataObj.Imgs.corn_dog_img.height / 2);

  p.pop();
}

function draw_play_button(p, dataObj: DataObjType, windowInfo: WinType) {
  const clock = Math.round(p.millis());
  p.push();
  // p.translate(windowInfo.width / 2, windowInfo.height / 2);
  p.fill(255);
  p.textSize(40);
  p.stroke(0,0,255);
  p.textAlign(p.CENTER, p.CENTER);
  p.text('PLAY', 100, 60);
  p.text('PLAY', 100, 60);

  p.fill(255);
  p.textSize(50);
  p.textAlign(p.CENTER, p.CENTER);
  p.text('-- : --', 800, 60);

  p.fill(255);
  p.textSize(40);
  p.textAlign(p.CENTER, p.CENTER);
  p.text('SLP   0:00:'+ clock, 180, 460);
  p.pop();
}

function draw_dog_tooltip(p, dataObj: DataObjType, windowInfo: WinType) {
  p.push();
  p.fill(255);
  p.stroke(0);
  p.strokeWeight(0);
  // use vertix
  p.beginShape();
  p.vertex(350, 300);
  p.vertex(450, 400);
  p.vertex(550, 350);
  p.endShape(p.CLOSE);

  // use vertix
  p.beginShape();
  p.vertex(450, 350);
  p.vertex(900, 350);
  p.vertex(900, 500);
  p.vertex(450, 500);
  p.endShape(p.CLOSE);

  p.textFont(dataObj.Fonts.body_font);
  p.textSize(20);
  p.fill(100);
  p.text('dog: welcome to internet!! the best place wof wof', 480, 380);

  p.pop();

}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Imgs.corn_dog_img = p.loadImage('/scene_0002/corn_dog.png');
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');

    // scene_0003 link images loader
    data_obj.Scenes.to_scene_0003.images.push(p.loadImage('/scene_0002/flo.png'));
    data_obj.Scenes.to_scene_0003.images.push(p.loadImage('/scene_0002/girl.png'));
    data_obj.Scenes.to_scene_0003.images.push(p.loadImage('/scene_0002/ju.png'));
    data_obj.Scenes.to_scene_0003.images.push(p.loadImage('/scene_0002/mos.png'));
    data_obj.Scenes.to_scene_0003.images.push(p.loadImage('/scene_0002/rap.png'));

    // scene_0005 link images loader
    data_obj.Scenes.to_scene_0005.images.push(p.loadImage('/scene_0002/wi.png'));
    data_obj.Scenes.to_scene_0005.images.push(p.loadImage('/scene_0002/piz.png'));
    data_obj.Scenes.to_scene_0005.images.push(p.loadImage('/scene_0002/ape.png'));
    data_obj.Scenes.to_scene_0005.images.push(p.loadImage('/scene_0002/gala.png'));
  }

  // view
  p.draw = function () {
    const clock = Math.round(p.millis());
    if (clock % 3 === 0) {
      data_obj.States.background_color = genRandomColor(200, 255);
    }

    p.background(data_obj.States.background_color.x, data_obj.States.background_color.y, data_obj.States.background_color.z);
    draw_dog_going_x(p, data_obj, windowInfo);
    draw_dog_back(p, data_obj, windowInfo);
    draw_play_button(p, data_obj, windowInfo);
    draw_dog_tooltip(p, data_obj, windowInfo);

    // show links
    draw_portal_link(p, data_obj.Scenes.to_scene_0003);
    draw_portal_link(p, data_obj.Scenes.to_scene_0005);
  }

}

export default sketch;
