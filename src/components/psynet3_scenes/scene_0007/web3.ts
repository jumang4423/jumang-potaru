import {Vec2, Vec3, WinType, DataObjType, draw_portal_link} from '../useful';

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
    smsm_img: undefined,
    pc_img_arr: []
  },
  Scenes: {},
  States: {
    line_pos: 0,
    line_width: 1,
    img_flower_rotation: 0,
    smsm_pos: new Vec2(Math.random() * (windowInfo.width - 120), Math.random() * (windowInfo.height - 120)),
    smsm_size: new Vec2( 120, 120 ),
    smsm_direction: new Vec2( 5, 5 ),
  }
}

function draw_background_lines(p, dataObj: DataObjType, windowInfo: WinType) {
  dataObj.States.line_width = Math.sin(p.millis() / 1000) * 10 + 20;
  const mousex = p.mouseX;
  dataObj.States.line_pos += 1;
  if (dataObj.States.line_pos > dataObj.States.line_width) {
    dataObj.States.line_pos = 0;
  }

  p.push()

  // vertical lines
  for (let i = 0; i < windowInfo.width / dataObj.States.line_width; i++) {
    p.stroke(100, 200, 100, 100);
    p.line(i * dataObj.States.line_width, 0, i * dataObj.States.line_width, windowInfo.height);
  }

  // horizontal lines
  for (let i = 0; i < windowInfo.height / dataObj.States.line_width; i++) {
    p.stroke(100, 200, 100, 100);
    p.line(0, i * dataObj.States.line_width, windowInfo.width, i * dataObj.States.line_width);
  }

  p.pop()
}

function draw_img_flower(p, dataObj: DataObjType, windowInfo: WinType) {
  dataObj.States.img_flower_rotation += 0.01;

  p.push()
  p.translate(windowInfo.width / 2, windowInfo.height / 2);
  p.rotate(dataObj.States.img_flower_rotation);
  for (let i = 0; i < dataObj.Imgs.pc_img_arr.length; i++) {
    p.image(dataObj.Imgs.pc_img_arr[i], 50, 50, 200, 200);
    p.rotate( 360 / dataObj.Imgs.pc_img_arr.length * i + dataObj.States.img_flower_rotation );
  }



  p.pop()
}

function draw_smsm(p, dataObj: DataObjType, windowInfo: WinType) {
  dataObj.States.smsm_pos.x += dataObj.States.smsm_direction.x;
  dataObj.States.smsm_pos.y += dataObj.States.smsm_direction.y;

  if (dataObj.States.smsm_pos.x < 0) {
    dataObj.States.smsm_direction.x = -dataObj.States.smsm_direction.x;
  }

  if (dataObj.States.smsm_pos.x > windowInfo.width - dataObj.States.smsm_size.x) {
    dataObj.States.smsm_direction.x = -dataObj.States.smsm_direction.x;
  }

  if (dataObj.States.smsm_pos.y < 0) {
    dataObj.States.smsm_direction.y = -dataObj.States.smsm_direction.y;
  }

  if (dataObj.States.smsm_pos.y > windowInfo.height - dataObj.States.smsm_size.y) {
    dataObj.States.smsm_direction.y = -dataObj.States.smsm_direction.y;
  }

  p.push()
  p.translate(dataObj.States.smsm_pos.x, dataObj.States.smsm_pos.y);
  p.image(dataObj.Imgs.smsm_img, 0, 0, dataObj.States.smsm_size.x, dataObj.States.smsm_size.y);
  p.pop()
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');
    data_obj.Imgs.smsm_img = p.loadImage('/scene_0007/smsm.png');

    // set pc_img_arr
    data_obj.Imgs.pc_img_arr.push(p.loadImage('/scene_0007/pc1.png'));
    data_obj.Imgs.pc_img_arr.push(p.loadImage('/scene_0007/pc2.png'));
    data_obj.Imgs.pc_img_arr.push(p.loadImage('/scene_0007/pc3.png'));
    data_obj.Imgs.pc_img_arr.push(p.loadImage('/scene_0007/pc4.png'));
    data_obj.Imgs.pc_img_arr.push(p.loadImage('/scene_0007/pc5.png'));
  }

  // view
  p.draw = function () {
    p.background(255,255,255,25);
    draw_background_lines(p, data_obj, windowInfo);
    draw_smsm(p, data_obj, windowInfo);
    draw_img_flower(p, data_obj, windowInfo);
  }

}

export default sketch;
