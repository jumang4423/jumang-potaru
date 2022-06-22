import React from "react"
import {commmand_tags} from "@/components/NyshWindow"

export enum dirEnum {
  txt,
  app,
}

export interface history_type {
  name: string
  date: Date
}

export type dirType = {
  isFolder: boolean
  name: string
  contents?: Array<dirType>
  file_type?: dirEnum
  scripts?: Array<string>
}

export const updateFiles = (files: Array<dirType>): void => {
  localStorage.setItem("mounted_dirs", JSON.stringify(files))
}

export const commandParser = (command: string) => {
  const splited = command.split(" ")
  return {
    com: splited[0],
    arg: splited[1],
    arg2: splited[2],
    arg3: splited[3],
  }
}

// functions
export const loadWasm = async (potaru: string, setModules: Function) => {
  await import("../../static/" + potaru + "_wasm").then(modules =>
    setModules(modules)
  )
}

// loadNylang
export const loadNylang = async (setModules: Function) => {
  await import("nylang" + "").then(modules => setModules(modules))
}

// loadNylisp
export const loadNylisp = async (setModules: Function) => {
  await import("nylisp_wasm" + "").then(modules => setModules(modules))
}

export const put_into_history = (
  command: Array<string>,
  histories: Array<object>,
  maxSize: number
) => {
  let insertValue = Object.assign(new Array(), histories)

  command.forEach((st: string) => {

    if (st.includes("alert")) {
      // alertを除外し、それ以降を表示
      const display_tex = st.split(' ').slice(1).join(' ')
      if (display_tex === '') {
        return
      }
      alert(st.split(' ').slice(1).join(' '))
      return
    }

    if (insertValue.length + 1 <= maxSize) {
      insertValue.push({
        id: insertValue.length + 1,
        com: st,
        col: isMessage(st),
        tag: tagParser(st),
      })
    } else {
      // 入れるべき値がmaxSizeを超えていたら、最初の要素を削除
      insertValue = up_shift(insertValue, maxSize)
      insertValue[maxSize - 1].com = st
      insertValue[maxSize - 1].id = insertValue[maxSize - 2].id + 1
      insertValue[maxSize - 1].col = isMessage(st)
      insertValue[maxSize - 1].tag = tagParser(st)
    }
  })

  return insertValue
}

export const up_shift = (insertValue: Array<object>, maxSize: number) => {
  for (let i = 0; i < maxSize - 1; i++) {
    insertValue[i] = Object.assign({}, insertValue[i + 1])
  }
  return insertValue
}

export const isMessage = (command: string) => {
  if (command.includes("->")) {
    return "#555555"
  } else if (command.includes("-!")) {
    return "#af4b4b"
  } else if (command.includes("-o")) {
    return "#7f8e5b"
  }
  return "#333333"
}

export const tagParser = (command: string) => {
  if (command.includes("-gif")) {
    return commmand_tags.img
  }
  return commmand_tags.div
}

export const init_history = (): Array<history_type> => {
  let histories: Array<history_type> = []
  histories.push({name: "nyvim readme.md", date: new Date()})
  histories.push({name: "la", date: new Date()})
  histories.push({name: "open", date: new Date()})
  histories.push({name: "ls", date: new Date()})
  histories.push({name: "cat", date: new Date()})
  histories.push({name: "nylisp", date: new Date()})
  histories.push({name: "nylang", date: new Date()})
  histories.push({name: "clear", date: new Date()})
  histories.push({name: "transpiler_rust_nylang", date: new Date()})
  histories.push({name: "_nylang_debug", date: new Date()})
  histories.push({name: "./", date: new Date()})
  histories.push({name: "nyfetch", date: new Date()})
  histories.push({name: "whoami", date: new Date()})
  histories.push({name: "touch", date: new Date()})
  histories.push({name: "mkdir", date: new Date()})
  histories.push({name: "rm", date: new Date()})
  histories.push({name: "..", date: new Date()})
  histories.push({name: "pwd", date: new Date()})
  return histories
}

export const files: Array<dirType> = [
  {
    isFolder: false,
    file_type: dirEnum.txt,
    name: ".version",
    scripts: ["v2.0.0"],
  },
  {
    isFolder: true,
    name: "/",
    contents: [
      {
        name: "bin/",
        isFolder: true,
        contents: [
          {
            isFolder: false,
            name: "nylang",
            scripts: ["nylang is a emoji language. you can run it here with nylang run hoge.nyl"],
          },
          {
            isFolder: false,
            name: "nylisp",
            scripts: ["nylisp is a emoji lisp language. you can run it here with nylisp run hoge.nlsp"],
          },
          {
            isFolder: false,
            name: "nyvim",
            scripts: ["me personalized vim. you can also open md file with nyvim hoge.md"],
          },
        ],
      },
      {
        name: "home/",
        isFolder: true,
        contents: [
          {
            isFolder: true,
            name: "desktop/",
            contents: [
              {
                isFolder: false,
                file_type: dirEnum.app,
                name: "trash_can.nyl",
                scripts: [
                  `🐽🐽🐽 ( ".nylang/lib/__rand__.nyl" ) ;
🍙 main = 🏨 () {
   🍙 cnt = 0 ;  
    🌸 (
        🏨 ( ) {
            🎤 ( 🌹 ( 32 ) ) ;
            🍙 cnt = cnt + 1 ; 
            💨 cnt != 16 ;
        }
    ) ;
    🎤 ( "we are here!" ) ;
} ;
`,
                ],
              },
            ],
          },
          {
            isFolder: true,
            name: "downloads/",
            contents: [
              {
                isFolder: false,
                file_type: dirEnum.app,
                name: "hentai.nyl",
                scripts: [
                  `🐽🐽🐽 ( ".nylang/lib/__rand__.nyl" ) ;
🍙 main = 🏨 () {
    🍙 str = "" ;
    🍙 cnt = 0 ;
                                
    🌸 (
        🏨 ( ) {
                🎤 ( "-gif https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.z5eN4fLhPl4Qy2niXTi90QHaKy%26pid%3DApi&f=1" ) ;
            🍙 cnt = cnt + 1 ;
            💨 cnt != 5 ;
        }
    ) ;
} ;`,
                ],
              },
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "introduction.txt",
            scripts: ["type whoami to see more details about me"],
          },
        ],
      },
      {
        name: "nylisp/",
        isFolder: true,
        contents: [
          {
            isFolder: false,
            file_type: dirEnum.app,
            name: "hello_world.nlsp",
            scripts: ["😪💖hello world💔"]
          },
          {
            isFolder: false,
            file_type: dirEnum.app,
            name: "if.nlsp",
            scripts: ["💖🐶 💖🚗😪💖👍 👍 👎💔💔 😪💖alert if is working!💔 😪unexpected_if_is_broken💔"]
          }
        ]
      },
      {
        name: "nylang/",
        isFolder: true,
        contents: [
          {
            isFolder: true,
            name: "transpiler_sample_scripts/",
            contents: [
              {
                isFolder: false,
                name: "practice_01.nyl",
                file_type: dirEnum.txt,
                scripts: [
                  `
🍄🍄( "https://atcoder.jp/contests/practice/tasks/practice_1" ) ;
🍙 main = 🏨 () {
  🍙 a = 👀 ( "number" ) ;
  🍙 b = 👀 ( "number" ) ;
  🍙 c = 👀 ( "number" ) ;
  🍙 s = 👀 ( "string" ) ;
  🍄🍄( "calculation" ) ;
  🍙 calc = a + b + c ;
  🎤🎶 ( calc + " " + s ) ;
} ;
`,
                ],
              },
              {
                isFolder: false,
                name: "apg4b_cs.nyl",
                file_type: dirEnum.txt,
                scripts: [
                  `
    🍄🍄( "https://atcoder.jp/contests/apg4b/tasks/APG4b_cs" ) ;
    🍙 main = 🏨 () {
        🍙 one_year_sec = 31536000 ;
        🎤🎶 ( one_year_sec ) ;
        🎤🎶 ( one_year_sec * 2 ) ;
        🎤🎶 ( one_year_sec * 5 ) ;
        🎤🎶 ( one_year_sec * 10 ) ;
    } ;`,
                ],
              },
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "print_test.nyl",
            scripts: [
              `
🍙 main = 🏨 ( ) {
   🎤 ( "hello nylang!" ) ;
   🎤 ( "-gif https://static.hiper.cool/books/lolicon-special-6/01/lolicon-special-6-chapter-01-page-13.jpg?revision=11" ) ;
   🍙 calculated = 3 + 3 ;
   🎤 ( "3 + 3 = " + calculated ) ;
   🌸 ( 🏨 () { 
       🎤 ( "bolzoy is a dog kind" ) ;
}, 5 ) ; } ;`,
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "bubble_sort.nyl",
            scripts: [
              `
🐽🐽🐽 ( ".nylang/lib/__array__.nyl" ) ;
🐽🐽🐽 ( ".nylang/lib/__rand__.nyl" ) ;

🍙 main = 🏨 () {

    🍙 sort_num = 256 ;
    🍙 display_frequency = 16 ;
    🍙 array_print = 🏨 ( x, i ) { 
        🍙 str = "" ;
        🌸 (
            🏨 () {
                🍙 str = str + "|" ;
            }, 
            x / 2
        ) ;

        🐶 ( i % display_frequency == 0 ) {
            🎤 ( str ) ;
        }
    } ;

    🍙 un_sorted = [ ] ;

    🌸 (
        🏨 () {
            🍙 un_sorted = 🥌 ( un_sorted, __rand__random_num_zero_to_specified_number ( 50 ) + 10 );
        }, 
        sort_num
    ) ;

    🎤 ( "not sorted ( " + sort_num + " elements ): " ) ;
    __array__forEach ( un_sorted, array_print ) ;
    🎤 ( "sorted: " ) ;

    🍙 sorted = __array__sort ( un_sorted ) ;
    
    __array__forEach ( sorted, array_print ) ;

    🎤 ( "\nsorted " + sort_num + " elements!" ) ;
} ;
`,
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "random_10000_elements.nyl",
            scripts: [
              `
🐽🐽🐽 ( ".nylang/lib/__rand__.nyl" ) ;
🍙 main = 🏨 () {
    🍙 str = "" ;
    🍙 cnt = 0 ;
                                
    🌸 (
        🏨 ( ) {
            🍙 str = 🥌 ( str, __rand__random_num_zero_to_specified_number ( 999999999 ) ) ;
            🍙 cnt = cnt + 1 ;

            💨 cnt != 10192 ;
        }
    ) ;

    🎤 ( str ) ;
    🎤 ( "welcome to matrix world, neo" ) ;
} ;
`,
            ],
          },
        ],
      },
      {
        name: "social/",
        isFolder: true,
        contents: [
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "github.url",
            scripts: [
              "https://github.com/jumang4423"
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "twitter.url",
            scripts: [
              "https://twitter.com/jumang4423",
            ],
          },
          {
            isFolder: false,
            file_type: dirEnum.txt,
            name: "soundcloud.url",
            scripts: [
              "https://soundcloud.com/jumang4423"
            ],
          },
        ],
      },
      {
        name: "readme.md",
        isFolder: false,
        scripts: [
          `![cow](https://stayhipp.com/wp-content/uploads/2020/11/tenor.gif)

[=> nysh native repo](https://www.github.com/jumang4423/nysh)

# welcome to nysh ( wasm edition )
a cute shell thingy that written in rust

![crab](https://media4.giphy.com/media/2O9yUMWGYSHkI/giphy.gif?cid=ecf05e475kkmyvgehmvvuy16jhalhbc5hzdea7y14ixa71ir&rid=giphy.gif)
# wasmed features
### nyvim
     => you can edit any contents
> 'nyvim readme.md'
     => which can preview the markdown contents
### nylisp
     => you can compile emoji lisp
> nylisp hello.nlsp
[=> nylisp repo](https://www.github.com/jumang4423/nylisp)
### nylang
     => you can compile the specific program
> nylang print.nyl
> ./ print.nyl
[=> nylang repo](https://www.github.com/jumang4423/nylang)
### transpiler_rust_nylang
     => transpile the nylang code to rust code
> transpiler_rust_nylang print.nyl
> <some rust code prints and output print.rs in the same directory>


![hentai](https://media3.giphy.com/media/8xY7sOv7CbebS/giphy.gif?cid=ecf05e47x5u7ryay70354gl6jd558gxvd6aahhmexus6hvll&rid=giphy.gif&ct=g)
# basic features
### help
     => list of commands
> help
### ls (la)
     => list directory contents
> ls
### cd <directory>
     => change directory
> cd home
### pwd
     => show current path
> pwd
### touch <filename>
     => make new file
> touch hoge.nyl
### mkdir <directory>
     => make new directory
> touch projects
### rm <directory | file>
     => remove contents
> rm hoge.nyl
### clear
     => clear all terminal histories
> clear

![sonic](https://media1.giphy.com/media/vdSEJx5YEpXtm/giphy.gif?cid=ecf05e4798pl3g0dz8lct7plqlpoewiek24dxco4yg6i6su6&rid=giphy.gif)
# features for fun
### whoami
     => about me
> whoami
### nyfetch
     => like neofetch
> nyfetch
### sl
     => run sl
> sl
`,
        ],
      },
      {
        name: ".nyshrc",
        isFolder: false,
        scripts: [
          `
nylang .welcome.nyl

# escape output adding (esc) to end of line
`
        ]
      },
      {
        name: ".welcome.nyl",
        isFolder: false,
        scripts: [
          `🐽🐽🐽 ( ".nylang/lib/__rand__.nyl" ) ;
🍙 main = 🏨 () {
   🍙 cnt = 0 ;  
    🌸 (
        🏨 ( ) {
            🎤 ( 🌹 ( 129 ) ) ;
        },
        2
    ) ;
    🎤 ( "-o welcome to nysh! is a something kawaii shell" ) ;
    🎤 ( "-> 'help' command to show help" ) ;
} ;
`,
        ]
      },
    ],
  },

]

export const is_vaild_dir = (
  folder: string,
  current_dir: Array<string>,
  file_system: any
): boolean => {
  const new_path = JSON.parse(JSON.stringify(current_dir))
  new_path.push(folder + "/")

  let _watching = file_system

  for (let i = 0; i < new_path.length; i++) {
    let available = false

    for (let j = 0; j < _watching.length; j++) {
      if (_watching[j].isFolder === true && _watching[j].name === new_path[i]) {
        available = true
        _watching = _watching[j].contents
      }
    }
    if (!available) return false
  }

  return true
}

export const auto_complete = (
  temporary_command_input: string,
  current_dir: Array<string>,
  available_command: Array<string>,
  file_system: any
) => {
  let {com, arg} = commandParser(temporary_command_input)
  if (arg !== undefined) {
    const whats_in_current: Array<string> = dir_inside(current_dir, file_system)
    whats_in_current.forEach((st: string) => {
      if (st.includes(arg, 0)) {
        arg = st.includes("/") ? st.slice(0, -1) : st
      }
    })
  } else {
    for (let i = 0; i < available_command.length; i++) {
      if (available_command[i].includes(com, 0)) {
        com = available_command[i]
        break
      }
    }
  }

  return com + (arg ? " " + arg : "")
}

export const generic_ls = (
  current_dir: Array<string>,
  file_system: any
): Array<string> => {
  const new_path = JSON.parse(JSON.stringify(current_dir))
  let _watching = file_system
  for (let i = 0; i < new_path.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (_watching[j].isFolder === true && _watching[j].name === new_path[i]) {
        _watching = _watching[j].contents
      }
    }
  }
  const consoles = []
  consoles.push(`L🗂	 ..`)
  _watching.forEach((obj: any) => {
    consoles.push(`${obj.isFolder ? "L🗂\t" : " 📃\t"} ${obj.name}`)
  })

  return consoles
}

export const generic_la = (
  current_dir: Array<string>,
  file_system: any
): Array<string> => {
  const new_path = JSON.parse(JSON.stringify(current_dir))
  let _watching = file_system
  for (let i = 0; i < new_path.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (_watching[j].isFolder === true && _watching[j].name === new_path[i]) {
        _watching = _watching[j].contents
      }
    }
  }

  const consoles = []
  consoles.push(`L🗂 ---- \t -----  || ..`)
  _watching.forEach((obj: any) => {
    // check obj.scripts is array or not
    const script_len_str = Array.isArray(obj.scripts) ? obj.scripts.length + ` len` : obj.contents.length + ` obj`
    const file_type_str = () => {
      if (obj.isFolder) return "directory"
      else if (obj.name.includes(".nyl")) return "nylang exp"
      else if (obj.name.includes(".nlsp")) return "nylisp exp"
      else if (obj.name.includes(".md")) return "markdown"
      else if (obj.name.includes(".url")) return "link"

      return "file"
    }

    consoles.push(`${obj.isFolder ? "L🗂" : " 📃"} ${file_type_str()} \t ${script_len_str}\t|| ${obj.name}`)
  })

  return consoles
}

export const dir_inside = (
  current_dir: Array<string>,
  file_system: any
): Array<string> => {
  const new_path = JSON.parse(JSON.stringify(current_dir))
  let _watching = file_system
  for (let i = 0; i < new_path.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (_watching[j].isFolder === true && _watching[j].name === new_path[i]) {
        _watching = _watching[j].contents
      }
    }
  }
  return _watching.map((obj: any) => {
    return obj.name
  })
}

export const cat_me = (
  file: string,
  current_dir: Array<string>,
  file_system: any
): Array<string> => {
  const new_path = JSON.parse(JSON.stringify(current_dir))
  new_path.push(file)

  let _watching = file_system

  for (let i = 0; i < new_path.length; i++) {
    let available = false
    for (let j = 0; j < _watching.length; j++) {
      if (!_watching[j].isFolder && _watching[j].name === new_path[i]) {
        return _watching[j].scripts
      }
      if (_watching[j].isFolder && _watching[j].name === new_path[i]) {
        available = true
        _watching = _watching[j].contents
      }
    }
    if (!available) return ["no file found"]
  }
}

export const pushHistory = (
  command: string,
  typed_history: Array<string>,
  setTyped_history: Function
) => {
  const new_array = Object.assign([], typed_history)
  new_array.pop()
  new_array.push(command)
  new_array.push("")
  setTyped_history(new_array)
}

export const showHistoryImg = (history: any) => {
  let given_img = history.com.split(" ")?.[1]
  return (
    <div className={"img_viewer"}>
      <img className={"img_round"} src={given_img} width={"500"}/>
    </div>
  )
}

export const run_command_of_dotdot = (
  command: string,
  max_size: number,
  current_dir: Array<string>,
  histories: Array<object>,
  setHistories: Function,
  setCurrent_dir: Function
): void => {
  let newdir = Object.assign([], current_dir)
  newdir.length !== 1 && newdir.pop()
  setHistories(put_into_history([command, "↓"], histories, max_size))
  setCurrent_dir(newdir)
}

export const touchFile = (
  file_system: any,
  setFile_system: Function,
  current_dir: Array<string>,
  filename: String
): void => {
  const newFilesystem = Object.assign([], file_system)

  let _watching = file_system
  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  if (filename == "" || filename == undefined || filename == null) {
    setFile_system(newFilesystem)
    return
  }

  _watching.push({
    name: filename,
    isFolder: false,
    scripts: [],
  })

  setFile_system(newFilesystem)
}

export const mkdirDir = (
  file_system: any,
  setFile_system: Function,
  current_dir: Array<string>,
  filename: String
): void => {
  const newFilesystem = Object.assign([], file_system)

  let _watching = file_system
  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  if (filename == "" || filename == undefined || filename == null) {
    setFile_system(newFilesystem)
    return
  }

  _watching.push({
    name: filename,
    isFolder: true,
    contents: [],
  })

  setFile_system(newFilesystem)
}

export const open_file = (
  file_system: any,
  current_dir: Array<string>,
  filename: String
) => {
  let _watching = file_system

  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  _watching.forEach((obj: any, index: number) => {
    if (obj.name === filename) {
      const url = _watching[index].scripts.join()
      // open the url
      window.open(url, "_blank")
      return
    }
  })


}

export const removeFileOrDir = (
  file_system: any,
  setFile_system: Function,
  current_dir: Array<string>,
  filename: String
): void => {
  const newFilesystem = Object.assign([], file_system)
  let _watching = file_system

  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  _watching.forEach((obj: any, index: number) => {
    if (obj.name === filename) {
      // delete the obj
      _watching.splice(index, 1)
    }

    if (obj.name === filename + "/") {
      // delete the obj
      _watching.splice(index, 1)
    }
  })

  setFile_system(newFilesystem)
}

export const setEditedContents = (
  file_system: any,
  setFile_system: Function,
  current_dir: Array<string>,
  filename: string,
  contents: string
): void => {
  const newFilesystem = Object.assign([], file_system)

  let _watching = file_system
  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  _watching.forEach((obj: any, index: number) => {
    if (obj.name === filename) {
      // delete the obj
      _watching[index].scripts = contents.split("\n")
    }
  })

  setFile_system(newFilesystem)
}

export const writeFile = (
  file_system: any,
  setFile_system: Function,
  current_dir: Array<string>,
  filename: string,
  contents: string
): void => {
  const newFilesystem = Object.assign([], file_system)

  let _watching = file_system
  for (let i = 0; i < current_dir.length; i++) {
    for (let j = 0; j < _watching.length; j++) {
      if (
        _watching[j].isFolder === true &&
        _watching[j].name === current_dir[i]
      ) {
        _watching = _watching[j].contents
      }
    }
  }

  _watching.forEach((obj: any, index: number) => {
    if (obj.name === filename) {
      // delete the obj
      _watching[index].scripts = contents.split("\n")
    }
  })

  setFile_system(newFilesystem)
}

// open .nyshrc file and execute the commands. and returns the output
export const nyshrcOutput = (file_system: any, current_dir: Array<string>): Array<string> => {
  // make sure the current_dir is /
  if (current_dir.length !== 1) {
    return []
  }
  if (current_dir[0] !== "/") {
    return []
  }

  // check .nyshrc exists
  const dotNyshRcCatResult = cat_me(".nyshrc", current_dir, file_system)
  // if ["no file found"], return []
  if (dotNyshRcCatResult[0] === "no file found") {
    return []
  }

  let cleanedCommands = []
  dotNyshRcCatResult.forEach((line: string) => {
      if (line.length > 0) {
        const lineSplited = line.split("\n")
        lineSplited.forEach((command: string) => {
            if (command !== '') cleanedCommands.push(command)
          }
        )
      }
    }
  )

  return cleanedCommands
}
