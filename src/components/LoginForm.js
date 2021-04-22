import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		const authObject = {
			'Project-ID': 'da01f184-3502-4319-b3f3-1cd6269ee117',
			'User-name': username,
			'User-Secret': password,
		}

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			})

			localStorage.setItem('username', username)
			localStorage.setItem('password', password)

			window.location.reload()
		} catch (err) {
			setError(
				'Either your username or password is incorrect! Check your credentials again',
			)
		}
	}

	return (
		<div className='wrapper'>
			<div className='form'>
				<h1 className='title'>Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={username}
						className='input'
						placeholder='Enter your username'
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<input
						type='password'
						value={password}
						className='input'
						placeholder='Enter your password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<div align='center'>
						<button type='submit' className='button'>
							<span>Login Now</span>
						</button>
					</div>
					<h2 className='error'>{error}</h2>
				</form>
			</div>
		</div>
	)
}

export default LoginForm
