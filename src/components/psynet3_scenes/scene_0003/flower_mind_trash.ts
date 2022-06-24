import {Vec2, Vec3, genRandomColor, WinType, DataObjType, draw_portal_link} from '../useful';

class JumangoParticle {
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  img_index: number;

  constructor(p, img_index) {
    this.x = p.random(0, windowInfo.width);
    this.y = p.random(0, windowInfo.height);
    this.r = p.random(32, 128);
    this.xSpeed = p.random(-2, 2);
    this.ySpeed = p.random(-2, 2);
    this.img_index = img_index;
  }

  createParticle(p, dataObj: DataObjType, windowInfo: WinType) {
    p.noStroke();
    p.image(dataObj.States.img_variation[this.img_index], this.x, this.y, this.r, this.r);
  }

  moveParticle(windowInfo: WinType) {
    if (this.x < 0 || this.x > windowInfo.width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > windowInfo.height) {
      this.ySpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(p, particles, dataObj) {
    particles.forEach(element => {
      let dis = p.dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        const ran_color = genRandomColor(100, 255);
        p.stroke(ran_color.x, ran_color.y, ran_color.z);
        p.strokeWeight(1);
        p.line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

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
    jumango_img: undefined,
  },
  Scenes: {
    to_scene_0004: {
      to_sketch_id: "4",
      index_state: 0,
      speed: 2,
      pos: new Vec2(285, 195),
      size: new Vec2(240,240),
      images: [],
    },
    to_scene_0006: {
      to_sketch_id: "6",
      index_state: 0,
      speed: 4,
      pos: new Vec2(600, 320),
      size: new Vec2(200,150),
      images: [],
    }
  },
  States: {
    // F7FBFF
    jumango_particles: [],
    mouse_rotation: 0,
    img_variation: [],
    flower_position: new Vec2(100, 100),
    background_color: new Vec3(255, 255, 255),
  }
}



function draw_flower(p, dataObj: DataObjType, windowInfo: WinType) {
  const flower_size = 60;
  dataObj.States.flower_position.x = p.mouseX;
  dataObj.States.flower_position.y = p.mouseY;
  dataObj.States.mouse_rotation += 0.1;

  p.push();
  p.fill( 200, 255, 200 );
  p.stroke( 100,100,100, 100 );
  p.smooth();

  p.translate(dataObj.States.flower_position.x, dataObj.States.flower_position.y);

  p.rotate(dataObj.States.mouse_rotation);

  for (let i = 0; i < 5; i++) {
    p.ellipse(0, -40, flower_size, flower_size);
    p.rotate(p.radians(72));
  }

  p.fill('#fff9bb'); // light yellow
  p.ellipse(0, 0, flower_size, flower_size);
  p.pop();
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);

    // load img variation
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/flo2.png'));
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/nek.png'));
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/ti.png'));
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/wic.png'));
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/rap2.png'));
    data_obj.States.img_variation.push(p.loadImage('/scene_0003/thre.png'));

    data_obj.States.jumango_particles = [];

    for (let i = 0; i < 64; i++) {
      const img_index = p.floor(p.random(0, data_obj.States.img_variation.length));
      data_obj.States.jumango_particles.push(new JumangoParticle(p, img_index));
    }
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');

    // load scene4 img
    data_obj.Scenes.to_scene_0004.images.push(p.loadImage('/scene_0004/dri.png'));
    data_obj.Scenes.to_scene_0004.images.push(p.loadImage('/scene_0004/kan.png'));
    data_obj.Scenes.to_scene_0004.images.push(p.loadImage('/scene_0004/fl.png'));
    data_obj.Scenes.to_scene_0004.images.push(p.loadImage('/scene_0004/hasi.png'));
    data_obj.Scenes.to_scene_0004.images.push(p.loadImage('/scene_0004/neko.png'));

    // load scene6 img
    data_obj.Scenes.to_scene_0006.images.push(p.loadImage('/scene_0006/pc.png'));
    data_obj.Scenes.to_scene_0006.images.push(p.loadImage('/scene_0006/pc2.png'));
    data_obj.Scenes.to_scene_0006.images.push(p.loadImage('/scene_0006/pud.png'));
    data_obj.Scenes.to_scene_0006.images.push(p.loadImage('/scene_0006/smi.png'));
  }

  // view
  p.draw = function () {
    data_obj.States.jumango_particles.forEach(element => {
      element.createParticle(p, data_obj, windowInfo);
      element.moveParticle(windowInfo);
      element.joinParticles(p, data_obj.States.jumango_particles, data_obj);
    });

    // links
    draw_portal_link(p, data_obj.Scenes.to_scene_0004)
    draw_portal_link(p, data_obj.Scenes.to_scene_0006)

    draw_flower(p, data_obj, windowInfo);
  }

}

export default sketch;
