// TODO: 汚物コード故、リファクタリング必須

import { commmand_tags } from "@/components/NyshWindow"

// ひでえtypes

export enum dirEnum {
    txt,
    app
}

export type dirType = {
    isFolder: boolean,
    name: string,
    contents?: Array<dirType>,
    file_type?: dirEnum,
    scripts?: Array<string>
}

export const commandParser = (
    command: string
) => {
    const splited = command.split(" ")
    return {
        com: splited[0], arg: splited[1]
    }
}

// functions

export const loadWasm = async (
    potaru: string,
    setModules: Function
) => {
    await import("../../static/" + potaru + "_wasm").then(modules => setModules(modules))
}

export const put_into_history = (
    command: Array<string>,
    histories: Array<object>,
    maxSize: number
) => {
    let insertValue = Object.assign(new Array, histories)

    command.forEach((st: string) => {

        if (insertValue.length + 1 <= maxSize) {
            insertValue.push({ id: insertValue.length + 1, com: st, col: isMessage(st), tag: tagParser(st) })
        } else {
            insertValue = up_shift(insertValue, maxSize)
            insertValue[maxSize - 1].com = st
            insertValue[maxSize - 1].id = insertValue[maxSize - 2].id + 1
            insertValue[maxSize - 1].col = isMessage(st)
            insertValue[maxSize - 1].tag = tagParser(st)
        }

    })

    return insertValue
}

export const up_shift = (
    insertValue: Array<object>,
    maxSize: number
) => {
    for (let i = 0; i < maxSize - 1; i++) {
        insertValue[i] = Object.assign({}, insertValue[i + 1])
    }
    return insertValue

}

export const isMessage = (
    command: string
) => {
    if (command.includes("->")) {
        return "#555555"
    } else if (command.includes("-!")) {
        return "#884444"
    } else if (command.includes("-o")) {
        return "#448844"
    }
    return "#222222"
}

export const tagParser = (
    command: string
) => {

    if (command.includes("-gif")) {
        return commmand_tags.img
    }
    return commmand_tags.div
}

export const files: Array<dirType> = [
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
                        name: "rust",
                        scripts: ["rust is way better than c++, common lisp and you (kidding)"]
                    },
                    {
                        isFolder: false,
                        name: "go",
                        scripts: ["i love golang and you?"]
                    },
                    {
                        isFolder: false,
                        name: "c",
                        scripts: ["i learned from uni and thats all"]
                    },
                    {
                        isFolder: false,
                        name: "java",
                        scripts: ["literally meh"]
                    },
                    {
                        isFolder: false,
                        name: "hsp",
                        scripts: ["Hot Soup Processor which similar to basic", "and sucks so hard"]
                    }
                ]
            },
            {
                name: "etc/",
                isFolder: true,
                contents: [
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: "zshrc",
                        scripts: ["PS1='\\#/ >'", "welcome && help"]
                    },
                ]
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
                                name: "trash_can.app",
                                scripts: ["trashing... (app feature no developed yet)"]
                            },
                        ]
                    },
                    {
                        isFolder: true,
                        name: "downloads/",
                        contents: [
                            {
                                isFolder: false,
                                file_type: dirEnum.app,
                                name: "hentai.txt",
                                scripts: ["boob", "boob", "boob", "boob", "boob", "boob", "boob", "boob"]
                            },
                        ]
                    },
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: "introduction.txt",
                        scripts: ["type whoami to see more details about me"]
                    },
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: ".nyshrc",
                        scripts: ["PS1='\\#/ >'", "welcome && help"]
                    }
                ]
            },
            {
                name: "social/",
                isFolder: true,
                contents: [
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: "github",
                        scripts: ["-o id: @jumang4423", "-o url: https://github.com/jumang4423"]
                    },
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: "twitter",
                        scripts: ["-o id: @jumang4423", "-o url: https://twitter.com/jumang4423"]
                    },
                    {
                        isFolder: false,
                        file_type: dirEnum.txt,
                        name: "soundcloud",
                        scripts: ["-o id: @jumang4423", "-o url: https://soundcloud.com/jumang4423"]
                    }
                ]
            },
            {
                name: "readme.txt",
                isFolder: false,
                scripts: ["'help' to learn more about nysh!", "unless i gotta just stay poor nerd man..."]
            }
        ]
    }
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

    let { com, arg } = commandParser(temporary_command_input)
    if (arg !== undefined) {
        const whats_in_current: Array<string> = dir_inside(current_dir, file_system)
        whats_in_current.forEach((st: string) => {
            if (st.includes(arg, 0)) {
                arg = (st.includes("/") ? st.slice(0, -1) : st)
            }
        })
    } else {
        available_command.forEach((st: string) => {
            if (st.includes(com, 0)) {
                com = st
            }
        })
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
    return _watching.map((obj: any) => {
        return "🥺 " + obj.name
    })
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

export const pushHistory = (command: string, typed_history: Array<string>, setTyped_history: Function) => {
    const new_array = Object.assign([], typed_history)
    new_array.pop()
    new_array.push(command)
    new_array.push("")
    setTyped_history(new_array)
}