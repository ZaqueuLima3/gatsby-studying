import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const SidebarWrapper = styled.div`
  width: 18rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  position: fixed;
  text-align: center;
  border-right: 1px solid var(--borders);
  background-color: var(--mediumBackground);

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`

export const Search = styled(AniLink)`
  margin-top: 3rem;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  color: var(--texts);
  font-weight: bold;
  background-color: var(--background);
  box-shadow: 6px 10px 11px -3px rgba(0, 0, 0, 0.26);
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--background);
    box-shadow: 8px 12px 13px -3px rgba(0, 0, 0, 0.26);
  }

  &:active {
    box-shadow: 2px 4px 5px -3px rgba(0, 0, 0, 0.26);
    background-color: var(--mediumBackground);
  }
`
