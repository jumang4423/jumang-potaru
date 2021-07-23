// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

// const Image = ({ src }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 sizes(maxWidth: 800) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const image = data.images.edges.find(n => {
//         return n.node.relativePath.includes(src)
//       })
//       if (!image) {
//         return
//       }
//       else {
//         const imageSizes = image.node.childImageSharp.sizes
//         return <Img sizes={imageSizes}></Img>
//       }
//     }}
//   />
// )
// export default Image