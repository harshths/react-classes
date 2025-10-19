import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <Card name="Harsh" age="23" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZM0hTutuW77wTIl_XJtmjU89xfQdub13CxzbxmfCz3zP62V1VeevJxykE21iSZrJYTA&usqp=CAU"></Card>
      <Card name="Neeraj" age="22" img="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"></Card>
      <Card name="Vaishali" age="24" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZVozSgxFLgtZrlinNvKPyUWTuLYY8mBjRUXuGJfVsgWil-o3RlO9r548rzs3EGLLMDw&usqp=CAU"></Card>
    </div>
  )
}

export default App
