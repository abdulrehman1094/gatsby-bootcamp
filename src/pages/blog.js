import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import images from "../images/surgery.jpg"
import images2 from "../images/Capture.png"
import images3 from "../images/Bring-Back.jpg"
import '../styles/blog.css'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>


            <div class="centered">
 
 <section class="cards">
      
     <article class="card">
         <img src={images}></img>
        <p>content for card one</p>
     </article>

<article class="card">
<img src={images2}></img>
        <p>content for card two</p>
 </article>

<article class="card">
<img src={images3}></img>
       <p>content for card three</p>
 </article>

</section>
</div>


        </Layout>
    )
}

export default BlogPage