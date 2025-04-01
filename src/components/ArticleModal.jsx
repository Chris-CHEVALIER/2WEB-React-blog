import { Modal } from 'antd'
import ArticleForm from './ArticleForm'
import { useState } from 'react'

export default function ArticleModal (props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleOk = () => {
    alert('Titre : ' + title + '\nContenu : ' + content)
    //alert(`Titre : ${title}\nContent ${content}`)
    props.handleCancel()
    setTitle('')
    setContent('')
  }

  return (
    <Modal
      title='Rédiger un article'
      open={props.isOpen}
      onOk={handleOk}
      onCancel={props.handleCancel}
    >
      <ArticleForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
    </Modal>
  )
}
