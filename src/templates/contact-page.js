import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <header className="header">
        <div className="container">
          <h2 className="title is-size-3 title-text-weight-bold is-bold-light">CONTACT</h2>
        </div>
      </header>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-desktop">
                <h2 className="title is-size-3 title-text-weight-bold is-bold-light">{title}</h2>
                <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return <ContactPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />;
};

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
