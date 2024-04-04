import NavItem from '../navItem/NavItem';
import './navigation.css';

function Navigation({ direction }) {
    const navItems = [
        'Pokédex',
        'Team Generator',
        'Search Pokémons'
    ];

  return (
    <nav>
        <ul
            className={ "navigation-list " + direction }
        >
            {
                navItems.map((navItem, index) => {
                    return <NavItem 
                               title={ navItem }
                               key={ index } 
                           />
                })
            }
        </ul>
    </nav>
  )
}

export default Navigation;
