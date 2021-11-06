import React, { useState } from 'react'
import { useEffect } from 'react'
import { auto_complete, cat_me, commandParser, files, generic_ls, is_vaild_dir, loadNylang, loadWasm, mkdirDir, pushHistory, put_into_history, removeFileOrDir, run_command_of_dotdot, setEditedContents, showHistory, touchFile, updateFiles } from '@/funcs/nysh'
import { motion } from 'framer-motion'
import "@/styles/component/MDArea.scss"
import "@/styles/component/MDText.scss"
import '@/styles/component/MPPost.scss'
import "@/styles/component/nysh.scss"
import "@/styles/component/cutieButton.scss"
import useSound from 'use-sound'
import { goRouter } from '@/funcs/goRouter'
import { imports_nyl } from '@/funcs/nylang_lib'

enum Excute_nyl_options {
    parser,
    run
}

export type NyshWindowType = {
    setIsNysh: Function
}

export enum commmand_tags {
    div,
    a,
    img
}

export enum Keys {
    enter = 13,
    delete = 8,
    space = 32,
    dot = 190,
    slat = 191,
    tab = 9,
    up = 38,
    down = 40,
    under_bar = 189
}

const NyshWindow: React.FC<NyshWindowType> = ({ setIsNysh }: NyshWindowType) => {

    // nysh variables
    const [command, setCommand] = useState<string>("")
    const [histories, setHistories] = useState<Array<object>>(
        [
            { id: 1, com: "", tag: commmand_tags.div }
        ]
    )
    const [current_dir, setCurrent_dir] = useState<Array<string>>(["/"])
    const [file_system, setFile_system] = useState<any>([""])

    // tempos
    const max_size = 10
    const [ticker, setTicker] = useState<boolean>(false)
    const [update, setUpdate] = useState<number | null>(null)
    const [modules, setModules] = useState<any>()
    const [excute_nyl, setExcute_nyl] = useState<any>()
    const [init_loading_status, set_init_loading_status] = useState<number>(0)
    const [play2] = useSound('/on2.mp3')
    const [nn] = useSound('/nn.mp3')
    const [typed_history, setTyped_history] = useState<Array<string>>([""])
    const [me_watching_typed_history, setMe_watching_typed_history] = useState<number>(0)
    // const el = useRef(null)

    // goRouter
    const goRoute = goRouter()

    const run_command = (): void => {
        const { com, arg, arg2 } = commandParser(command)

        switch (com) {
            case "exit":
                setIsNysh(false)
                break
            case "sl":
                setHistories(put_into_history([modules.sl(), "", "", "", ""], histories, max_size))
                break

            case "nyfetch":
                setHistories(put_into_history([command, ...modules.nyfetch()], histories, max_size))
                break
            case "clear":
                setHistories([
                    { id: 1, com: "" }
                ])
                break
            case "welcome":
                setHistories(put_into_history([...modules.welcome_nysh()], histories, max_size))
                break
            case "cat":
                setHistories(put_into_history([command, ...cat_me(arg, current_dir, file_system).map((st: string) => {
                    return "🐱 " + st
                })], histories, max_size))
                break
            case "pwd":
                setHistories(put_into_history([command, "💓 " + current_dir.join('')], histories, max_size))
                break
            case "cd":
                if (arg === "..") {
                    run_command_of_dotdot(command, max_size, current_dir, histories, setHistories, setCurrent_dir)
                }
                else if (is_vaild_dir(arg, current_dir, file_system)) {
                    let newdir = Object.assign([], current_dir)
                    newdir.push((arg + "/"))
                    setHistories(put_into_history([command, "↓"], histories, max_size))
                    setCurrent_dir(newdir)
                } else {
                    setHistories(put_into_history([command, "-! no directory found"], histories, max_size))
                }
                break
            case "touch":
                touchFile(file_system, setFile_system, current_dir, arg)
                updateFiles(file_system)
                setHistories(put_into_history([command], histories, max_size))
                break
            case "mkdir":
                mkdirDir(file_system, setFile_system, current_dir, arg + "/")
                updateFiles(file_system)
                setHistories(put_into_history([command], histories, max_size))
                break
            case "rm":
                removeFileOrDir(file_system, setFile_system, current_dir, arg)
                updateFiles(file_system)
                setHistories(put_into_history([command], histories, max_size))
                break
            case "edit":
                if (arg == undefined) {
                    setHistories(put_into_history([command, "-! no file found"], histories, max_size))
                } else {
                    const prompt_vle = prompt("'" + arg + "' CONTENTS", cat_me(arg, current_dir, file_system).join("\n"))
                    if (prompt_vle != null) {
                        setEditedContents(file_system, setFile_system, current_dir, arg, prompt_vle)
                        updateFiles(file_system)
                    }
                }
                setHistories(put_into_history([command], histories, max_size))
                break
            case "..":
                run_command_of_dotdot(command, max_size, current_dir, histories, setHistories, setCurrent_dir)
                break
            case "ls":
                setHistories(put_into_history([command, ...generic_ls(current_dir, file_system)], histories, max_size))
                break
            case "la":
                setHistories(put_into_history([command, ...generic_ls(current_dir, file_system)], histories, max_size))
                break
            case "whoami":
                setHistories(put_into_history([command, ...modules.whoami_call()], histories, max_size))
                break
            case "help":
                setHistories(put_into_history([command, ...modules.help()], histories, max_size))
                break
            case "su_sudo":
                goRoute("/su_sudo")
                break
            case "nylang":
                if (arg == undefined) {
                    setHistories(put_into_history([command, "-> welcome to nylang, is the interplitor written in rust"], histories, max_size))
                } else {
                    // get the code from file
                    const code = cat_me(arg, current_dir, file_system).join("\n")
                    // run the code
                    setHistories(put_into_history([command, ...excute_nyl.excute_nyl(imports_nyl + code, Excute_nyl_options.run)], histories, max_size))
                }
                break
            case "_nylang_parser":
                if (arg == undefined) {
                    setHistories(put_into_history([command, "-! NYLANG PARSER FOR DEBUG"], histories, max_size))
                } else {
                    // get the code from file
                    const code = cat_me(arg, current_dir, file_system).join("\n")
                    // run the code
                    setHistories(put_into_history([command, ...excute_nyl.excute_nyl(code, Excute_nyl_options.parser)], histories, max_size))
                }
                break
            default:
                setHistories(put_into_history([command, "-! Unknown command: " + com], histories, max_size))

        }
    }

    useEffect(() => {
        if (modules) {
            setHistories(put_into_history([...modules.welcome_nysh()], histories, max_size))
        } else {

            new Promise((resolve: any) => {
                setTimeout(() => {
                    // fetch wasm
                    set_init_loading_status(0)
                    resolve()
                }, 100)
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // fetch wasm
                        set_init_loading_status(1)
                        resolve()
                    }, 200)
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // for nysh
                        set_init_loading_status(2)
                        resolve()
                    }, 500)
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // file system
                        set_init_loading_status(3)
                        const _stored = localStorage.getItem("mounted_dirs")
                        if (!_stored) {
                            console.log("not stored")
                            console.log(JSON.stringify(files))

                            localStorage.setItem("mounted_dirs", JSON.stringify(files))
                            setFile_system(files)
                        } else {
                            console.log("stored")
                            setFile_system(JSON.parse(_stored))
                        }

                        resolve()
                    }, 100)
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // fetch wasm
                        set_init_loading_status(4)
                        resolve()
                    }, 100)
                })
            })
        }

    }, [modules])
    // useEffects
    useEffect(() => {
        setTimeout(() => {
            setTicker(!ticker)
        }, 500)
    }, [ticker])

    useEffect(() => {

        // preventDefault
        document.addEventListener("keydown", (event: any) => {
            if ([Keys.enter, Keys.delete, Keys.space, Keys.slat, Keys.tab, Keys.up, Keys.down].includes(event.keyCode)) {
                event.preventDefault()
            }
            setUpdate(event.keyCode)
        }, false)

        // actual wasm loading async
        loadWasm("potaru", setModules)
        loadNylang(setExcute_nyl)
    }, [])

    useEffect(() => {
        if (update == Keys.enter) {
            // enter
            command !== '' && run_command()

            // push the command to the command history
            pushHistory(command, typed_history, setTyped_history)
            setMe_watching_typed_history(typed_history.length)
            setCommand("")
            play2()
        }
        else if (update == Keys.delete) {
            // delete
            setCommand(command.slice(0, -1))
        }
        else if (update == Keys.space) {
            // spaces
            command != "" && setCommand(command + " ")
        }
        else if (update >= 48 && 57 >= update) {
            // 数字
            setCommand(command + String.fromCharCode(update))
        } else if (update >= 65 && 90 >= update) {
            // A-Z
            setCommand(command + String.fromCharCode(update + 32))

        } else if (update === Keys.dot) {
            // .
            setCommand(command + ".")
        } else if (update === Keys.under_bar) {
            // _
            setCommand(command + "_")
        } else if (update === Keys.slat) {
            // /
            setCommand(command + "/")
        } else if (update === Keys.tab) {
            // tab
            nn()
            if (command !== "") {
                setCommand(
                    auto_complete(
                        command,
                        current_dir,
                        []
                            .concat(
                                modules.available_command_of_default(),
                                modules.available_command_of_wasm()
                            ),
                        file_system
                    ))
            }
        } else if (update === Keys.up) {
            // up
            // play1()
            setMe_watching_typed_history(Math.max(0, me_watching_typed_history - 1))
            setCommand(typed_history[Math.max(0, me_watching_typed_history - 1)])
        } else if (update === Keys.down) {
            // down
            // play2()
            setMe_watching_typed_history(Math.min(typed_history.length - 1, me_watching_typed_history + 1))
            setCommand(typed_history[Math.min(typed_history.length - 1, me_watching_typed_history + 1)])
        }
        setUpdate(null)
    }, [update])

    return (
        <div className={""}>
            <div className="MDArea-nysh">
                <div className="MDArea2 MDText MPPost nysh_flex">
                    <div className={"nysh_title"}>
                        nyu shell🦀
                    </div>

                    <div className={"nysh_back what_the"}>
                        {
                            init_loading_status !== 4 &&
                            <>
                                {init_loading_status == 0 && <div className={"nysh_history"}>fetching WASM modules...</div>}
                                {init_loading_status == 1 && <div className={"nysh_history"}>preparing nysh...</div>}
                                {init_loading_status == 2 && <div className={"nysh_history"}>mounting file system...</div>}
                                {init_loading_status == 3 && <div className={"nysh_history"}>ok!</div>}
                            </>
                        }
                        {
                            init_loading_status == 4 &&
                            <>
                                {
                                    histories.map((history: any) => {
                                        return (
                                            <motion.div
                                                className={"nysh_history"}
                                                key={history.id}
                                                initial={{
                                                    color: '#00FF00',
                                                    opacity: 0
                                                }}
                                                animate={
                                                    {
                                                        color: history.col,
                                                        opacity: 1
                                                    }}>
                                                {showHistory(history)}
                                            </motion.div>
                                        )
                                    })
                                }
                                <div className={"inside_commands"}>
                                    {current_dir[current_dir.length - 1]} {'>'} {command}{ticker ? "🍙" : " "}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NyshWindow