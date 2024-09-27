import './App.css'
import Card from './components/Card'
import './css/bootstrap.min.css'
import CardBody from './components/CardBody';
import CardImage from './components/CardImage';
import imgPath from './img/111.jpg'


function App() {

  return (
    <>
      <Card widthCard='300px'>
        <CardImage imagePath={imgPath} imageAlt='Ship' />
        <CardBody title='Card title' >
          This is some text within a card body.
        </CardBody>
      </Card>

      <Card widthCard='300px'>
        <CardImage text='Image Cap' />
        <CardBody title='Card title' >
          This is some text within a card body.
        </CardBody>
      </Card>

      <Card>
        <CardBody title='Special title treatment'>
          With supporting text below as a natural lead-in to additional content.
        </CardBody>
      </Card>

    </>
  )
}

export default App
