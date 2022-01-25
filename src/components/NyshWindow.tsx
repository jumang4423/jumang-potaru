import React, { useState } from "react"
import { useEffect } from "react"
import {
  auto_complete,
  files,
  init_history,
  loadNylang,
  loadWasm,
  pushHistory,
  put_into_history,
  setEditedContents,
  showHistory,
  updateFiles,
} from "@/funcs/nysh"
import { motion } from "framer-motion"
import "@/styles/component/MDArea.scss"
import "@/styles/component/MDText.scss"
import "@/styles/component/MPPost.scss"
import "@/styles/component/nysh.scss"
import "@/styles/component/cutieButton.scss"
import useSound from "use-sound"
import { goRouter } from "@/funcs/goRouter"
import { import_nyl } from "@/funcs/nylang_lib"
import NyimEditor from "./NyimEditor"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { run_command, update_prediction } from "@/funcs/nysh_command_runner"
import { match } from "rustic-ts"

export enum Excute_nyl_options {
  lexer,
  parser,
  run,
}

export type NyshWindowType = {
  setIsNysh: Function
}

export enum commmand_tags {
  div,
  a,
  img,
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
  right = 39,
  under_bar = 189,
}

const functions = {
  // prints indicator of nysh
  print_dirs: (directories: Array<string>): string => {
    let result = ""
    if (directories.length == 1) {
      return `/`
    }
    directories.forEach((dir: string, num: number) => {
      if (num != 0 && num != directories.length) {
        result += num == directories.length - 1 ? `${dir}` : `${dir[0]}/`
      }
    })
    return result
  },
}

const NyshWindow: React.FC<NyshWindowType> = ({
  setIsNysh,
}: NyshWindowType) => {
  // nysh variables
  const [command, setCommand] = useState<string>("")
  const [histories, setHistories] = useState<Array<object>>([
    { id: 1, com: "", tag: commmand_tags.div },
  ])
  const [current_dir, setCurrent_dir] = useState<Array<string>>(["/"])
  const [file_system, setFile_system] = useState<any>([""])
  const [predict_command, setPredict_command] = useState<any>([])
  const [prediction, setPrediction] = useState<String>("")

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
  const [nn] = useSound("/on.mp3")
  const [kk] = useSound("/okay.mp3")
  const [typed_history, setTyped_history] = useState<Array<string>>([""])
  const [
    me_watching_typed_history,
    setMe_watching_typed_history,
  ] = useState<number>(0)
  const command_input_ref = React.useRef<HTMLInputElement>(null)

  // nylang variables
  const [nylang_is_excuting, setNylang_is_excuting] = useState<boolean>(false)
  const [nylang_code, setNylang_code] = useState<string>("")

  // goRouter
  const goRoute = goRouter()

  useEffect(() => {
    if (modules) {
      setHistories(
        put_into_history(
          [
            ...modules.welcome_nysh(),
            "-> what is nysh? then type 'nyvim readme.md'",
          ],
          histories,
          max_size
        )
      )
    } else {
      new Promise((resolve: any) => {
        // file system
        const _stored = localStorage.getItem("mounted_dirs")
        const _stored_pre = localStorage.getItem("predict_his")
        if (!_stored) {
          localStorage.setItem("mounted_dirs", JSON.stringify(files))
          localStorage.setItem("predict_his", JSON.stringify(init_history()))
          setFile_system(files)
          setPredict_command(init_history())
        } else {
          // check the file is old or not
          const _stored_files: any = JSON.parse(_stored)
          const _stored_pre_files: any = JSON.parse(_stored_pre)
          if (_stored_files?.[0].scripts?.[0] != files?.[0].scripts?.[0]) {
            localStorage.setItem("mounted_dirs", JSON.stringify(files))
            localStorage.setItem("predict_his", JSON.stringify(init_history()))
            setFile_system(files)
            setPredict_command(init_history())
          } else {
            setFile_system(_stored_files)
            setPredict_command(_stored_pre_files)
          }
        }
        resolve()
      }).then(() => {
        return new Promise((resolve: any) => {
          // fetch wasm
          resolve()
        })
      })
    }
  }, [modules])

  useEffect(() => {
    command_input_ref.current !== null &&
      command_input_ref.current.scrollIntoView()
  }, [histories])

  // useEffects
  useEffect(() => {
    setTimeout(() => {
      setTicker(!ticker)
    }, 600)
  }, [ticker])

  useEffect(() => {
    // actual wasm loading async
    loadWasm("potaru", setModules)
    loadNylang(setExcute_nyl)

    // preventDefault
    document.addEventListener(
      "keydown",
      (event: any) => {
        if ([Keys.tab, Keys.up, Keys.down].includes(event.keyCode)) {
          event.preventDefault()
        }
        setUpdate(event.keyCode)
      },
      false
    )
  }, [])

  useEffect(() => {
    if (is_nyim) return
    if (update == Keys.enter) {
      // enter

      // update predition
      const updated_pred = update_prediction(command, predict_command)
      setPredict_command(Object.assign([], updated_pred))
      localStorage.setItem("predict_his", JSON.stringify(updated_pred))

      command !== "" &&
        run_command(
          command,
          setIsNysh,
          setHistories,
          setCurrent_dir,
          setFile_system,
          setNylang_is_excuting,
          setNylang_code,
          setNyim_contents,
          setNyim_fileName,
          setIs_nyim,
          modules,
          histories,
          max_size,
          current_dir,
          file_system,
          goRoute,
          excute_nyl
        )

      // push the command to the command history
      pushHistory(command, typed_history, setTyped_history)
      setMe_watching_typed_history(typed_history.length)
      setCommand("")
      kk()
    } else if (update == Keys.delete) {
      // delete
      setCommand(command.slice(0, -1))
    } else if (update == Keys.space) {
      // spaces
      command != "" && setCommand(command + " ")
    } else if (update >= 48 && 57 >= update) {
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
            [].concat(
              modules.available_command_of_default(),
              modules.available_command_of_wasm()
            ),
            file_system
          )
        )
      }
    } else if (update === Keys.up) {
      // up
      setMe_watching_typed_history(Math.max(0, me_watching_typed_history - 1))
      setCommand(typed_history[Math.max(0, me_watching_typed_history - 1)])
    } else if (update === Keys.down) {
      // down
      setMe_watching_typed_history(
        Math.min(typed_history.length - 1, me_watching_typed_history + 1)
      )
      setCommand(
        typed_history[
          Math.min(typed_history.length - 1, me_watching_typed_history + 1)
        ]
      )
    } else if (update === Keys.right) {
      // right
      setCommand(String(prediction))
    }

    // command prediction check
    if (command !== "") {
      let new_pred = ""
      // forEach predict_command using for statement
      for (let i = 0; i < predict_command.length; i++) {
        if (predict_command[i].name.includes(command)) {
          new_pred = predict_command[i].name
          break
        }
      }

      setPrediction(new_pred)
    } else {
      setPrediction("")
    }

    setUpdate(null)
  }, [update])

  // nylang
  useEffect(() => {
    // nylang lazy excution
    if (nylang_is_excuting) {
      setTimeout(() => {
        let evaluated: Array<string> = []
        try {
          evaluated = excute_nyl.excute_nyl(
            import_nyl(nylang_code) + nylang_code,
            Excute_nyl_options.run
          )
          setHistories(
            put_into_history([command, ...evaluated], histories, max_size)
          )
        } catch (e) {
          setHistories(
            put_into_history([command, "-! " + e], histories, max_size)
          )
        }
        setNylang_is_excuting(false)
      }, 10)
    }
  }, [nylang_is_excuting])

  // is nyim is enabled, show the nyim instead of the nysh interface
  if (is_nyim) {
    return (
      <NyimEditor
        nyim_contents={nyim_contents}
        setNyim_contents={setNyim_contents}
        nyim_fileName={nyim_fileName}
        closeNyim={() => setIs_nyim(false)}
        save_nyim={() => {
          if (nyim_contents != null) {
            setEditedContents(
              file_system,
              setFile_system,
              current_dir,
              nyim_fileName,
              nyim_contents
            )

            match(updateFiles(file_system), {
              Ok: _ => {},
              Err: e => {
                console.log(e)
              },
            })
          }
        }}
      />
    )
  }

  return (
    <div className={""}>
      <div className="MDArea-nysh">
        <div className="MDArea2 MDText MPPost nysh_flex">
          <div className={"nysh_title"}>{">"} nyu shell🦀</div>
          <div className={"nysh_back what_the"}>
            <div className={"commands_box"}>
              {histories.map((history: any) => {
                return (
                  <motion.div
                    className={"nysh_history"}
                    key={history.id}
                    initial={{
                      color: "#00FF00",
                      opacity: 0,
                    }}
                    animate={{
                      color: history.col,
                      opacity: 1,
                    }}
                  >
                    {showHistory(history)}
                  </motion.div>
                )
              })}
              <div className={"inside_commands"} ref={command_input_ref}>
                {prediction !== "" && (
                  <div className="predict">
                    {"->"} {prediction}
                  </div>
                )}
                {functions.print_dirs(current_dir)} {command}
                {ticker ? "🍙" : " "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {nylang_is_excuting && (
        <div className={"loading_background"}>
          <div className={"loading_maBox"}>
            <ClimbingBoxLoader color={"#ffffff"} size={25} />
          </div>
        </div>
      )}
    </div>
  )
}

export default NyshWindow
