import { Excute_nyl_options } from "@/components/NyshWindow"
import { import_nyl } from "./nylang_lib"
import { cat_me, commandParser, generic_ls, is_vaild_dir, mkdirDir, put_into_history, removeFileOrDir, run_command_of_dotdot, touchFile, updateFiles } from "./nysh"

export const run_command = (
  command: string,
  setIsNysh: Function,
  setHistories: Function,
  setCurrent_dir: Function,
  setFile_system: Function,
  setNylang_is_excuting: Function,
  setNylang_code: Function,
  setNyim_contents: Function,
  setNyim_fileName: Function,
  setIs_nyim: Function,
  modules: any,
  histories: any,
  max_size: number,
  current_dir: Array<string>,
  file_system: any,
  goRoute: React.Dispatch<React.SetStateAction<string>>,
  excute_nyl: any,
): void => {

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