"use client";

import { User } from "firebase/auth";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import auth from "../components/auth/Firebase";

interface ContextProps {
	data: object[];
	setData: Dispatch<SetStateAction<[]>>;
	selectedSource: string;
	setSelectedSource: Dispatch<SetStateAction<string>>;
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
	follow: any | null;
	setFollow: Dispatch<SetStateAction<object | null>>;
}

const GlobalContext = createContext<ContextProps>({
	data: [] as [],
	setData: () => [] as [],
	selectedSource: "NetTruyen",
	setSelectedSource: (): string => "",
	user: null,
	setUser: () => {},
	follow: {},
	setFollow: () => {},
});

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [data, setData] = useState([] as []); // Dữ liệu truyện
	const [selectedSource, setSelectedSource] = useState("NetTruyen");
	const [user, setUser] = useState<User | null>(null);
	const [follow, setFollow] = useState<any | null>(null);

	auth.onAuthStateChanged((user) => {
		setUser(user);
	});

	return (
		<GlobalContext.Provider
			value={{
				data,
				setData,
				selectedSource,
				setSelectedSource,
				user,
				setUser,
				follow,
				setFollow,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);