import React from "react"

import imagem from "../../images/undraw_noted_pc9f.svg"

import * as S from "./styles"

export default function About() {
  return (
    <S.Container>
      <h1>Você chegou muito cedo! Ainda estamos trabalhando aqui! :D</h1>
      <img src={imagem} alt="teste" />
    </S.Container>
  )
}
