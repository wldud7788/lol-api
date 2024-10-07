import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>로테이션</Link>
      </nav>
    </header>
  );
};

export default Header;
