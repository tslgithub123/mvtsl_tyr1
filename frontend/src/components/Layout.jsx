//  26 April 12:32
// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";
// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin
//         ? adminMenu
//             : userMenu;
//     return (
//         <>
//             <div className="main">
//                 <div className="layout">
//                     <div className="sidebar">
//                         <div className="logo">
//                             <h6>TSL Users</h6>
//                             <hr />
//                         </div>
//                         <div className="menu">
//                             {SidebarMenu.map(menu => {
//                                 const isActive = location.pathname === menu.path
//                                 return (
//                                     <>
//                                         <div className={`menu-item ${isActive && "active"}`}>
//                                             <i className={menu.icon}></i>
//                                             <Link to={menu.path}>{menu.name}</Link>
//                                         </div>
//                                     </>
//                                 );
//                             })}
//                             <div className={`menu-item `} onClick={handleLogout}>
//                                 <i className="fa-solid fa-right-from-bracket"></i>
//                                 <Link to="/login">Logout</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="header">
//                             <div className="header-content" style={{ cursor: "pointer" }}>
//                                 {/* <Badge
//                                     count={user && user.notification.length}
//                                     onClick={() => {
//                                         navigate("/notification");
//                                     }}
//                                 >
//                                     <i class="fa-sharp fa-solid fa-bell"></i>
//                                 </Badge> */}

//                                 <Link to="">{user?.name}</Link>
//                             </div>
//                         </div>
//                         <div className="body">{children}</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Layout;

// 26 April 12:57
// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";
// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin
//         ? adminMenu
//             : userMenu;
//     return (
//         <>
//             <div className="main">
//                 <div className="layout">
//                     <div className="sidebar">
//                         <div className="logo">
//                             <h6>TSL Users</h6>
//                             <hr />
//                         </div>
//                         <div className="menu">
//                         {SidebarMenu.map(menu => {
//     const isActive = location.pathname === menu.path;
//     return (
//         <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
//             <i className={menu.icon}></i>
//             <Link to={menu.path}>{menu.name}</Link>
//         </div>
//     );
// })}

//                             <div className={`menu-item `} onClick={handleLogout}>
//                                 <i className="fa-solid fa-right-from-bracket"></i>
//                                 <Link to="/login">Logout</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="header">
//                             <div className="header-content" style={{ cursor: "pointer" }}>
//                                 {/* <Badge
//                                     count={user && user.notification.length}
//                                     onClick={() => {
//                                         navigate("/notification");
//                                     }}
//                                 >
//                                     <i class="fa-sharp fa-solid fa-bell"></i>
//                                 </Badge> */}

//                                 <Link to="">{user?.name}</Link>
//                             </div>
//                         </div>
//                         <div className="body">{children}</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Layout;

// // Layout.jsx

// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";

// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//     return (
//         <div className="main">
//             <div className="layout">
//                 <div className="sidebar">
//                     <div className="logo">
//                         <h6>TSL Users</h6>
//                         <hr />
//                     </div>
//                     <div className="menu">
//                         {SidebarMenu.map((menu) => {
//                             const isActive = location.pathname === menu.path;
//                             return (
//                                 <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
//                                     <i className={menu.icon}></i>
//                                     <Link to={menu.path}>{menu.name}</Link>
//                                 </div>
//                             );
//                         })}
//                         <div className={`menu-item `} onClick={handleLogout}>
//                             <i className="fa-solid fa-right-from-bracket"></i>
//                             <Link to="/login">Logout</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="content">
//                     <div className="header">
//                         <div className="header-content" style={{ cursor: "pointer" }}>
//                             <Link to="">{user?.name}</Link>
//                         </div>
//                     </div>
//                     <div className="body">
//                         {/* Iterate over children and add unique keys */}
//                         {React.Children.map(children, (child, index) => {
//                             return React.cloneElement(child, { key: index });
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Layout;

// Layout.jsx

// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";

// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//     return (
//         <>
//             <div className="main">
//                 <div className="layout">
//                     <div className="sidebar">
//                         <div className="logo">
//                             <h6>TSL Users</h6>
//                             <hr />
//                         </div>
//                         <div className="menu">
//                             {SidebarMenu.map(menu => {
//                                 const isActive = location.pathname === menu.path;
//                                 return (
//                                     <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
//                                         <i className={menu.icon}></i>
//                                         <Link to={menu.path}>{menu.name}</Link>
//                                     </div>
//                                 );
//                             })}
//                             <div className={`menu-item `} onClick={handleLogout}>
//                                 <i className="fa-solid fa-right-from-bracket"></i>
//                                 <Link to="/login">Logout</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="header">
//                             <div className="header-content" style={{ cursor: "pointer" }}>
//                                 <Link to="">{user?.name}</Link>
//                             </div>
//                         </div>
//                         {/* Ensure each child in Body component has a unique key */}
//                         <div className="body">
//                             {React.Children.map(children, (child, index) => {
//                                 return React.cloneElement(child, { key: index });
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Layout;

// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";

// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//     return (
//         <>
//             <div className="main">
//                 <div className="layout">
//                     <div className="sidebar">
//                         <div className="logo">
//                             <h6>TSL Users</h6>
//                             <hr />
//                         </div>
//                         <div className="menu">
//                             {SidebarMenu.map(menu => {
//                                 const isActive = location.pathname === menu.path;
//                                 return (
//                                     <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
//                                         <i className={menu.icon}></i>
//                                         <Link to={menu.path}>{menu.name}</Link>
//                                     </div>
//                                 );
//                             })}
//                             <div className={`menu-item `} onClick={handleLogout}>
//                                 <i className="fa-solid fa-right-from-bracket"></i>
//                                 <Link to="/login">Logout</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="header">
//                             <div className="header-content" style={{ cursor: "pointer" }}>
//                                 <Link to="">{user?.name}</Link>
//                             </div>
//                         </div>
//                         {/* Ensure each child in Body component has a unique key */}
//                         <div className="body">
//                             {React.Children.map(children, (child) => {
//                                 // Use a unique identifier for each child
//                                 return React.cloneElement(child, { key: child.props.uniqueKey });
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Layout;

//---------------------------------------------5:44 29may working fine ------------------------------------------------
// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";

// const Layout = ({ children }) => {
//     const { user } = useSelector((state) => state.user);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         message.success("Logout Successfully");
//         navigate("/login");
//     };

//     const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//     return (
//         <>
//             <div className="main">
//                 <div className="layout">
//                     <div className="sidebar">
//                         <div className="logo">
//                             <h6>TSL Users</h6>
//                             <hr />
//                         </div>
//                         <div className="menu">
//                             {SidebarMenu.map(menu => {
//                                 const isActive = location.pathname === menu.path;
//                                 return (
//                                     <div key={menu.path} className={`menu-item ${isActive && "active"}`}>
//                                         <i className={menu.icon}></i>
//                                         {/* Check if menu has submenu */}
//                                         {menu.submenu ? (
//                                             <div className="dropdown">
//                                                 <button className="dropdown-toggle" type="button">
//                                                     {menu.name}
//                                                 </button>
//                                                 <div className="dropdown-menu">
//                                                     {menu.submenu.map(submenuItem => (
//                                                         <Link key={submenuItem.path} className="dropdown-item" to={submenuItem.path}>{submenuItem.name}</Link>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         ) : (
//                                             <Link to={menu.path}>{menu.name}</Link>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                             <div className={`menu-item `} onClick={handleLogout}>
//                                 <i className="fa-solid fa-right-from-bracket"></i>
//                                 <Link to="/login">Logout</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="header">
//                             <div className="header-content" style={{ cursor: "pointer" }}>
//                                 <Link to="">{user?.name}</Link>
//                             </div>
//                         </div>
//                         <div className="body">
//                             {React.Children.map(children, (child, index) => {
//                                 const key = child.props.uniqueKey || index;
//                                 return React.cloneElement(child, { key });
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Layout;




import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { v4 as uuidv4 } from "uuid"; // Importing uuid

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/login");
    };

    const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

    return (
        <>
            <div className="main">
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h6>TSL Users</h6>
                            <hr />
                        </div>
                        <div className="menu">
                            {SidebarMenu.map(menu => {
                                const isActive = location.pathname === menu.path;
                                return (
                                    <div key={uuidv4()} className={`menu-item ${isActive && "active"}`}>
                                        <i className={menu.icon}></i>
                                        {/* Check if menu has submenu */}
                                        {menu.submenu ? (
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button">
                                                    {menu.name}
                                                </button>
                                                <div className="dropdown-menu">
                                                    {menu.submenu.map(submenuItem => (
                                                        <Link key={uuidv4()} className="dropdown-item" to={submenuItem.path}>{submenuItem.name}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={menu.path}>{menu.name}</Link>
                                        )}
                                    </div>
                                );
                            })}
                            <div className={`menu-item `} onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <Link to="/login">Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="header-content" style={{ cursor: "pointer" }}>
                                <Link to="">{user?.name}</Link>
                            </div>
                        </div>
                        <div className="body">
                            {React.Children.map(children, (child) => {
                                return React.cloneElement(child, { key: uuidv4() });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
