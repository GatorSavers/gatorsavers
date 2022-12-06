import {NavLink} from 'react-router-dom';

let Nav =()=>{
    return (
        <div>
            <nav>
                <div className ='logo'>
                    <p>Gator Savers</p>
                </div>
                <div>
                    <ul>
                        <li><NavLink to = '/'>Home</NavLink></li>
                        <li><NavLink to = '/about'>About</NavLink></li>
                        <li><NavLink to = '/login'>Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav