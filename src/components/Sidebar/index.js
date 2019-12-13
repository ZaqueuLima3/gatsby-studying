import React, { Component } from "react"

import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import SocialLinks from "../SocialLinks"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styles"

export default class SideBar extends Component {
  render() {
    return (
      <S.SidebarWrapper>
        <Profile />
        <MenuLinks />
        <SocialLinks />
        <S.Search
          to="/search"
          title="Voltar para home"
          cover
          bg={getThemeColor()}
          direction="left"
          duration={0.6}
        >
          Procurando por algo?
        </S.Search>
      </S.SidebarWrapper>
    )
  }
}
