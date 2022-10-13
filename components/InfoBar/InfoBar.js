import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings'
import Typography from '@mui/material/Typography'
import styles from './InfoBar.module.css'

export default function InfoBar({ room, showOnlineUser }) {
    return (
        <Box sx={{ width: "100%", p:1, pl: 3, display: 'flex' }} className={styles.infobar}>

            <Box sx={{ mt:.5, width:'90%', display: 'flex' }}>
                <Typography variant="h6" component="h6" sx={{ alignItems: "center", justifyContent: "center", textAlign: "left" }}>
                    Room {room}
                </Typography>
            </Box>
            <Box sx={{ width:'10%', display: 'flex', justifyContent: 'end' }}>
                <Button variant="contained" size="large" endIcon={<SettingsIcon sx={{ml:.5,mr:1}} className="icon" />} className="app-button" onClick={e => showOnlineUser(room)}></Button>
            </Box>
            
            
            
        </Box>
    )
}
  