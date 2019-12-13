import styled from "styled-components"

export const ListContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
`

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`
