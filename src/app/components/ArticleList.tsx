import { Article } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArticleCard from './ArticleCard'

type ArticlesListProps = {
  articles: Article[]
}

export const ArticleList = ({ articles }: ArticlesListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  )
}
