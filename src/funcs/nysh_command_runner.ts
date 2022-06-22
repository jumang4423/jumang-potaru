import {Excute_nyl_options} from "@/components/NyshWindow"
import {import_nyl} from "./nylang_lib"
import {
  cat_me,
  commandParser, generic_la,
  generic_ls,
  history_type,
  is_vaild_dir,
  mkdirDir, open_file,
  put_into_history,
  removeFileOrDir,
  run_command_of_dotdot,
  touchFile,
  updateFiles,
  writeFile,
} from "./nysh"

export const update_prediction = (
  command: string,
  predict_command: Array<history_type>
): Array<history_type> => {
  if (command == "" || command == " ") {
    return predict_command
  }

  // if predict_command includes command, renew the date
  // else, add command into predict_command
  let new_predict_command: Array<history_type> = []
  let found: Boolean = false
  predict_command.forEach((element: history_type) => {
    if (element.name === command) {
      found = true
      new_predict_command.push({
        name: command,
        date: new Date(),
      })
    } else {
      new_predict_command.push(element)
    }
  })

  if (!found) {
    new_predict_command.push({
      name: command,
      date: new Date(),
    })
  }

  // sort predict_command by date
  new_predict_command.sort((a: any, b: any) => {
    return b.date - a.date
  })

  return Object.assign([], new_predict_command)
}

export const run_command = (
  commands: Array<string>,
  setHistories: Function,
  setCurrent_dir: Function,
  setFile_system: Function,
  setNylang_is_excuting: Function,
  setNylang_code: Function,
  setNylisp_is_excuting: Function,
  setNylisp_code: Function,
  setNyim_contents: Function,
  setNyim_fileName: Function,
  setIs_nyim: Function,
  modules: any,
  histories: any,
  max_size: number,
  current_dir: Array<string>,
  file_system: any,
  goRoute: React.Dispatch<React.SetStateAction<string>>,
  excute_nyl: any
): Array<string> => {
  const outputs: Array<string> = []

  commands.forEach((command: string) => {
      const output: Array<string> = []
      let evaluated = command

      const {com, arg, arg2, arg3} = commandParser(evaluated)
      switch (com) {
        case "exit":
          setHistories([{id: 1, com: ""}])
          setCurrent_dir(["/"])
          break
        case "sl":
          output.push(...[modules.sl(), "", "", "", ""])
          break

        case "nyfetch":
          // command, ...modules.nyfetch()
          output.push(...[
            command,
            ...modules.nyfetch(arg),
          ])
          break
        case "clear":
          setHistories([{id: 1, com: ""}])
          break
        case "welcome":
          // ...modules.welcome_nysh()
          output.push(...[
            ...modules.welcome_nysh(),
          ])
          break
        case "alert":
          if (arg == undefined) {
            output.push(...[
              "*lert",
              "-! message expected",
            ])
          } else {
            alert(arg)
            output.push(...[
              "*lert <displayed>",
            ])
          }

          break
        case "cat":
          output.push(...[
            command,
            ...cat_me(arg, current_dir, file_system).map((st: string) => {
                return st.split("\n").map((st: string) => {

                    const eacape_eacaped = st.replace("(esc)", "*escape exp*")

                    if (st !== "") {
                      return "🐱 " + eacape_eacaped
                    } else {
                        return ""
                    }
                }
                ).join("\n")
              }
            ),
          ])
          break
        case "open":

          if (arg === "" || arg === undefined) {
            output.push(...[
              command,
              `-> open <filename>.url to open a link`,
            ])
            return
          }

          if (!arg.includes(".url")) {
            output.push(...[
              command,
              `-! open: cannot open ${arg}, it is not a .url file`,
            ])

            return
          }

          open_file(
            file_system, current_dir, arg
          )
          break
        case
        "pwd"
        :
          output.push(...[
            command,
            "💓 " + current_dir.join(""),
          ])

          break
        case
        "cd"
        :
          if (arg === "..") {
            run_command_of_dotdot(
              command,
              max_size,
              current_dir,
              histories,
              setHistories,
              setCurrent_dir
            )
          } else if (arg == undefined) {
            // goto home dir
            setCurrent_dir(["/"])
            output.push(...[command, "↓"])
          } else if (is_vaild_dir(arg, current_dir, file_system)) {
            let newdir = Object.assign([], current_dir)
            newdir.push(arg + "/")
            setCurrent_dir(newdir)

            output.push(...[command, "↓"])
          } else {

            output.push(...[command, "-! no directory found"])
          }
          break
        case
        "touch"
        :
          touchFile(file_system, setFile_system, current_dir, arg)
          updateFiles(file_system)

          output.push(...[command])
          break
        case
        "mkdir"
        :
          mkdirDir(file_system, setFile_system, current_dir, arg + "/")
          updateFiles(file_system)

          output.push(...[command])
          break
        case
        "rm"
        :
          removeFileOrDir(file_system, setFile_system, current_dir, arg)
          updateFiles(file_system)

          output.push(...[command])
          break
        case
        "nyvim"
        :
          if (arg == undefined) {

            output.push(...[
              command,
              "-> welcome to nyvim, a simple text editor!",
              "-! nyvim <file> : to open the file",
            ])
          } else {
            setNyim_contents(cat_me(arg, current_dir, file_system).join("\n"))
            setNyim_fileName(arg)
            setIs_nyim(true)
          }

          output.push(...[command])
          break
        case
        ".."
        :
          run_command_of_dotdot(
            command,
            max_size,
            current_dir,
            histories,
            setHistories,
            setCurrent_dir
          )
          break
        case
        "ls"
        :
          output.push(...[command, ...generic_ls(current_dir, file_system)])
          break
        case
        "la"
        :

          output.push(...[command, ...generic_la(current_dir, file_system)])
          break
        case
        "whoami"
        :
          output.push(...[command, ...modules.whoami_call()])
          break
        case
        "help"
        :
          output.push(...[command, ...modules.help()])
          break
        case
        "nylang"
        :
          if (arg == undefined) {

            output.push(...[
              command,
              "-> welcome to nylang ( wasm edition ), is the interplitor written in rust",
              "-! nylang <file>.nyl : to excute code",
            ])
          } else {
            // get the code from file
            let code: string = cat_me(arg, current_dir, file_system).join("\n")

            if (code == "no file found") {
              output.push(...["-! no file found"])
              break
            }

            // set the nylang is excuting
            setNylang_is_excuting(true)
            setNylang_code(code)
          }
          break
        case
        "nylisp"
        :
          if (arg == undefined) {
            output.push(...[
              command,
              "-> nyu lisp, emoji lisp written in rust",
              "-! nylisp <file>.nlsp : to excute code",
            ])
          } else {
            // get the code from file
            let code: string = cat_me(arg, current_dir, file_system).join("\n")
            if (code == "no file found") {
              output.push(...[command, "-! no file found"])
              break
            }

            // set the nylisp is excuting
            setNylisp_is_excuting(true)
            setNylisp_code(code)
          }
          break
        case
        "transpiler_rust_nylang"
        :
          if (arg == undefined) {
            output.push(...[
              command,
              "-> welcome to transpiler_rust_nylang, a rust transpiler",
              "-! transpiler_rust_nylang <file>.nyl : to transpile code",
            ])
          } else {
            // get the code from file
            let code: string = cat_me(arg, current_dir, file_system).join("\n")

            if (code == "no file found") {
              output.push(...[command, "-! no file found"])
            } else {
              // transpile the code

              let transpiled_code: string

              try {
                transpiled_code = excute_nyl.transpile_to_rust_from_nylang(code)
              } catch (e) {
                output.push(...[command, "-! probaly something not implemened yet ( maybe )"])
                break
              }

              // put the code into file
              let file_name = arg.replace(".nyl", ".rs")

              // touch file
              touchFile(file_system, setFile_system, current_dir, file_name)

              // write the code into file
              writeFile(
                file_system,
                setFile_system,
                current_dir,
                file_name,
                transpiled_code
              )

              // output the transpiled code
              output.push(...[command, transpiled_code])
            }
          }
          break
        case
        "_nylang_debug"
        :
          if (arg == undefined) {
            output.push(...[
              command,
              "-! NYLANG PARSER FOR DEBUG",
              "-! self run <file> : to excute",
              "-! self parser <file> : to show ast",
              "-! self lexer <file> : to show tokens",
            ])
          } else {
            // get the code from file
            const code = cat_me(arg2, current_dir, file_system).join("\n")

            if (code == "no file found") {
              output.push(...[command, "-! no file found"])
              break
            }

            const start_time = new Date() // start timers

            if (arg == "run") {
              let excuted: Array<string> = []
              try {
                excuted = excute_nyl.excute_nyl(
                  import_nyl(code) + code,
                  Excute_nyl_options.run
                )
              } catch (e) {
                output.push(...[command, "-! " + e])
                break
              }
              // run the code
              output.push(...[command, ...excuted])
            } else if (arg == "parser") {
              let ast: Array<string> = []
              try {
                ast = excute_nyl.excute_nyl(code, Excute_nyl_options.parser)
              } catch (e) {
                output.push(...[command, "-! " + e])
                break
              }
              // run the code
              output.push(...[command, ...ast])
            } else if (arg == "lexer") {
              let ast: Array<string> = []
              try {
                ast = excute_nyl.excute_nyl(code, Excute_nyl_options.lexer)
              } catch (e) {
                output.push(...[command, "-! " + e])
                break
              }
              // run the code
              output.push(...[command, ...ast])
            }

            const end_time = new Date() // finished timers
            const diff_as_millis: any = end_time.getTime() - start_time.getTime() // get the time difference
            setTimeout(() => {
              output.push(...[command, "-! time used: " + diff_as_millis / 1000.0 + "s"])
            }, 5)
          }
          break
        case
        "_nylisp_debug"
        :
          output.push(...[command, "-! NYLISP PARSER FOR DEBUG"])
          break
        case
        ""
        :
          output.push(...["nil"])
          break
        default:
          output.push(...[command, "-! Unknown command: " + com])
      }

      if (!output.join().includes("(esc)")) {
        outputs.push(...output)
      }
    }
  )

  return outputs
}
