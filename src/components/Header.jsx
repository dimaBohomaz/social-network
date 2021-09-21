import s from './Header.module.css'
const Header = () => {
    return (
        <header className = {s.header}>
        <img src = "https://cdn.pixabay.com/photo/2013/07/13/11/43/tux-158547__480.png" alt = 'penguin'/>
      </header>
    )
}
export default Header;