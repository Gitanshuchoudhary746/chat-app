import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage =(props)=>{
    const chatProps=useMultiChatLogic('3989678e-e8d0-4774-be74-6a0736c24a99',props.user.username,props.user.secret);
    return <div style={{
        height:'100vh',
    }}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps} style={{
            height:'100%',
            backgroundColor:'black'
        }}/>
    </div>
}
export default ChatsPage;