import React from 'react'

interface Props {
  title: string
  content: string
  commentQty: number
  tags: string[]
  // 8 - enum
  category: Category
}
export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
 }
const Destructuring = ({title,content,commentQty,tags, category}:Props) => {
  return (

    <div>
      <hr />
      <p>{title}</p>
      <p>{content}</p>
      <p>Quantidade de comentários:{commentQty}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag }</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring