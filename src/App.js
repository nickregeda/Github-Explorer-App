import './App.css';
import GithubExplorerContainer from "./components/GithubExplorer/GithubExplorerContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<GithubExplorerContainer/>}/>
                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
