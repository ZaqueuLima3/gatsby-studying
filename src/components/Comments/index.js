import React from "react"
import PropTyps from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styles"

const Comments = ({ url, title }) => {
  const completeURL = `https://zaqueulima.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="zaqueulima1"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTyps.string.isRequired,
  title: PropTyps.string.isRequired,
}

export default Comments
