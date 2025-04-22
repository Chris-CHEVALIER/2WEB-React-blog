import logo from './assets/logo.avif'
import './App.css'
import MyButton from './components/MyButton'
import { EditOutlined } from '@ant-design/icons'
import ArticleModal from './components/ArticleModal'
import { useState, useEffect } from 'react'
import { getArticles } from '../Fire'
import { Card } from 'antd'
import { Spin } from 'antd'

export default function App () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Le composant vient d'être créé !")
    getArticles(posts => {
      setArticles(posts)
      setLoading(false)
    })
  }, [])

  console.log(articles)

  return (
    <>
      <img src={logo} className='logo' alt='Logo de Coding Blog' />
      <h1>My Coding Blog 🎉</h1>
      {loading == true && <Spin />}
      {articles.map(article => (
        <Card key={article.id} title={article.title}>
          <p>{article.content}</p>
        </Card>
      ))}
      <MyButton
        icon={<EditOutlined />}
        handleClick={() => setIsModalOpen(true)}
        title='Rédiger un article'
      />
      <ArticleModal
        isOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
      />
    </>
  )
}
