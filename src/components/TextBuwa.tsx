import React, {useEffect} from 'react'

const TextBuwa = ({text}): JSX.Element => {
  const [textCur, setTextCur] = React.useState("")

  const coverArrayBoolean = (coverArray: Array<boolean>): void => {
    if (coverArray.length > 128) {
      // fill with true
      for (let i = 0; i < coverArray.length; i++) {
        coverArray[i] = true
      }
      return
    }

    // if not covered, cover it
    for (let i = 0; i < 4; i++) {
      // gen random index of 0 to text.length
      const randomNum = Math.floor(Math.random() * text.length)
      if (coverArray[randomNum] === false) {
        coverArray[randomNum] = true
        break
      }
    }
  }

  const IsCharJapaneseOrEmoji = (char: string): boolean => {
    const charCode = char.charCodeAt(0)
    return (charCode >= 0x3040 && charCode <= 0x30FF) || (charCode >= 0x31F0 && charCode <= 0x31FF)
  }

  const isFilled = (covered: Array<boolean>): boolean => {
    return !covered.includes(false)
  }

  useEffect(() => {
    // init coverages
    let covered = Array(text.length).fill(false)
    const id = setInterval(() => {

      if (isFilled(covered)) {
        clearInterval(id)
        return
      }

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
          return IsCharJapaneseOrEmoji(char) ? "＊" : "*"
        }
      })
      setTextCur(newText.join(""))
    }, 1000/60)

    return () => clearInterval(id)
  }, [])

  return (<pre style={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
  }}>{textCur}</pre>)
}

export default TextBuwa
