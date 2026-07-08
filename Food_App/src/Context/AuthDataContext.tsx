import { createContext, useState, useContext, type ReactNode } from "react";

interface SignupContextType {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const signupData = createContext<SignupContextType | undefined>(undefined);

const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState(() => {
    const creds = JSON.parse(localStorage.getItem("creds") || "{}");
    return creds.email || "";
  });
  const [password, setPassword] = useState(() => {
    const creds = JSON.parse(localStorage.getItem("creds") || "{}");
    return creds.password || "";
  });

  return (
    <signupData.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </signupData.Provider>
  );
};

const useSignup = () => {
  const context = useContext(signupData);
  if (!context) {
    throw new Error("useSignup must be used inside Signupprovider");
  }
  return context;
};

export { useSignup, signupData, SignupProvider };
