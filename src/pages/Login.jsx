import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence
} from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const from = location.state?.from || "/host"
    const navigate = useNavigate()
    const auth = getAuth()

    useEffect(() => {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        setUser(user)
                    } else {
                        setUser(null)
                    }
                })
                return () => unsubscribe()
            })
            .catch(error => {
                console.error("Failed to set persistence:", error)
            })
    }, [auth])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password) {
            setError("Email and password are required.")
            return
        }

        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(null)
                navigate(from, { replace: true })
                setUser(userCredential.user)
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-credential":
                        setError("No user with those credentials found!")
                        break
                    case "auth/too-many-requests":
                        setError("Access to this account has been temporarily disabled due to many failed login attempts. Reset your password or try again later.")
                        break
                    default:
                        setError("Authentication failed. Please try again.")
                        console.log(error)
                }
            })
            .finally(() => setLoading(false))
    }

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.error("Sign out failed:", error)
            })
    }


    return (
        <>
            {user ? (
                <div className="user-logged-in-page">
                    <h1>Welcome {user?.email}</h1>
                    <button className="button" onClick={signOutUser}>Sign out</button>
                </div> 
            ) : (
                <div className="login-page">
                    {location.state?.message && (
                        <h3 className="error-message" aria-live="polite">{location.state.message}</h3>
                    )}
                    <h1>Sign in to your account</h1>
                    {error && <h3 className="error-message login-error" aria-live="polite">{error}</h3>}
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-label="Email address"
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-label="Password"
                        />
                        <button className="button" type="submit" disabled={loading}>
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Login