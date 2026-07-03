import { createContext, ReactNode, useState } from "react";

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  address: string;
}

export interface Address {
  id: number;
  address: string;
  street: string;
  postCode: string;
  apartment: string;
  label: "HOME" | "OFFICE" | "OTHER";
}

interface ProfileContextType {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;

  addresses: Address[];
  setAddresses: React.Dispatch<React.SetStateAction<Address[]>>;
}

interface Props {
  children: ReactNode;
}

export const profileContext = createContext<ProfileContextType | undefined>(
  undefined
); //reads the data in ProfileContextType using createcontext hook
export const ProfileDataProvider = ({ children }: Props) => {
  const [addresses, setAddresses] = useState<Address[]>(() => {
    const saveAddresses = localStorage.getItem("addresses");
    return saveAddresses ? JSON.parse(saveAddresses) : [];
  });
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem("user");

    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          email: "",
          phone: "",
          bio: "",
        };
  });
  return (
    <profileContext.Provider value={{ user, setUser, addresses, setAddresses }}>
      {" "}
      {/* //provider wraps the data coming from profileContext in to a box which can
      be accessed by any component in the app */}
      {children}
    </profileContext.Provider>
  );
};
