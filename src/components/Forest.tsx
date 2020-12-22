import React from "react";
import { motion } from "framer-motion";
import Particles from 'react-particles-js';
import "@/styles/component/Forest.scss";

const image01 = require("@/images/bk01.png");
const image02 = require("@/images/bk02.png");

export default function Forest(){
    return (
    
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1}}>
        <Particles
          className="Forest"
      params={{
        "particles": {
          "number": {
            "value": 2,
            "density": {
              "enable": true,
                "value_area": 150
                      }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
      "shape": {
            "type": [
                "image"
            ],
            "image": [
              {
                      "src": image01,
                      "height": 100,
                      "width": 100
                  },
                  {
                      "src": image02,
                      "height": 100,
                      "width": 100
                  }
              ]
          },
          "color": {
              "value": "#00000055"
          },
          "size": {
              "value": 200,
              "random": false,
              "anim": {
                  "enable": true,
                  "speed": 100,
                  "size_min": 10,
                  "sync": false
              }
          }
      },
      "retina_detect": false
        }} />
      </motion.div>
    );
};