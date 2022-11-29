import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	
	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default App
