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
  }

  p.draw = function () {
    p.translate(windowInfo.width / 2, windowInfo.height / 2);
    for (let i = 10; i < 100; i++) {
      let x = p.random(0, 1)
      let y = p.random(0, 1)
      p.fill((p.dist(x, y, 0, 0) + Math.random() * 100), (p.dist(x, y, 0, 0) + Math.random() * 100), (p.dist(x, y, 0, 0) + Math.random() * 100));
      p.fill(p.random(255), p.random(255), p.random(255), 10);
      p.noStroke();
      p.ellipse(x, y, p.random(700), p.random(700));
      p.fill(p.random(255), p.random(255), p.random(255));
      p.noStroke();
      p.ellipse(x, y, p.random(150), p.random(150));
    }
  }
}

export default sketch;
