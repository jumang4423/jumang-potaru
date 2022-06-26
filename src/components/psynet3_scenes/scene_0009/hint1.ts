import {Vec2, Vec3, WinType, DataObjType, draw_portal_link} from '../useful';

const windowInfo: WinType = {
  width: 950,
  height: 540,
  fps: 60
}

let data_obj: DataObjType = {
  Fonts: {
    body_font: undefined,
  },
  Imgs: {
    eyes_img: [],
    sky_img: undefined,
  },
  Scenes: {},
  States: {}
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');

    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye1.png'));
    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye2.png'));
    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye3.png'));
    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye4.png'));
    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye5.png'));
    data_obj.Imgs.eyes_img.push(p.loadImage('/scene_0009/eye6.png'));

    data_obj.Imgs.sky_img = p.loadImage('/scene_0009/sky.png');
  }

  // view
  p.draw = function () {
    p.background(200, 200, 200, 2);

    // opacity is 0.1
    p.tint(255, 255, 255, 100);
    p.image(data_obj.Imgs.eyes_img[Math.random() * data_obj.Imgs.eyes_img.length | 0], Math.random() * windowInfo.width, Math.random() * windowInfo.height);


    // show sky as background
    p.tint(255, 255, 255, 255);
    p.image(data_obj.Imgs.sky_img, 70, 70, 600, 100);

    {
      p.textFont(data_obj.Fonts.body_font);
      p.textSize(28);
      p.fill(100, 100, 255, 255);
      p.text("hint1", 102, 112);
      p.textSize(36);
      p.text("first hint is:", 102, 152);
      p.textFont('Arial');
      p.text("0X32nLWT1DUKnaj", 282, 150)
    }

    {
      p.textFont(data_obj.Fonts.body_font);
      p.textSize(28);
      p.fill(255, 255, 255, 255);
      p.text("hint1", 100, 110);
      p.textSize(36);
      p.text("first hint is:", 100, 150);
      p.textFont('Arial');
      p.text("0X32nLWT1DUKnaj", 280, 148)
    }
  }

}

export default sketch;
