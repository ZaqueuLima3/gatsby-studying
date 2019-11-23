import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  width: 3.75rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  background-color: var(--mediumBackground);
  border-left: 1px solid var(--borders);

  ${media.lessThan("large")`
    flex-direction: row;
    bottom: 0;
    height: auto;
    padding: 0 0.2rem;
    width: 100%;
    border-top: 1px solid var(--borders);
    border-left: none;
    z-index: 3;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan("large")`
    flex-direction: row;
    
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;
  display: block;
  cursor: pointer;
  position: relative;
  color: var(--texts);

  ${media.lessThan("large")`
    padding: 1.3rem;

    &.display {
      display: none;
    }
  `}

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`
