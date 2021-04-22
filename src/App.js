import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
	if (!localStorage.getItem('username')) return <LoginForm />
	return (
		<ChatEngine
			height='100vh'
			projectID='da01f184-3502-4319-b3f3-1cd6269ee117'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	)
}

export default App
