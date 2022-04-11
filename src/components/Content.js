import { ReactComponent as Logo } from "../images/LOGO.svg";
import { ReactComponent as LogoText } from "../images/Logo Text.svg";
export default function Content() {
  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <Logo className=" justify-center flex" />
      <LogoText className=" absolute right-10 top-10" />
    </div>
  );
}
