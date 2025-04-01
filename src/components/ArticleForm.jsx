import { Input } from 'antd'
const { TextArea } = Input

export default function ArticleForm (props) {
  const handleChange = e => {
    switch (e.target.name) {
      case 'title':
        props.setTitle(e.target.value)
        break
      case 'content':
        props.setContent(e.target.value)
        break
    }
  }

  return (
    <>
      <form>
        <label htmlFor='title'>Titre</label>
        <Input
          type='text'
          name='title'
          id='title'
          placeholder='Votre titre'
          value={props.title}
          onChange={handleChange}
        />
        <label htmlFor='content'>Contenu</label>
        <TextArea
          name='content'
          id='content'
          placeholder='Votre contenu'
          value={props.content}
          onChange={handleChange}
        />
      </form>
    </>
  )
}
