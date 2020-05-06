import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const Index = () =>{
    const images = useStaticQuery(graphql`
        query MyQuery {
            allFile {
                edges {
                    node {
                        childImageSharp {
                            id
                            fixed(height: 240, width: 480) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }      
    `)
    return(
        <div>
            <h1>Galeria de Imagens</h1>
            {images.allFile.edges.map(image => {
                return <Image fixed={image.node.childImageSharp.fixed}/>
            })}
        </div>
    )
}

export default Index