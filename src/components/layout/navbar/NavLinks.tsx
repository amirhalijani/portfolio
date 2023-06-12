import { NavLinksTag } from "@/static/NavLinksTag"
import Link from "next/link"

const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-x-8">
      {
        NavLinksTag.map((item) =>
          <Link className="text-gray-500 text-[0.9rem] hover:text-black" href={item.href}>{item.title}</Link>
        )}
    </div>
  )
}

export default NavLinks