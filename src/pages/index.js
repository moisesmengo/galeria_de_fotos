import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import '../assets/style.css'
import Header from '../components/Header'

const Index = () =>{
    const images = useStaticQuery(graphql`
        query MyQuery {
            allFile {
                edges {
                    node {
                        childImageSharp {
                            id
                            fluid(maxHeight: 240, maxWidth: 480) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        relativePath
                    }
                }
            }
        }      
    `)
    return(
        <div>
            <Header/>
            <div className="grid max-w-4xl grid-cols-2 gap-4 mx-auto ">
                {images.allFile.edges.map(image => {
                    return (
                        <div className="shadow rounded">
                            <Image 
                                className="rounded-t"
                                fluid={image.node.childImageSharp.fluid}
                            />
                            <p className="p-6">{image.node.relativePath}</p>
                        </div>
                    )
                })}
            </div>
            <div className="border-t mt-6 p-6 ">
                <p className="max-w-4xl mx-auto">Site desenvolvido durante o treinamento Power Sites</p>
            </div>
        </div>
    )
}

export default Index