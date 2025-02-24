import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Home({ user }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="home-container">
            <nav>
                <h1>Welcome {user?.email}</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="content">
                <h2>Protected Home Page</h2>
                <p>You are successfully logged in!</p>
            </div>
        </div>
    );
}