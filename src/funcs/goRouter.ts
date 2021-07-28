import { useEffect, useState } from "react"
import { navigate } from 'gatsby'

export const goRouter = () => {

    const [goPath, setGoPath] = useState<string>(null)
    useEffect(() => {
        if (goPath) {
            navigate(goPath)
            setGoPath(null)
        }
    }, [goPath])

    return setGoPath
}