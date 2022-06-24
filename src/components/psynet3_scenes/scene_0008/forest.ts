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
    tree_img: undefined,
    rainbow_img: undefined,
  },
  Scenes: {},
  States: {

  }
}

function draw_tree_at_mouse(p, dataObj: DataObjType, windowInfo: WinType) {
  const mousePos = new Vec2(p.mouseX, p.mouseY);
  // bigger when mouse is near the center
  const tree_size = p.dist( mousePos.x, mousePos.y, windowInfo.width/2, windowInfo.height/2 ) / 2;
  p.push()
  p.translate( -tree_size / 2, -tree_size / 2 );
  p.image(dataObj.Imgs.tree_img, mousePos.x, mousePos.y, tree_size, tree_size);
  p.pop()
}

function draw_move_mouse_text(p, dataObj: DataObjType, windowInfo: WinType) {
  p.push();
  p.fill(100, 255, 100, 150);
  p.textFont(dataObj.Fonts.body_font);
  p.textSize(15);
  p.text('move mouse', 50 + Math.random() * (windowInfo.width - 100), 50 + Math.random() * (windowInfo.height - 100));
  p.pop();
}

function draw_rainbow_center(p, dataObj: DataObjType, windowInfo: WinType) {
  p.push();
  p.translate(windowInfo.width / 2, windowInfo.height / 2);
  p.image(dataObj.Imgs.rainbow_img, -25, -25, 50, 50);
  p.pop();
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');
    data_obj.Imgs.tree_img = p.loadImage('/scene_0008/tree.png');
    data_obj.Imgs.rainbow_img = p.loadImage('/scene_0008/rainbow.png');
  }

  // view
  p.draw = function () {
    p.background(200,200,200, 2);

    draw_tree_at_mouse(p, data_obj, windowInfo);
    draw_move_mouse_text(p, data_obj, windowInfo);
    draw_rainbow_center(p, data_obj, windowInfo);
  }

}

export default sketch;
