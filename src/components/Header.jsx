import imageHeader from "../assets/bg-cafe.jpg";

function Header() {
  return (
    <header className="w-full h-[350px] overflow-hidden">
      <img
        src={imageHeader}
        alt="image-cover"
        className="w-full h-full object-cover "
      />
    </header>
  );
}

export default Header;
