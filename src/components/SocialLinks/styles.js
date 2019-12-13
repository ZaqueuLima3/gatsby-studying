import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinkWrapper = styled.nav`
  width: 80%;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--background);

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
