import Box from '@mui/material/Box'
import InfoBar from '../InfoBar/InfoBar'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import styles from './ChatBox.module.css'

export default function ChatBox({ room, username, messages, message, setMessage, sendMessage, showOnlineUser }) {
    return (
        <Box sx={{ width: "100%", height: "90%", p:1 }} className={styles.container}>
            <InfoBar room={room} showOnlineUser={showOnlineUser} />
            <Messages messages={messages} username={username} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </Box>
    )
}
  