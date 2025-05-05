
import { useState, useEffect, createContext, useContext } from "react";

interface User {
  name?: string;
  email: string;
  phone?: string;
  isLoggedIn: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in via localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.isLoggedIn) {
          setUser(parsedUser);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would validate credentials against an API
    // For now, we'll simulate a successful login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData: User = {
          email,
          isLoggedIn: true
        };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userData));
        resolve();
      }, 1000);
    });
  };

  const register = async (name: string, email: string, phone: string, password: string) => {
    // In a real app, this would send registration data to an API
    // For now, we'll simulate a successful registration
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData: User = {
          name,
          email,
          phone,
          isLoggedIn: true
        };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userData));
        resolve();
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
