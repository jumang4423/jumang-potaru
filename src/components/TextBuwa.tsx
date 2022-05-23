import React, {useEffect} from 'react'

const TextBuwa = ({text}): JSX.Element => {
  const [textCur, setTextCur] = React.useState("")

  const coverArrayBoolean = (coverArray: Array<boolean>): void => {
    // gen random index of 0 to text.length
    const randomNum = Math.floor(Math.random() * text.length)
    // if not covered, cover it
    for (let i = 0; i < coverArray.length; i++) {
      if (coverArray[randomNum] === false) {
        coverArray[randomNum] = true
        break
      }
    }
  }

  const IsCharJapanese = (char: string): boolean => {
    const charCode = char.charCodeAt(0)
    return (charCode >= 0x3040 && charCode <= 0x30FF)
  }

  useEffect(() => {
    // init coverages
    let covered = Array(text.length).fill(false)
    const id = setInterval(() => {

      for (let i = 0; i < 5; i++) {
        coverArrayBoolean(covered)
      }

      // gen random text
      const newText = text.split("").map((char, index) => {
        if (covered[index]) {
          return char
        } else {
          if (char == " ") {
            return " "
          }
          return IsCharJapanese(char) ? "＊" : "*"
        }
        return char
      })
      setTextCur(newText.join(""))
    }, 1000/60)

    return () => clearInterval(id)
  }, [])

  return (<pre>{textCur}</pre>)
}

export default TextBuwa
