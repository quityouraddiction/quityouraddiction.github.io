
// gatsby-node.js is responsible for creating pages from markdown files in the content folder and adding them to the pages array in gatsby-config.js it's also responsible for creating pages from markdown files in the content folder and adding them to the pages array in gatsby-config.js


const path = require("path");
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            origin
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error Loading MDX result", result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    createPage({
      // Path for this page
      path: `${node.frontmatter.origin}${node.frontmatter.slug}`,
      component: node.internal.contentFilePath,
      context: { id: node.id },
    });
  });
};
