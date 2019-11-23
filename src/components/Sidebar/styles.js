import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  width: 20rem;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
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
