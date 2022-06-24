import {Vec2, Vec3,  WinType, DataObjType } from '../useful';
import {func} from "prop-types";

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
  },
  Scenes: {
  },
  States: {
    command_histories: [],
  }
}

const shell_command_list = [
  'cd PROJECTS/lisp/lisp/lisp.lisp',
  './lisp.lisp',
  'cal',
  'neofetch',
  'yarn start',
  'python3 start_batch.py',
  'sudo rm rf PROJECTS/school',
  'sudo su',
  'sudo nixos-rebuild switch',
  'rm -rf /etc',
  'sudo exit',
  'jumango l grep "how to kill this pc"',
  'echo "bruh"',
]

function draw_all_command_histories(p, dataObj: DataObjType, windowInfo: WinType, pos: Vec2) {
  for (let i = 0; i < dataObj.States.command_histories.length; i++) {
    const command_history = dataObj.States.command_histories[i];
    p.textFont(dataObj.Fonts.body_font);
    p.textSize(20);
    p.fill(0,255,0);
    p.text(command_history, pos.x, i * 20 + pos.y);
  }
}


function sketch(p) {
  p.setup = function () {
    p.createCanvas(windowInfo.width, windowInfo.height);
    p.frameRate(windowInfo.fps);
  };

  p.preload = function () {
    data_obj.Fonts.body_font = p.loadFont('/leadcoat.ttf');

  }

  // view
  p.draw = function () {
    data_obj.States.command_histories.push(shell_command_list[p.floor(p.random(0, shell_command_list.length))]);
    if (data_obj.States.command_histories.length > 28) {
      data_obj.States.command_histories.shift();
    }

    p.background(100);

    draw_all_command_histories(p, data_obj, windowInfo, new Vec2(0, 0));
    draw_all_command_histories(p, data_obj, windowInfo, new Vec2(300, 0));
    draw_all_command_histories(p, data_obj, windowInfo, new Vec2(600, 0));

  }

}

export default sketch;
