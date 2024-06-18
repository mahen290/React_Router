import { NavLink, Outlet } from "react-router-dom";

function RootLayouts() {
  return (
    <div className="root layout">
        <header>
            <h1> Most Welcome </h1>
            <nav>
                <NavLink to = '/'> Home Page </NavLink>
                <NavLink to = "about"> About Me </NavLink>
                <NavLink to = "contact"> Contact Me </NavLink>
                <NavLink to = "FAQ"> FAQ </NavLink>
                <NavLink to = "HelpLayout"> Need Help </NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    
    </div>
  );
}

export default RootLayouts;