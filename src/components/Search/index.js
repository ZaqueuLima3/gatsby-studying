import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styles"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApyKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}
const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApyKey)

const Search = () => {
  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <S.ListContainer>
          <Hits hitComponent={Hit} />
        </S.ListContainer>
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
