import './App.css'
import Hero from './components/hero/Hero'

function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/leaderboard" element={<LeaderboardPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
