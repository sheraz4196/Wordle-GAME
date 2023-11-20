import React from "react";

function Footer() {
  const [currentYear, setCurrentYear] = React.useState("");
  React.useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(date);
    setCurrentYear(year.toString());
  }, []);
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear}, All Rights are reserved by{" "}
        <strong>Sheraz Manzoor</strong>.
      </p>
    </footer>
  );
}
export default Footer;
