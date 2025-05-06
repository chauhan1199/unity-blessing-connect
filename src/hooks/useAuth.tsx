
import { useState, useEffect, createContext, useContext } from "react";

interface User {
  name?: string;
  email: string;
  phone?: string;
  role?: string;
  isLoggedIn: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
}

// Pre-defined admin account
const ADMIN_ACCOUNTS = [
  { email: "admin@unityconnect.com", password: "password123", role: "admin" }
];

// Pre-defined user accounts for testing
const USER_ACCOUNTS = [
  { email: "user@example.com", password: "password123", role: "user" }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in via localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.isLoggedIn) {
          setUser(parsedUser);
          setIsLoggedIn(true);
          setIsAdmin(parsedUser.role === 'admin');
          
          // Debug the stored user
          console.log("Stored user:", parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Check if it's an admin account
    const adminAccount = ADMIN_ACCOUNTS.find(account => 
      account.email.toLowerCase() === email.toLowerCase() && account.password === password
    );
    
    // Check if it's a regular user account
    const userAccount = USER_ACCOUNTS.find(account => 
      account.email.toLowerCase() === email.toLowerCase() && account.password === password
    );
    
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (adminAccount) {
          const userData: User = {
            email,
            isLoggedIn: true,
            role: 'admin'
          };
          
          setUser(userData);
          setIsLoggedIn(true);
          setIsAdmin(true);
          localStorage.setItem("user", JSON.stringify(userData));
          
          console.log("Admin login successful:", userData);
          resolve();
        } else if (userAccount || (email.includes('@') && password.length >= 6)) {
          // For demo purposes, also allow any email/password that meets basic criteria
          const isAdminUser = email.includes('admin');
          
          const userData: User = {
            email,
            isLoggedIn: true,
            role: isAdminUser ? 'admin' : 'user'
          };
          
          setUser(userData);
          setIsLoggedIn(true);
          setIsAdmin(isAdminUser);
          localStorage.setItem("user", JSON.stringify(userData));
          
          console.log("User login successful:", userData);
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const register = async (name: string, email: string, phone: string, password: string) => {
    // In a real app, this would send registration data to an API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData: User = {
          name,
          email,
          phone,
          isLoggedIn: true,
          role: 'user'
        };
        setUser(userData);
        setIsLoggedIn(true);
        setIsAdmin(false);
        localStorage.setItem("user", JSON.stringify(userData));
        resolve();
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAdmin, login, register, logout }}>
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
