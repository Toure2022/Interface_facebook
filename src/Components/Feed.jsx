import './feed.css'
import Share from "./Share";
import Post from "./Post";


export default function Feed () {
    return(
        <div className="Feed">
        <div className="feedWrapper">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>)

}