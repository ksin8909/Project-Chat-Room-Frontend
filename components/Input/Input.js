import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import styles from './Input.module.css'

export default function Input({ setMessage, sendMessage, message }) {
    return (
        <form className={styles.form}>
            <Box sx={{ mt:1, width:'90%', display: 'flex' }}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    />
            </Box>
            <Box sx={{ mt:1, width:'10%', display: 'flex', justifyContent: 'end' }}>
                <Button variant="contained" size="large" endIcon={<SendIcon sx={{mx:0}} className="icon" />} sx={{ width: '100%' }} className="app-button" onClick={e => sendMessage(e)}></Button>
            </Box>
        </form>
    )
}
  