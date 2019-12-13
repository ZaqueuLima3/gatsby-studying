import React from "react"

import links from "./content"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styles"

export default function MenuLinks() {
  return (
    <S.MenuLinkWrapper>
      <S.MenuLinkList>
        {links.map((link, key) => (
          <S.MenuLinkItem key={key}>
            <S.MenuLinkLink
              to={link.url}
              activeClassName="active"
              title="Voltar para home"
              cover
              bg={getThemeColor()}
              direction="left"
              duration={0.6}
            >
              {link.label}
            </S.MenuLinkLink>
          </S.MenuLinkItem>
        ))}
      </S.MenuLinkList>
    </S.MenuLinkWrapper>
  )
}
