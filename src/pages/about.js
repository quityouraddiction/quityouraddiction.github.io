import * as React from 'react'
import Layout from '../components/layout'
import Blog1 from '../../content/addiction101/blog-1.mdx'

const AboutPage = () => {
    return (
        
        <Layout pageTitle="About Us">
            <Blog1 />
        </Layout>
    )
}

export const Head = () => <title>About Us</title>
export default AboutPage