
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn } from 'lucide-react';
import { cn } from "@/lib/utils";
declare global {
  interface Window {
    ethereum?: any;
  }
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string>("");
  // document.getElementById("login").style.display = "block";
  useEffect(() => {
  document.getElementById("logout").style.visibility = "hidden";
  document.getElementById("logout1").style.visibility = "hidden";
    

      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts: string[]) => {
          setWalletAddress(accounts[0] || "");
          alert("Wallet changed to: " + (accounts[0] || "Disconnected"));
        });
      }
     
      

  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function getdetails(address: string) {
    const loggedindetails = {
      address: address,
      name: "User Name", // Replace with actual user name if available
      role:"student"
      // Add any other details you want to store
    };
    return loggedindetails;
  }


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
            const address = accounts[0];
        setWalletAddress(address);
        var loggedindetails=getdetails(address);
        var logged=JSON.stringify(loggedindetails);

        document.getElementById("login").style.visibility = "hidden";
        document.getElementById("logout").style.visibility = " visible";
        document.getElementById("login1").style.visibility = "hidden";
        document.getElementById("logout1").style.visibility = " visible";
        alert("Connected Wallet");
        localStorage.setItem("loggedin",logged);
      } catch (error) {
        console.error("Connection error:", error);
        alert("🛑 Connection failed or denied.");
      }
    } else {
      alert("🦊 MetaMask not found. Please install MetaMask extension.");
    }
  };
  const disconnectWallet = async () => {
    if (window.ethereum) {
      try {
        setWalletAddress("");
        localStorage.removeItem("loggedin");
        document.getElementById("login").style.visibility = " visible";
        document.getElementById("logout").style.visibility = "hidden";
        document.getElementById("login1").style.display = "none";
        document.getElementById("logout1").style.display = " inline-block";
        alert("Disconnected Wallet");
      } catch (error) {
        console.error("Disconnection error:", error);
        alert("🛑 Disconnection failed.");
      }
    } else {
      alert("🦊 MetaMask not found. Please install MetaMask extension.");
    }
  }

  
    
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-200/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gradient">SikshaSathi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Login/Register buttons */}
          <div className="hidden md:flex items-center space-x-2">
          {/* <Button onClick={connectWallet} variant="outline" size="sm" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 w-full" asChild>
            <Link to="/">
              <LogIn className="mr-2 h-4 w-4" />
              Login Through Metamask
            </Link>
          </Button> */}
          <Button onClick={connectWallet} id="login" variant="outline" size="sm" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 w-full">
          <LogIn className="mr-2 h-4 w-4" />
          
          Login Through Metamask
          
          </Button>
          <Button onClick={disconnectWallet} id="logout" variant="outline" size="sm" className="display-none border-yellow-500/50 text-red-400 hover:bg-yellow-500 w-full">
          <LogIn className="mr-2 h-4 w-4" />
          
          Logout
          
          </Button>
          {/* <Button variant="default" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-dark-100" asChild>
              <Link to="/register">
                <User className="mr-2 h-4 w-4" />
                Register
              </Link>
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-yellow-500 hover:bg-dark-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-dark-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/features" onClick={toggleMenu}>Features</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
          <MobileNavLink to="/pricing" onClick={toggleMenu}>Pricing</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </div>
        <div className="flex flex-col gap-2 px-4 py-3 border-t border-gray-800">
        <Button onClick={connectWallet} id="login1" variant="outline" size="sm" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 w-full">
          <LogIn className="mr-2 h-4 w-4" />
          
          Login Through Metamask
          
          </Button>
           {/* <Button variant="default" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-dark-100 w-full" asChild>
            <Link to="/register">
              <User className="mr-2 h-4 w-4" />
              Register
            </Link>
          </Button> */}
             <Button onClick={disconnectWallet} id="logout1" variant="outline" size="sm" className="display-none border-yellow-500/50 text-red-400 hover:bg-yellow-500 w-full">
          <LogIn className="mr-2 h-4 w-4" />
          
          Logout
          
          </Button>
       
        </div>
      </div>
    </nav>
  );
};


interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-dark-300 transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar;
