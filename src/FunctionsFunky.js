export function addChatterChannel(name, userId) {
    return db.collection('channels').add({
      name,
      creator: userId,
      members: [],
      public: true,
      dateCreated: new Date()
    })
  }
  
  export function addChannelMessage(message) {
    return db.collection('messages').add({
      text: message.text,
      userId: message.userId,
      dateCreated: new Date(),
      channelId: message.channelId
    })
  }
  
  export function deleteChannel(channelId) {
    return db.collection('channels').doc(channelId).delete()
  }
  
  export function addNewUser(user) {
    return db.collection('users').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL
    })
  }
  
  export function joinChannel(channel, userId) {
    console.log(channel, userId)
    return db.collection('channels').doc(channel.id).set({
      members: [
        ...channel.members,
        userId
      ]
    }, { merge: true })
  }