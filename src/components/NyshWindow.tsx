import React, { useState } from 'react'
import { useEffect } from 'react'
import { auto_complete, cat_me, commandParser, generic_ls, is_vaild_dir, loadWasm, put_into_history } from '@/funcs/nysh'
import { motion } from 'framer-motion'
import { goRouter } from '@/funcs/goRouter'
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

const NyshWindow: React.FC<NyshWindowType> = ({ setIsNysh }: NyshWindowType) => {

    // nysh variables
    const [command, setCommand] = useState<string>("")
    const [histories, setHistories] = useState<Array<object>>(
        [
            { id: 1, com: "" }
        ]
    )
    const [current_dir, setCurrent_dir] = useState<Array<string>>(["/"])

    // tempos
    const max_size = 10
    const [ticker, setTicker] = useState<boolean>(false)
    const [update, setUpdate] = useState<number | null>(null)
    const [modules, setModules] = useState<any>()
    const [init_loading_status, set_init_loading_status] = useState<number>(0)
    const [play1] = useSound('/on.mp3')
    const [play2] = useSound('/on2.mp3')
    const [nn] = useSound('/nn.mp3')
    // const el = useRef(null);

    const run_command = () => {
        const { com, arg } = commandParser(command)

        switch (com) {
            case "exit":
                setIsNysh(false)
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
                setHistories(put_into_history([command, ...cat_me(arg, current_dir).map((st: string) => {
                    return "🐱 " + st
                })], histories, max_size))
                break
            case "pwd":
                setHistories(put_into_history([command, "💓 " + current_dir.join('')], histories, max_size))
                break
            case "cd":
                if (arg === "..") {
                    let newdir = Object.assign([], current_dir)
                    newdir.pop()
                    setHistories(put_into_history([command, "↓"], histories, max_size))
                    setCurrent_dir(newdir)
                }
                else if (is_vaild_dir(arg, current_dir)) {
                    let newdir = Object.assign([], current_dir)
                    newdir.push((arg + "/"))
                    setHistories(put_into_history([command, "↓"], histories, max_size))
                    setCurrent_dir(newdir)
                } else {
                    setHistories(put_into_history([command, "-! no directory found"], histories, max_size))
                }
                break
            case "..":
                let newdir = Object.assign([], current_dir)
                newdir.pop()
                setHistories(put_into_history([command, "↓"], histories, max_size))
                setCurrent_dir(newdir)
                break
            case "ls":
                setHistories(put_into_history([command, ...generic_ls(current_dir)], histories, max_size))
                break
            case "la":
                setHistories(put_into_history([command, ...generic_ls(current_dir)], histories, max_size))
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

            // TODO: Promiseでじゃけんかきましょうね
            setTimeout(
                () => {
                    // fetch wasm
                    set_init_loading_status(1)
                    setTimeout(
                        () => {
                            // file system
                            set_init_loading_status(2)
                            setTimeout(
                                () => {
                                    // preparing nysh
                                    set_init_loading_status(3)
                                    setTimeout(
                                        () => {
                                            // lauch nysh
                                            set_init_loading_status(4)
                                        }, 100
                                    )

                                }, 500
                            )
                        }, 200
                    )
                }, 100
            )
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
            if ([13, 8, 32, 190, 9].includes(event.keyCode)) {
                event.preventDefault()
            }

            setUpdate(event.keyCode)
        }, false)
    }, [])

    useEffect(() => {
        // TODO: ENUMにしようね〜


        if (update == 13) {
            // enter
            command !== '' && run_command()
            setCommand("")

            play1()

            setTimeout(() => {
                play2()
            }, 50);
            
        }
        else if (update == 8) {
            // delete
            setCommand(command.slice(0, -1))
        }
        else if (update == 32) {
            // spaces
            command != "" && setCommand(command + " ")
        }
        else if (update >= 48 && 57 >= update) {
            // 数字
            setCommand(command + String.fromCharCode(update))
        } else if (update >= 65 && 90 >= update) {
            // A-Z
            setCommand(command + String.fromCharCode(update + 32))

        } else if (update === 190) {
            // .
            setCommand(command + ".")
        } else if (update === 191) {
            // /
            setCommand(command + "/")
        } else if (update === 9) {
            // tab
            nn()
            if (command !== "") setCommand(auto_complete(command, current_dir, modules.available_command()))
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
                                                {history.com}
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