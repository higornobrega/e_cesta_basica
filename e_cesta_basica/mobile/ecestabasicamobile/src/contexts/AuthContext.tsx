import { ReactNode, createContext, useState, useEffect } from "react";
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'
import { api } from '../services/api'
WebBrowser.maybeCompleteAuthSession();


interface UserProps{
    name: string;
    avatarUrl: string;
    tipo: string;
}

export interface AuthContextDataProps{
    user: UserProps;
    isUserLoading: boolean;
    signIn: () => Promise<void>;
}

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [isUserLoading, setIsUserLoading] = useState(false);

    const [request, response, prompAsync] = Google.useAuthRequest({
        androidClientId: '276900962405-nn3lr1q74pbaoqr1hci3sk5ensgl5h2p.apps.googleusercontent.com',
        expoClientId:'1037109792529-neolt5fqba689juu30qdf5ck1uvg75v4.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes:['profile', 'email']
    })
    
    async function signIn() {
        try {
            setIsUserLoading(true)
            await prompAsync();
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsUserLoading(false)
        }

    }
    async function signInWithGoogle(access_token: string) {
        try {
            setIsUserLoading(true)
            const tokenResponse = await api.post('/users', { access_token })
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
            const userInfoResponse = await api.get('/me');
            setUser(userInfoResponse.data.user)
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setIsUserLoading(false)
        }
        
    }
    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken);
        }
    },[response])
    return (
        <AuthContext.Provider value ={{
            signIn,
            isUserLoading,
            user,
        }}>
            {children}
            
        </AuthContext.Provider >
    )
}
