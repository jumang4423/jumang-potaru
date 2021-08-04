import React, { useState } from 'react'
import { useEffect } from 'react'
import { auto_complete, cat_me, commandParser, files, generic_ls, is_vaild_dir, loadWasm, pushHistory, put_into_history } from '@/funcs/nysh'
import { motion } from 'framer-motion'
import CutieButton from './CutieButton'
import "@/styles/component/MDArea.scss"
import "@/styles/component/MDText.scss"
import '@/styles/component/MPPost.scss'
import "@/styles/component/nysh.scss"
import "@/styles/component/cutieButton.scss"
import { Link } from '@reach/router'
import useSound from 'use-sound'

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
    down = 40
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
    const [init_loading_status, set_init_loading_status] = useState<number>(0)
    const [play1] = useSound('/on.mp3')
    const [play2] = useSound('/on2.mp3')
    const [nn] = useSound('/nn.mp3')
    const [typed_history, setTyped_history] = useState<Array<string>>([""])
    const [me_watching_typed_history, setMe_watching_typed_history] = useState<number>(0)
    // const el = useRef(null);

    const showHistory = (history: any) => {

        if (history.tag == commmand_tags.div) {
            return (
                <>
                    {history.com}
                </>
            )
        }
        else if (history.tag == commmand_tags.img) {
            let given_img = history.com.split(" ")?.[1]
            return (
                <div className={"img_viewer"}>
                    <img className={"img_round"} src={given_img} />
                </div>
            )
        }
    }

    const run_command_of_dotdot = () => {
        let newdir = Object.assign([], current_dir)
        newdir.length !== 1 && newdir.pop()
        setHistories(put_into_history([command, "↓"], histories, max_size))
        setCurrent_dir(newdir)
    }

    const run_command = () => {
        const { com, arg } = commandParser(command)

        switch (com) {
            case "exit":
                setIsNysh(false)
                break
            case "sl":
                setHistories(put_into_history([modules.sl(), "", "", "", ""], histories, max_size))
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
                    run_command_of_dotdot()
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
            case "..":
                run_command_of_dotdot()
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
            default:
                setHistories(put_into_history([command, "-! Unknown command: " + com], histories, max_size))

        }
    }

    // load wasm
    useEffect(() => {
        loadWasm("potaru", setModules)
    }, [])

    useEffect(() => {
        if (modules) {
            setHistories(put_into_history([...modules.welcome_nysh(), ...modules.help()], histories, max_size))
        } else {

            new Promise((resolve: any) => {
                setTimeout(() => {
                    // fetch wasm
                    set_init_loading_status(0)
                    resolve()
                }, 100);
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // fetch wasm
                        set_init_loading_status(1)
                        resolve()
                    }, 200);
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // for nysh
                        set_init_loading_status(2)
                        resolve()
                    }, 500);
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // file system
                        set_init_loading_status(3)
                        const _stored = localStorage.getItem("mounted_dirs")
                        if (!_stored) {
                            console.log("not stored");
                            console.log(JSON.stringify(files));

                            localStorage.setItem("mounted_dirs", JSON.stringify(files))
                        } else {
                            console.log("stored");
                            setFile_system(JSON.parse(_stored))
                        }

                        resolve()
                    }, 100);
                })
            }).then(() => {
                return new Promise((resolve: any) => {
                    setTimeout(() => {
                        // fetch wasm
                        set_init_loading_status(4)
                        resolve()
                    }, 100);
                })
            })
        }

    }, [modules])
    // useEffects
    useEffect(() => {

        setTimeout(() => {
            setTicker(!ticker)
        }, 500);

    }, [ticker])

    useEffect(() => {
        document.addEventListener("keydown", (event: any) => {
            if ([Keys.enter, Keys.delete, Keys.space, Keys.slat, Keys.tab, Keys.up, Keys.down].includes(event.keyCode)) {
                event.preventDefault()
            }

            setUpdate(event.keyCode)
        }, false)
    }, [])

    useEffect(() => {
        // TODO: use enum bruh


        if (update == Keys.enter) {
            // enter
            command !== '' && run_command()

            // push the command to the command history
            pushHistory(command, typed_history, setTyped_history)

            setMe_watching_typed_history(typed_history.length)
            setCommand("")
            play1()

            setTimeout(() => {
                play2()
            }, 50)

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
            play1()
            setMe_watching_typed_history(Math.max(0, me_watching_typed_history - 1))
            setCommand(typed_history[Math.max(0, me_watching_typed_history - 1)])
        } else if (update === Keys.down) {
            // down
            play2()
            setMe_watching_typed_history(Math.min(typed_history.length - 1, me_watching_typed_history + 1))
            setCommand(typed_history[Math.min(typed_history.length - 1, me_watching_typed_history + 1)])
        }
        setUpdate(null)
    }, [update])

    return (
        <>
            <div
                className="MDArea-nysh">

                <div className="MDArea2 MDText MPPost nysh_flex">

                    <div className={"nysh_title"}>
                        [ nyu shell🦀 ]
                    </div>

                    <div className={"nysh_back what_the"}>

                        {
                            init_loading_status !== 4 &&
                            <>
                                {init_loading_status == 0 && <>fetching WASM modules...</>}
                                {init_loading_status == 1 && <>preparing nysh...</>}
                                {init_loading_status == 2 && <>mounting file system...</>}
                                {init_loading_status == 3 && <>ok!</>}
                            </>
                        }

                        {
                            init_loading_status == 4 &&
                            <>
                                {
                                    histories.map((history: any) => {
                                        return (
                                            <motion.div
                                                key={history.id}
                                                initial={{
                                                    color: '#00FF00',
                                                    opacity: 0
                                                }}
                                                animate={
                                                    {
                                                        color: history.col,
                                                        opacity: 1
                                                    }}
                                            >
                                                {showHistory(history)}
                                            </motion.div>
                                        )
                                    })
                                }
                                <div>
                                    {current_dir[current_dir.length - 1]} {'>'} {command}{ticker ? "🍙" : " "}
                                </div>
                            </>
                        }
                    </div>
                    <div className={"cute_flex goLeft"}>
                        <div className={"killa"}>
                            <Link to={"/morenysh"}>
                                <CutieButton Name={"more details..."} />
                            </Link>
                        </div>
                        <div onClick={() => setIsNysh(false)}>
                            <CutieButton Name={"static profile"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NyshWindow