import { createContext, ReactNode, useState, useContext } from "react";

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

const profileContext = createContext<ProfileContextType | undefined>(undefined); //reads the data in ProfileContextType using createcontext hook

//provider component starts
const ProfileDataProvider = ({ children }: Props) => {
  //state 1
  const [addresses, setAddresses] = useState<Address[]>(() => {
    //localstorage getItem
    const saveAddresses = localStorage.getItem("addresses");
    return saveAddresses ? JSON.parse(saveAddresses) : [];
  });

  // state 2
  const [user, setUser] = useState<UserProfile>(() => {
    //localstorage getItem
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

const useProfile = () => {
  const context = useContext(profileContext);

  if (!context) {
    throw new Error("useProfile must be used inside ProfileDataProvider");
  }

  return context;
};

export { profileContext, ProfileDataProvider, useProfile };
