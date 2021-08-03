import React from 'react'
import ReactLoading from "react-loading"
import "@/styles/component/MDText.scss"
import '@/styles/component/MPPost.scss'
import '@/styles/component/nysh.scss'

const MPPost = React.lazy(() =>
    import("@/components/MPPost")
)

interface Props {
    setIsNysh: Function
}

const MDText: React.FC<Props> = ({ setIsNysh }: Props) => {
    const isSSR = typeof window === "undefined"
    return (
        <div className="MDText nysh_flex" >
            {!isSSR &&
                <React.Suspense fallback={<ReactLoading type={"bubbles"} color="#555555" />}>
                    <MPPost setIsNysh={setIsNysh} />
                </React.Suspense>
            }
        </div>
    )
}

export default MDText