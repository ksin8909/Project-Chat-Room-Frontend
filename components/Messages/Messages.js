import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Message from './Message/Message'
import styles from './Messages.module.css'

export default function Messages({ messages, username }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Box className={styles.messages}>
            {messages.map((message, i) => <div key={i}><Message message={message} username={username}/></div>)}
            <Box style={{ marginBottom: 100 }} ref={messagesEndRef} />
        </Box>
    )
}
  