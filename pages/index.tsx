import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { ToastContainer } from 'react-toastify'
import Container  from 'react-bootstrap/Container'
import MainContainer from './containers/MainContainer'

import { canBeRendered } from 'react-toastify/dist/utils'

export default function Home() {
  return (
    <Container fluid className="App-header">
      <ToastContainer />
      <MainContainer />
    </Container>
  )
}
