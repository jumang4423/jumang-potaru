import {Vec2, Vec3,  WinType, DataObjType } from '../useful';

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
    dri_img: undefined,
    kan_img: undefined,
    fl_img: undefined,
    hasi_img: undefined,
    neko_img: undefined,
    play: undefined,
  },
  Scenes: {
  },
  States: {
    dri_pos_x: Math.floor(Math.random() * windowInfo.width),
    kan_pos_y: Math.floor(Math.random() * windowInfo.height),
    fl_pos_x: Math.floor(Math.random() * windowInfo.width),
    hasi_pos_y: Math.floor(Math.random() * windowInfo.height),
    neko_pos_x: Math.floor(Math.random() * windowInfo.width),
  }
}

function draw_imgs_going(p, dataObj: DataObjType, windowInfo: WinType) {
  dataObj.States.dri_pos_x = dataObj.States.dri_pos_x + 20;
  if (dataObj.States.dri_pos_x > windowInfo.width + dataObj.Imgs.dri_img.width) {
    dataObj.States.dri_pos_x = -dataObj.Imgs.dri_img.width * 2;
  }
  dataObj.States.kan_pos_y = dataObj.States.kan_pos_y + 20;
  if (dataObj.States.kan_pos_y > windowInfo.height + dataObj.Imgs.kan_img.height) {
    dataObj.States.kan_pos_y = -dataObj.Imgs.kan_img.height * 2;
  }
  dataObj.States.fl_pos_x = dataObj.States.fl_pos_x + 20;
  if (dataObj.States.fl_pos_x > windowInfo.width + dataObj.Imgs.fl_img.width) {
    dataObj.States.fl_pos_x = -dataObj.Imgs.fl_img.width * 2;
  }
  dataObj.States.hasi_pos_y = dataObj.States.hasi_pos_y + 20;
  if (dataObj.States.hasi_pos_y > windowInfo.height + dataObj.Imgs.hasi_img.height) {
    dataObj.States.hasi_pos_y = -dataObj.Imgs.hasi_img.height * 2;
  }
  dataObj.States.neko_pos_x = dataObj.States.neko_pos_x + 20;
  if (dataObj.States.neko_pos_x > windowInfo.width + dataObj.Imgs.neko_img.width) {
    dataObj.States.neko_pos_x = -dataObj.Imgs.neko_img.width * 2;
  }

  p.push();

  p.image(dataObj.Imgs.dri_img, dataObj.States.dri_pos_x, Math.random() * windowInfo.height);
  p.image(dataObj.Imgs.kan_img, Math.random() * windowInfo.width, dataObj.States.kan_pos_y);
  p.image(dataObj.Imgs.fl_img, dataObj.States.fl_pos_x, Math.random() * windowInfo.height);
  p.image(dataObj.Imgs.hasi_img, Math.random() * windowInfo.width, dataObj.States.hasi_pos_y);
  p.image(dataObj.Imgs.neko_img, dataObj.States.neko_pos_x, Math.random() * windowInfo.height);
}

function draw_saisei_text_at(p, pos: Vec2, col: Vec3) {
  p.push();
  p.textFont(data_obj.Fonts.body_font);
  p.textSize(120);
  p.textAlign(p.CENTER, p.CENTER);
  p.fill( col.x, col.y, col.z);
  p.textFont('Helvetica');
  p.text('再生', windowInfo.width / 2 + pos.x, windowInfo.height / 2 + pos.y  );
  p.pop();
}

function draw_play_img(p) {
  p.push();
  p.translate(windowInfo.width / 2, windowInfo.height / 2);
  p.scale(1.5, 1);
  p.image(data_obj.Imgs.play, -data_obj.Imgs.play.width / 2, -data_obj.Imgs.play.height / 2);
  p.pop();
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');

    // load imgs
    data_obj.Imgs.dri_img = p.loadImage('/scene_0004/dri.png');
    data_obj.Imgs.kan_img = p.loadImage('/scene_0004/kan.png');
    data_obj.Imgs.fl_img = p.loadImage('/scene_0004/fl.png');
    data_obj.Imgs.hasi_img = p.loadImage('/scene_0004/hasi.png');
    data_obj.Imgs.neko_img = p.loadImage('/scene_0004/neko.png');
    data_obj.Imgs.play = p.loadImage('/scene_0004/play.png');
  }

  // view
  p.draw = function () {
    draw_imgs_going(p, data_obj, windowInfo);
    draw_play_img(p);
    draw_saisei_text_at(p, new Vec2(3, 3), new Vec3(0, 255, 0));
    draw_saisei_text_at(p, new Vec2(0, 0), new Vec3(0, 0, 255));
  }

}

export default sketch;
