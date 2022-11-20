import Menu from "./components/MenuNavbar";

const Layout = ({ children }) => {
    return (
        <>
            <Menu/>
            <main>{children}</main>
        </>
    );
};

export default Layout;