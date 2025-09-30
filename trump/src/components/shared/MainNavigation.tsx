import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-2 ps-4 pe-4 fixed-top shadow-sm">
            <div className="container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-between">
                
                <h1 className="navbar-brand fw-semibold m-0 fs-4">Trump Assistant Tools</h1>
                
                <ul className="navbar-nav d-flex flex-row justify-content-center justify-content-sm-end">
                    <li className="me-4"><Link className="nav-link" to="/">Thoughts</Link></li>
                    <li className="me-4"><Link className="nav-link" to="staff">Staff</Link></li>
                    <li><Link className="nav-link" to="merch">Merch</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default MainNavigation;