import Card from './components/Card'
import './App.css'

function App() {
  return (
    <main className="page">
      <h1>React Like or Unlike Cards</h1>
      <div className="card-grid">
        <Card title="JavaScript" />
        <Card title="React" />
        <Card title="Python" />
        <Card title="HTML" />
      </div>
    </main>
  )
}

export default App
