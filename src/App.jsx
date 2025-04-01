import logo from './assets/logo.avif'
import './App.css'
import MyButton from './components/MyButton'
import { EditOutlined } from '@ant-design/icons'
import ArticleModal from './components/ArticleModal'
import { useState } from 'react'

export default function App () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <img src={logo} className='logo' alt='Logo de Coding Blog' />
      <h1>My Coding Blog</h1>
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
