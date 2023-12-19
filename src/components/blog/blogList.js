import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
const BlogList = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title,
          date
          
          
        }
      }
    }
  }
  `);

  return <div>
          {data.allMdx.nodes.map((node) => (
        <article
          key={node.id}
          className="border-b-white border-b mb-3"
        >

          <h2 className="mb-2 text-xl font-bold tracking-tight  text-white">
            <Link to={``}>{node.frontmatter.title}</Link>
          </h2>
          <p className="text-white mb-5 font-light">
            {node.frontmatter.date}
          </p>
          <div className="flex justify-between items-center">
            <Link
              to={`/blog/${node.frontmatter.slug}`}
              className="text-white inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline mb-3"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </article>
      ))}
  </div>;
};

export default BlogList;
