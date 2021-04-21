import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

function App() {
	return (
		<ChatEngine
			height='100vh'
			projectID='da01f184-3502-4319-b3f3-1cd6269ee117'
			userName='kuldeepyadavky'
			userSecret='123456'
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	)
}

export default App
