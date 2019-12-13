import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinkWrapper = styled.div`
  margin: 3rem 0;
  width: 80%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinkList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinkItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--background);
  transition: 0.5ms background ease-in-out;
`

export const MenuLinkLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--highlight);
  }
  &.active {
    color: var(--highlight);
  }
`
