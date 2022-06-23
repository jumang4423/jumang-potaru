import {Vec2, Vec3, draw_portal_link, WinType, DataObjType} from '../useful';


const windowInfo: WinType = {
  width: 950,
  height: 540,
  fps: 60
}

let data_obj: DataObjType = {
  Fonts: {
    standard_font: undefined,
    body_font: undefined,
  },
  Imgs: {
    psychenet_bannerImg: undefined,
    mind_gif: undefined,
  },
  Scenes: {
    to_scene_0002: {
      to_sketch_id: "2",
      index_state: 0,
      speed: 4,
      pos: new Vec2(660, 270),
      size: new Vec2(190,190),
      images: [],
    }
  },
  States: {}
}

function draw_no_pride_internet_text(p, color: Vec3, pos: Vec2) {
  p.push();
  const no_pride_internet_text = 'enter psychenet'
  let angle1 = p.radians(24);
  p.textAlign(p.CENTER, p.CENTER);
  p.fill( color.x, color.y, color.z);
  p.textFont(data_obj.Fonts.standard_font, Math.sin(p.millis() / 100) + 32);
  p.rotate(angle1);
  p.translate(windowInfo.width / 6, -windowInfo.height);
  p.text(no_pride_internet_text, pos.x, pos.y);
  p.pop();
}

function draw_welcome_texts(p, dataObj: DataObjType) {
  p.push();
  p.fill(100, 100, 100);
  p.textFont(dataObj.Fonts.body_font, 24);
  p.text('welcome to psychenet, a collection of art nodes.', 70, 260);
  p.text('no copyright and no pride internet!', 70, 290);
  p.text('every art nodes are created...', 70, 320);
  p.text('by my internet friends(psychenet gang)', 70, 350);
  p.text('find new imaginations by', 60, 410);

  // background rec
  p.fill(255, 255, 255);
  p.rect(60, 420, 400, 50);

  p.textFont(dataObj.Fonts.body_font, 32);
  p.scale(1, 1);
  p.fill(100, 100, 100);
  p.text('clicking the "mind portal"', 75, 458);
  p.textFont("Arial", 32);
  p.text('->', 405, 455);
  p.pop();
}



function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.standard_font = p.loadFont('/Outwrite.ttf');
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');
    data_obj.Imgs.psychenet_bannerImg = p.loadImage('/scene_0001/psychenet_banner.png');

    // scene_0002 link images loader
    data_obj.Scenes.to_scene_0002.images.push(p.loadImage('/scene_0001/corn_dog.png'));
    data_obj.Scenes.to_scene_0002.images.push(p.loadImage('/scene_0001/dog_laugh.png'));
    data_obj.Scenes.to_scene_0002.images.push(p.loadImage('/scene_0001/dog_nose.png'));
    data_obj.Scenes.to_scene_0002.images.push(p.loadImage('/scene_0001/skrillex_flower.png'));
  }

  // view
  p.draw = function () {
    p.background(240);
    // draw psychenet banner
    p.image(data_obj.Imgs.psychenet_bannerImg, windowInfo.width / 2 - data_obj.Imgs.psychenet_bannerImg.width / 6, 32, data_obj.Imgs.psychenet_bannerImg.width / 3, data_obj.Imgs.psychenet_bannerImg.height / 3);

    // show links
    draw_portal_link(p, data_obj.Scenes.to_scene_0002);

    // show welcome text
    draw_welcome_texts(p, data_obj);

    // draw no pride internet text
    draw_no_pride_internet_text(p, new Vec3(100, 100, 200), new Vec2(windowInfo.width / 2 + 202, windowInfo.height / 2 + 282));
    draw_no_pride_internet_text(p, new Vec3(200, 200, 200), new Vec2(windowInfo.width / 2 + 200, windowInfo.height / 2 + 280));
  }

}

export default sketch;
