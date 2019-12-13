import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styles"
import GlobalStyle from "../../styles/global"
import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      {/* <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal> */}
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
