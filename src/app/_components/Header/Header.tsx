import HeaderGuessProfile from "./HeaderGuessProfile";
import HeaderLogo from "./HeaderLogo";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";

const login = true;
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between  px-4 py-2">
        <HeaderLogo></HeaderLogo>
        <HeaderSearch></HeaderSearch>
        {login ? (
          <HeaderProfile></HeaderProfile>
        ) : (
          <HeaderGuessProfile></HeaderGuessProfile>
        )}
      </header>
    </>
  );
}
