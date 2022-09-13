import React from 'react'
import styles from './Message.module.css';

export type MessagePropsType = {
  avatar: string,
  name: string,
  message: string,
  time: string,
}

function Message(props: MessagePropsType) {
  return (
    <div className={styles.message}>
      <div className={styles.userAvatar}>
        <img src={props.avatar} alt='User avatar'/>
      </div>
      <div className={styles.bubble}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.userMessage}>
          <span className={styles.messageText}>{props.message}</span>
          <span className={styles.time}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
