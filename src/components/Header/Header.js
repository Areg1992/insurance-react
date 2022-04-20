import React from "react";
import './Header.scss';

function Header() {
    return (
        <header>
            <nav className="header-nav">
                <ul className="flex-container align-middle">
                    <li>
                        <a href="">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Policy
                        </a>
                    </li>
                    <li>
                        <a href="/InsurancePortalDashboard/reports" className="active">
                            Reports
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header