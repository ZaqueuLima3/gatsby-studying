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
  border-bottom: 1px solid var(--borders);

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
  min-width: 90px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.background};
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;

  ${media.lessThan("large")`
    min-width: auto;
    min-height: auto;
    border-radius: 4px;
    padding: 0.3rem;
    font-size: 1.1rem;
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
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
