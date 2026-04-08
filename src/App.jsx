import Nav from "./components/Nav"
import ChatInterface from "./components/ChatInterface"

export default function App() {
    return (
        <>
            <Nav />
            <ChatInterface/>
            <small className="bottom">
                By messaging Grok, you agree to our <span className="tacs">Terms</span> and <span className="tacs">Privacy Policy</span>.
            </small>
        </>
    )
}