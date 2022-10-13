import { useState, useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Typewriter from 'typewriter-effect'
import { PROJECT_NAME } from '../lib/constants'

export default function Home() {
  const [username, setUsername] = useState('Guest');

  return (
    <Box sx={{ display: 'flex' }} className="appbox">
      <Head>
        <title>{PROJECT_NAME}</title>
        <meta name="description" content={PROJECT_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main" sx={{ width: 1 }}>
        <Container maxWidth="xl">
          <Grid
            item
            xs={12}
            display="grid"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ height: "100vh", gridTemplateRows: "70% 30%" }}>
            <Box>
              <Typography variant="h2" component="h2" sx={{ alignItems: "center", justifyContent: "center" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Chat Room with <span class="typeeffect-1">Socket.IO</span>')
                      .pauseFor(1500)
                      .deleteChars(9)
                      .typeString('<span class="typeeffect-2">Express</span>')
                      .pauseFor(1500)
                      .deleteChars(7)
                      .typeString('<span class="typeeffect-3">Next.js</span>')
                      .pauseFor(1500)
                      .start();
                  }}
                  options={{ loop: true}}
                />
              </Typography>
            </Box>
              
            <Box
              component="form"
              >
                <Box sx={{ display: "inline-flex" }}>
                  <TextField label="Type your username" variant="outlined" sx={{background:'white', mx:1}} onChange={(event) => setUsername(event.target.value)} />
                  <Link href={`/chatroom/room?username=${username}&room=A`} passHref>
                    <Button variant="contained" size="large" sx={{mx:1}} className="app-button">Room A</Button>
                  </Link>
                  <Link href={`/chatroom/room?username=${username}&room=B`} passHref>
                    <Button variant="contained" size="large" sx={{mx:1}} className="app-button">Room B</Button>
                  </Link>
                  <Link href={`/chatroom/room?username=${username}&room=C`} passHref>
                    <Button variant="contained" size="large" sx={{mx:1}} className="app-button">Room C</Button>
                  </Link>
                </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
