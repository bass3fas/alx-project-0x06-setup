import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Button>Click me</Button>
      </nav>
      <div>Current path: {pathname}</div>
      <div>Count: {count}</div>
    </header>
  );
};

export default Header;