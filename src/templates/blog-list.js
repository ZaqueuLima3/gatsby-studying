import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styles"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListContainer>
        <S.ListWrapper>
          {postList.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { background, category, date, description, title },
                timeToRead,
              },
            }) => (
              <PostItem
                key={slug}
                slug={slug}
                background={background}
                category={category}
                date={date}
                timeToRead={`${timeToRead} min de leitura`}
                title={title}
                description={description}
              />
            )
          )}
        </S.ListWrapper>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </S.ListContainer>
    </Layout>
  )
}

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(
              fromNow: true
              locale: "pt-br"
              formatString: "DD [de] MMM [de] YYYY"
            )
            background
            category
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
