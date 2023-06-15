import { FC, ReactNode } from "react"
import Navbar from "./navbar/Navbar"
import Footer from "./Footer"

type props = {
    children: ReactNode,
}

const Layout: FC<props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout