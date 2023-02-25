import React from 'react'
import users from '../users'
// import chatArea from './ChatAreas'
import ChatAreas from './ChatAreas'

function ChatAnonymus() {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}} >
      {users.map(user => (
        <ChatAreas
          title={user.title}
          desc={user.desc}
        />
      )
      )}

    </div>
  )
}

export default ChatAnonymus
