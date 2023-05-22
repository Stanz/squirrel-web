import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";

const Header = () => {
  const { data: session } = useSession();
  return (
    <nav className="layout flex items-center justify-between py-4">
      <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#posts" className="hover:underline">
            Posts
          </Link>
        </li>
      </ul>
      <Avatar>
        <AvatarImage src={session?.user?.image} />
        <AvatarFallback>
          {session?.user?.name
            ?.split(" ")
            .map((s) => s[0] ?? "")
            .join("")
            .toUpperCase()
            .substring(0, 2)}
        </AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Header;
