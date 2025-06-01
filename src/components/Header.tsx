import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { ApplicationLogo } from "./ApplicationLogo";
import LinkButton from "./LinkButton";
import EkiliRelay from "ekilirelay";

const Header = () => {
  // State to manage theme (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Checking localStorage for saved theme
    const storedTheme = localStorage.getItem("theme");
    // Setting initial theme based on localStorage or system preference
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  //function fo testing ekilirelay package
  const testPkg = () => {
    const mailer = new EkiliRelay("relay-6087f8c42d70f0650b9f023adc");

    mailer
      .sendEmail(
        "support@ekilie.com",
        "Test Subject from react",
        "This is a test message.",
        "From: ekiliRelay <stacherasasi@gmail.com>"
      )
      .then((response) => {
        if (response.status === "success") {
          console.log("Email sent successfully.");
        } else {
          console.log("Failed to send email: " + response.message);
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <header className="w-full p-6 flex justify-between ">
      <div className="flex items-center">
        <a href="./" className="flex gap-2 items-center dark:text-neutral-200">
          <ApplicationLogo className="block h-8 w-8 fill-current" />
          <h1 className="font-bold text-4xl">ekilie</h1>
        </a>
      </div>

      <div className="flex gap-4 items-center">
        {/* Theme Toggler */}
        <button
          onClick={toggleTheme}
          className="inline-flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none  transition ease-in-out duration-150"
          aria-label="Toggle theme"
          title="toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-neutral-900 dark:text-neutral-300" /> // Sun icon for light mode
          ) : (
            <Moon className="w-6 h-6 text-neutral-900 dark:text-neutral-300" /> // Moon icon for dark mode
          )}
        </button>

        {/* test button for ekilirelay
        <button onClick={testPkg} className='inline-flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md font-semibold text-xs dark:text-white'>
          send
        </button> */}

        <LinkButton to="#explore">Explore</LinkButton>
      </div>
    </header>
  );
};

export default Header;
