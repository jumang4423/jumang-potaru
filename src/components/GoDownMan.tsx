import React from "react"
import { motion } from "framer-motion"
import { navigate } from "gatsby"
import "@/styles/component/MDArea.scss"
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { useState } from "react"


interface Props {
}

const GoDownMan: React.FC<Props> = () => {
    const [open, setOpen] = useState<string>(null)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const handleClickOpen = (st: string) => {
        setOpen(st)
    }
    const handleClose = () => {
        setOpen(null)
    }

    const letsgo = () => {
        switch (open) {
            case "twitter":
                navigate("https://www.twitter.com/jumang4423", { replace: true })
                break
            case "soundcloud":
                navigate("https://soundcloud.com/jumang4423", { replace: true })
                break
            case "github":
                navigate("https://github.com/jumang4423", { replace: true })
                break
            default:
                navigate("https://www.hao123.com/", { replace: true })
                break
        }
    }

    return (
        <div className={"bdroper"}>
            <motion.div
                className="MDArea-sc"

                transition={{ duration: 0.35 }}
                initial={{ scale: 0.99 }}
                animate={
                    {
                        scale: 1.0,
                        background: "#FFFFFF"

                    }}
                whileTap={
                    {
                        scale: 1.02,
                    }}>
                <div className="MDArea2 MPPost MDArea3">
                    <div className="flexer">
                        <img
                            className={"flexed_icons pointme"}
                            src={"/soundcloud.svg"}
                            width={"50"}
                            onClick={() => handleClickOpen("soundcloud")} />
                        <img
                            className={"flexed_icons pointme"}
                            src={"/twitter.svg"}
                            width={"50"}
                            onClick={() => handleClickOpen("twitter")} />
                        <img
                            className={"flexed_icons pointme"}
                            src={"/github.svg"}
                            width={"50"}
                            onClick={() => handleClickOpen("github")} />
                    </div>
                </div>
            </motion.div>

            <Dialog
                fullScreen={fullScreen}
                open={open ? true : false}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title padpad"
            >
                <DialogTitle id="responsive-dialog-title">{"open " + (open ? open : "") + "?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        might this link ugly, you confirm it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={letsgo} color="primary">
                        ok lets go
                    </Button>
                    <Button onClick={letsgo} color="primary" >
                        why not
                    </Button>
                    <Button onClick={letsgo} color="primary">
                        i fucking will
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GoDownMan