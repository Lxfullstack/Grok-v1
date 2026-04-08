import grokLogo from '../assets/images/grok.svg'
import settingsImg from '../assets/images/settings.svg'
import imagineImg from '../assets/images/imagine.svg'
export default function Nav() {
    return (
        <nav>
            <img src={grokLogo} alt="grokLogo" />
            <div className="nav-btns-container">
                <div className='nav-btns'><img src={imagineImg} alt="image icon" />Imagine</div>
                <div className='nav-btns'><img src={settingsImg} alt="settingsLogo" /></div>
                <div className='nav-btns s-btn btn-transp'>Sign in</div>
                <div className='nav-btns s-btn btn-blk'>Sign up</div>
            </div>
        </nav>
    )
}