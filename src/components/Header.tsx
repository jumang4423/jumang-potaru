import React, { useState } from "react"
import HeaderFoot from "@/components/HeaderFoot"
import { motion } from "framer-motion"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Menu, MenuItem } from "@material-ui/core"
import { Link } from "gatsby"
import "@/styles/component/Header.scss"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <div className="Header">
      <HeaderFoot />
      <motion.div
        className="opaopa"
        initial={{
          opacity: 0.0,
          backgroundColor: "rgba(255, 100, 0, 0)",
          color: "rgba(50, 50, 50, 0.9)",
        }}
        animate={{
          opacity: 1,
          backgroundColor: "rgba(200, 200, 200, 0.0)",
        }}
        whileHover={{
          scale: 1.06,
          backgroundColor: "rgba(200, 200, 200, 0.4)",
        }}
        whileTap={{
          scale: 0.96,
          backgroundColor: "rgba(230, 230, 200, 0.6)",
        }}
        onClick={event => {
          setAnchorEl(event.currentTarget)
        }}
      >
        <ExpandMoreIcon />
      </motion.div>

      <Menu
        id="simple-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        className={"MuiMenu-paper"}
      >
        <div className={"clear_font_menu nodeco mentagwrapper"}>{"> "}menu</div>

        <Link to="/projects" className={"nodeco"}>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <div className={"clear_font"}>{"🐤 "}projects</div>
          </MenuItem>
        </Link>

        <Link to="/about" className={"nodeco"}>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <div className={"clear_font"}>{"🌸 "}about</div>
          </MenuItem>
        </Link>

        <Link to="/backwash" className={"nodeco"}>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <div className={"clear_font"}>{"🍰 "}backwash</div>
          </MenuItem>
        </Link>

        <Link
          to="https://universe-jumang.web.app/"
          className={"nodeco little_blue"}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <div className={"clear_font"}>{"🐶 "}blog</div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Header
