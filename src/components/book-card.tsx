import './style.css'

type Props = {
  id: string
  title: string
  author: string
  yearOfPub: number
  sinopsis: string
}

export const BookCard = ({ title, author, yearOfPub, sinopsis }: Props) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p>Autor: {author}</p>
      <p>Ano de publicação: {yearOfPub}</p>
      <p>{sinopsis}</p>
    </div>
  )
}
