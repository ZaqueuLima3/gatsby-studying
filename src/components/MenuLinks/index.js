import React from "react"

import links from "./content"

import * as S from "./styles"

export default function MenuLinks() {
  return (
    <S.MenuLinkWrapper>
      <S.MenuLinkList>
        {links.map((link, key) => (
          <S.MenuLinkItem key={key}>
            <S.MenuLinkLink to={link.url} activeClassName="active">
              {link.label}
            </S.MenuLinkLink>
          </S.MenuLinkItem>
        ))}
      </S.MenuLinkList>
    </S.MenuLinkWrapper>
  )
}
