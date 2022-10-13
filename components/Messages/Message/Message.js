import ReactEmoji from 'react-emoji'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './Message.module.css'

export default function Message({ message: { text, user }, username }) {
    let isSentByCurrentUser = false;

    const trimmedName = username.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    
    return (
        isSentByCurrentUser
            ? (
                <Box className={`${styles["message-container"]} ${styles["box-end"]}`}>
                    <Box className={`${styles["message-box"]} ${styles["background-own"]}`}>
                        <Typography className={`${styles["message-text"]} ${styles["color-own"]}`}>{ReactEmoji.emojify(text)}</Typography>
                    </Box>
                </Box>
            )
            : (
                <Box className={`${styles["message-container"]} ${styles["box-start"]}`}>
                    <Box className={`${styles["message-box"]} ${styles["background-user"]}`}>
                        <Typography variant="p" component="p" sx={{my:1}} className={`${styles["sent-text"]}`}>{user}</Typography>
                        <Typography variant="p" component="p" sx={{my:1}} className={`${styles["message-text"]} ${styles["color-user"]}`}>{ReactEmoji.emojify(text)}</Typography>
                    </Box>
                    
                </Box>
            )
        
    )
}
