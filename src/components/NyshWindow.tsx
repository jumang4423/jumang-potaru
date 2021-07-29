import React, { useCallback, useRef, useState } from 'react'
import "@/styles/component/MDArea.scss"
import "@/styles/component/MDText.scss"
import '@/styles/component/MPPost.scss'
import "@/styles/component/nysh.scss"
import { useEffect } from 'react'
import { auto_complete, cat_me, generic_ls, is_vaild_dir, put_into_history } from '@/funcs/nysh'
import { motion } from 'framer-motion'
import { goRouter } from '@/funcs/goRouter'

export const commandParser = (command: string) => {

    const splited = command.split(" ")

    return {
        com: splited[0], arg: splited[1]
    }

}

const NyshWindow: React.FC<any> = () => {

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
    const setRouter = goRouter()
    // const el = useRef(null);

    const loadWasm = async (potaru: string) => {
        await import("../../static/" + potaru + "_wasm").then(modules => setModules(modules))
    }

    const run_command = () => {
        const { com, arg } = commandParser(command)

        switch (com) {
            case "exit":
                setRouter("/")
                break
            case "clear":
                setHistories([
                    { id: 1, com: "" }
                ])
                break
            case "cat":
                setHistories(put_into_history([command, "💓 " + cat_me(arg, current_dir)], histories, max_size))
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
        loadWasm("potaru")
    }, [])

    useEffect(() => {
        if (modules) {
            setHistories(put_into_history([modules.welcome_nysh(), ...modules.help()], histories, max_size))
        }

    }, [modules])
    // useEffects
    useEffect(() => {

        setTimeout(() => {
            setTicker(!ticker)
        }, 500);

    }, [ticker])

    useEffect(() => {
        document.addEventListener("keydown", (event: any) => setUpdate(event.keyCode), false)
    }, [])

    useEffect(() => {
        console.log(update);


        if (update == 13) {
            // enter
            command !== '' && run_command()
            setCommand("")
        }
        else if (update == 8) {
            // delete
            setCommand(command.slice(0, -1))
        }
        else if (update == 32) {
            // spaces
            scrollTo(0, 0)
            setTimeout(() => scrollTo(0, 0), 140)
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
        } else if (update === 16) {
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
                        [ nyu shell🐤 ]
                    </div>
                    <div className={"nysh_back what_the"}>
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
                            {current_dir[current_dir.length - 1]} {'>'} {command}{ticker ? "|" : " "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NyshWindow