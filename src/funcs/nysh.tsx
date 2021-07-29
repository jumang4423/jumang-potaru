import { commandParser } from "@/components/NyshWindow"

export const put_into_history = (command: Array<string>, histories: Array<object>, maxSize: number) => {
    let insertValue = Object.assign(new Array, histories)

    command.forEach((st: string) => {

        if (insertValue.length + 1 <= maxSize) {
            insertValue.push({ id: insertValue.length + 1, com: st, col: isMessage(st) })
        } else {
            insertValue = up_shift(insertValue, maxSize)
            insertValue[maxSize - 1].com = st
            insertValue[maxSize - 1].id = insertValue[maxSize - 2].id + 1
            insertValue[maxSize - 1].col = isMessage(st)
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
    if (command.slice(0, 2) == "->") {
        return "#555555"
    } else if (command.slice(0, 2) == "-!") {
        return "#448844"
    }
    return "#222222"
}

export const file_system_lol: any = {
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
                    script: "rust is way better than c++, common lisp and you!"
                }
            ]
        },
        {
            name: "users/",
            isFolder: true,
            contents: [
                {
                    isFolder: false,
                    name: "jumang",
                    script: "type whoami to see more details about me"
                }
            ]
        }
    ]
}

export const is_vaild_dir = (folder: string, current_dir: Array<string>): boolean => {

    const new_path = JSON.parse(JSON.stringify(current_dir))
    new_path.push(folder + "/")

    let _watching = [file_system_lol]

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
    available_command: Array<string>
) => {

    let { com, arg } = commandParser(temporary_command_input)
    if (arg !== undefined) {
        const whats_in_current: Array<string> = dir_inside(current_dir)
        whats_in_current.forEach((st: string) => {
            if (st.includes(arg, 0)) {
                arg = (st.includes("/") ? st.slice(0,-1) : st)
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
    current_dir: Array<string>
): Array<string> => {

    const new_path = JSON.parse(JSON.stringify(current_dir))
    let _watching = [file_system_lol]
    for (let i = 0; i < new_path.length; i++) {
        for (let j = 0; j < _watching.length; j++) {
            if (_watching[j].isFolder === true && _watching[j].name === new_path[i]) {
                _watching = _watching[j].contents
            }
        }
    }
    return _watching.map((obj: any) => {
        return "💓 " + obj.name
    })
}

export const dir_inside = (
    current_dir: Array<string>
): Array<string> => {

    const new_path = JSON.parse(JSON.stringify(current_dir))
    let _watching = [file_system_lol]
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

export const cat_me = (file: string, current_dir: Array<string>) => {
    const new_path = JSON.parse(JSON.stringify(current_dir))
    new_path.push(file)

    let _watching = [file_system_lol]

    for (let i = 0; i < new_path.length; i++) {
        let available = false

        for (let j = 0; j < _watching.length; j++) {
            if (!_watching[j].isFolder && _watching[j].name === new_path[i]) {
                return _watching[j].script
            }
            if (_watching[j].isFolder && _watching[j].name === new_path[i]) {

                available = true
                _watching = _watching[j].contents
            }
        }
        if (!available) return "-> no file found"
    }
}