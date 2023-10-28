'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '@/utils/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { UserModel } from '@/types/user_model';
import { getUser } from '@/utils/database';

// Create the authentication context
export const AuthContext = createContext<{
  authUser: User | null;
  user: UserModel | null;
}>({ authUser: null, user: null });

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({
  children,
}: AuthContextProviderProps): JSX.Element {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const currentUser = await getUser(authUser.uid);

        setAuthUser(authUser);
        setUser(currentUser);
      } else {
        setAuthUser(null);
      }
      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authUser, user }}>
        {loading ? <div>Loading...</div> : children}
      </AuthContext.Provider>
    </>
  );
}