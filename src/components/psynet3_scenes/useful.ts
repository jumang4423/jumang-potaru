export class Vec2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Vec3 {
  x = 0;
  y = 0;
  z = 0;
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}


export type ToSketchType = {
  to_sketch_id: string, // specify the id of link sketch id
  index_state: number, // for state inside
  speed: number, // for speed
  pos: Vec2, // rec pos
  size: Vec2, // rec size
  images: Array<HTMLImageElement> // load images here.
}

export type WinType = {
  width: number,
  height: number,
  fps: number
}

export type DataObjType = {
  Fonts: any,
  Imgs: any,
  Scenes: any,
  States: any,
}

export function draw_portal_link(p, data_obj: ToSketchType) {
  const clock = Math.round(p.millis());
  if (clock % data_obj.speed === 0) {
    data_obj.index_state = (data_obj.index_state + 1) % data_obj.images.length;
  }
  p.push();
  p.textAlign(p.CENTER, p.CENTER);
  p.image(data_obj.images[data_obj.index_state], data_obj.pos.x, data_obj.pos.y, data_obj.size.x, data_obj.size.y);
  p.pop();

  if (p.mouseIsPressed) {
    // if mouse position is in draw portal link, change the scene
    if (p.mouseX > data_obj.pos.x && p.mouseX < data_obj.pos.x + data_obj.size.x &&
      p.mouseY > data_obj.pos.y && p.mouseY < data_obj.pos.y + data_obj.size.y) {
      localStorage.setItem('currentSketchId', data_obj.to_sketch_id);
    }
  }
}

export function genRandomColor(from: number = 0, to: number = 255) {
  return new Vec3( Math.random() * (to - from) + from, Math.random() * (to - from) + from, Math.random() * (to - from) + from);
}
