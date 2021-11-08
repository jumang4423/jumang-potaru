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
import { import_nyl } from "@/funcs/nylang_lib"
import NyimEditor from './NyimEditor'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

enum Excute_nyl_options {
    lexer,
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

const functions = {
    print_dirs: (directories: Array<string>): string => {
        let result = ""
        if (directories.length == 1) {
            return `/`
        }
        directories.forEach((dir: string, num: number) => {
            if (num != 0 && num != directories.length) {
                if (num == directories.length - 1) {
                    result += `${dir}`
                } else {
                    result += `${dir[0]}/`
                }
            }
        })
        return result
    },
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

    // nyim variables
    const [is_nyim, setIs_nyim] = useState<boolean>(false)
    const [nyim_contents, setNyim_contents] = useState<string>("")
    const [nyim_fileName, setNyim_fileName] = useState<string>("")

    // tempos
    const max_size = 256
    const [ticker, setTicker] = useState<boolean>(false)
    const [update, setUpdate] = useState<number | null>(null)
    const [modules, setModules] = useState<any>()
    const [excute_nyl, setExcute_nyl] = useState<any>()
    const [init_loading_status, set_init_loading_status] = useState<number>(0)
    // const [play2] = useSound('/on2.mp3')
    const [nn] = useSound('/on.mp3')
    const [kk] = useSound('/okay.mp3')
    const [typed_history, setTyped_history] = useState<Array<string>>([""])
    const [me_watching_typed_history, setMe_watching_typed_history] = useState<number>(0)
    const command_input_ref = React.useRef<HTMLInputElement>(null)

    // nylang variables
    const [nylang_is_excuting, setNylang_is_excuting] = useState<boolean>(false)
    const [nylang_code, setNylang_code] = useState<string>("")

    // goRouter
    const goRoute = goRouter()

    const run_command = (): void => {

        let evaluated = command


        if (evaluated.includes("./")) {
            evaluated = evaluated.replace("./", "nylang")
        }

        const { com, arg, arg2, arg3 } = commandParser(evaluated)
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
                } else if (arg == undefined) {
                    // goto home dir
                    setCurrent_dir(["/"])
                    setHistories(put_into_history([command, "↓"], histories, max_size))
                } else if (is_vaild_dir(arg, current_dir, file_system)) {
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
            case "nyvim":
                if (arg == undefined) {
                    setHistories(put_into_history([
                        command,
                        "-> welcome to nyvim, a simple text editor!",
                        "-! nyvim <file> : to open the file"
                    ], histories, max_size))
                } else {
                    setNyim_contents(cat_me(arg, current_dir, file_system).join("\n"))
                    setNyim_fileName(arg)
                    setIs_nyim(true)
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
                    setHistories(put_into_history([
                        command,
                        "-> welcome to nylang ( wasm edition ), is the interplitor written in rust",
                        "-! nylang <file>.nyl : to excute code"
                    ], histories, max_size))
                } else {
                    // get the code from file
                    let code: string = cat_me(arg, current_dir, file_system).join("\n")

                    if (code == "no file found") {
                        setHistories(put_into_history([command, "-! no file found"], histories, max_size))
                        break
                    }

                    // set the nylang is excuting
                    setNylang_is_excuting(true)
                    setNylang_code(code)
                }
                break
            case "_nylang_debug":
                if (arg == undefined) {
                    setHistories(put_into_history([
                        command,
                        "-! NYLANG PARSER FOR DEBUG",
                        "-! self run <file> : to excute",
                        "-! self parser <file> : to show ast",
                        "-! self lexer <file> : to show tokens"
                    ], histories, max_size))
                } else {

                    // get the code from file
                    const code = cat_me(arg2, current_dir, file_system).join("\n")

                    if (code == "no file found") {
                        setHistories(put_into_history([command, "-! no file found"], histories, max_size))
                        break
                    }

                    const start_time = new Date(); // start timers

                    if (arg == "run") {
                        let excuted: Array<string> = []
                        try {
                            excuted = excute_nyl.excute_nyl(import_nyl(code) + code, Excute_nyl_options.run)
                        } catch (e) {
                            setHistories(put_into_history([command, "-! " + e], histories, max_size))
                            break
                        }
                        // run the code
                        setHistories(put_into_history([command, ...excuted], histories, max_size))
                    } else if (arg == "parser") {
                        let ast: Array<string> = []
                        try {
                            ast = excute_nyl.excute_nyl(code, Excute_nyl_options.parser)
                        } catch (e) {
                            setHistories(put_into_history([command, "-! " + e], histories, max_size))
                            break
                        }
                        // run the code
                        setHistories(put_into_history([command, ...ast], histories, max_size))
                    } else if (arg == "lexer") {

                        let ast: Array<string> = []
                        try {
                            ast = excute_nyl.excute_nyl(code, Excute_nyl_options.lexer)
                        } catch (e) {
                            setHistories(put_into_history([command, "-! " + e], histories, max_size))
                            break
                        }
                        // run the code
                        setHistories(put_into_history([command, ...ast], histories, max_size))
                    }

                    const end_time = new Date(); // finished timers
                    const diff_as_millis: any = end_time.getTime() - start_time.getTime(); // get the time difference
                    setTimeout(() => {
                        setHistories(put_into_history([command, "-! time used: " + (diff_as_millis / 1000.0) + "s"], histories, max_size))
                    }, 5);
                }
                break
            default:
                setHistories(put_into_history([command, "-! Unknown command: " + com], histories, max_size))
        }
    }

    useEffect(() => {
        if (modules) {
            setHistories(put_into_history([...modules.welcome_nysh(), ...modules.help()], histories, max_size))
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
                            // check the file is old or not
                            const _stored_files: any = JSON.parse(_stored)
                            if (_stored_files?.[0].scripts?.[0] != files?.[0].scripts?.[0]) {
                                console.log("old files detected, overwrited")
                                localStorage.setItem("mounted_dirs", JSON.stringify(files))
                                setFile_system(files)
                            } else {
                                console.log("new files!")
                                setFile_system(_stored_files)
                            }
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

    useEffect(() => {
        command_input_ref.current !== null && command_input_ref.current.scrollIntoView()
    }, [histories])


    // useEffects
    useEffect(() => {
        setTimeout(() => {
            setTicker(!ticker)
        }, 500)
    }, [ticker])

    useEffect(() => {
        // actual wasm loading async
        loadWasm("potaru", setModules)
        loadNylang(setExcute_nyl)

        // preventDefault
        document.addEventListener("keydown", (event: any) => {
            if ([Keys.tab, Keys.up, Keys.down].includes(event.keyCode)) {
                event.preventDefault()
            }
            setUpdate(event.keyCode)
        }, false)
    }, [])

    useEffect(() => {

        if (is_nyim) return
        if (update == Keys.enter) {
            // enter
            command !== '' && run_command()

            // push the command to the command history
            pushHistory(command, typed_history, setTyped_history)
            setMe_watching_typed_history(typed_history.length)
            setCommand("")
            kk()
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

    // nylang
    useEffect(() => {
        if (nylang_is_excuting) {
            setTimeout(() => {
                let evaluated: Array<string> = []
                try {
                    evaluated = excute_nyl.excute_nyl(import_nyl(nylang_code) + nylang_code, Excute_nyl_options.run)
                    setHistories(put_into_history([command, ...evaluated], histories, max_size))
                } catch (e) {
                    setHistories(put_into_history([command, "-! " + e], histories, max_size))
                }
                setNylang_is_excuting(false)
            }, 10)
        }
    }, [nylang_is_excuting])

    if (is_nyim) {
        return (
            <NyimEditor
                nyim_contents={nyim_contents}
                setNyim_contents={setNyim_contents}
                nyim_fileName={nyim_fileName}
                closeNyim={() => setIs_nyim(false)}
                save_nyim={() => {
                    if (nyim_contents != null) {
                        setEditedContents(file_system, setFile_system, current_dir, nyim_fileName, nyim_contents)
                        updateFiles(file_system)
                    }
                }}
            />
        )
    }

    return (
        <div className={""}>
            <div className="MDArea-nysh">
                <div className="MDArea2 MDText MPPost nysh_flex">
                    <div className={"nysh_title"}>
                        {'>'} nyu shell🦀
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
                            <div className={"commands_box"}>
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
                                <div className={"inside_commands"} ref={command_input_ref}>
                                    {functions.print_dirs(current_dir)} {command}{ticker ? "🍙" : " "}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {
                nylang_is_excuting &&
                <div className={"loading_background"}>
                    <div className={"loading_maBox"}>
                        <ClimbingBoxLoader color={"#ffffff"} size={25} />
                    </div>
                </div>
            }
        </div>
    )
}

export default NyshWindow