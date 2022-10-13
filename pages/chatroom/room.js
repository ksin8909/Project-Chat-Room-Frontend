import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import io from "socket.io-client"
import { PROJECT_NAME } from '../../lib/constants'
import ChatBox from '../../components/ChatBox/ChatBox'

const ENDPOINT = 'https://project-chat-room-backend.onrender.com/';
let socket;

export default function Room() {
    const router = useRouter();
    const [rusername, setRUsername] = useState('');
    const [rroom, setRRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const showOnlineUser = (room) => {
      handleOpenModal();
    }
    
    useEffect(() => {
        const { username, room } = router.query;
        socket = io(ENDPOINT);

        socket.emit('join', { username, room }, (error) => {
          if(error) {
              alert(error);
          }
        });

        setRUsername(username);
        setRRoom(room);

    }, [ENDPOINT, router.query]);
    
    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

  return (
      <Box sx={{ display: 'flex' }} className="appbox">
        <Head>
            <title>Room {rroom} | {PROJECT_NAME}</title>
            <meta name="description" content={PROJECT_NAME} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box component="main" sx={{ width: 1 }}>
          <Container maxWidth="xl">
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={{ height: "100vh" }}>
              <ChatBox room={rroom} username={rusername} messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} showOnlineUser={showOnlineUser} />
            </Grid>
          </Container>
        </Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '10px',
            p: 4,}}>
            <Typography id="modal-title" variant="h6" component="h2">
              Online Users:
            </Typography>
            {users.map((user, i) => <div key={i}><Typography id="modal-description" sx={{ mt: .5 }}>{user.username}</Typography></div>)}
          </Box>
        </Modal>
      </Box>

  )
}
