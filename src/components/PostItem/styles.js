import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 35px;
  background-color: var(--mediumBackground);
  border-left: 30px solid ${p => p.backgroundBorder};
  border-radius: 24px;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  padding: 5px 15px;
  align-self: flex-start;
  background-color: ${p => p.background};
  border-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 0.8rem 0;

  ${media.lessThan("large")`
    padding: 5px 10px;
    border-radius: 4px;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  ${media.lessThan("large")`
    margin: 1.2rem 0 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-top: 0.8rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
