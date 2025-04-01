/* eslint-disable react/prop-types */
import { Button } from 'antd'

export default function MyButton ({ handleClick, icon, title }) {
  return (
    <Button onClick={handleClick} type='primary' shape='rounded' icon={icon}>
      {title}
    </Button>
  )
}
