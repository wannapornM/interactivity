import Signup from "./components/Signup"
import Gallery from "./components/Gallery"
import Form from "./components/Form"
import FeedbackForm from "./components/FeedbackForm"
import Counter from "./components/Counter"
import RequestTracker from "./components/RequestTracker"
import MovingDot from "./components/MovingDot"
import List from "./components/List"
import ShapeEditor from "./components/ShapeEditor"

export default function App() {
  function Toolbar(props) {
    const { onPlayMovie, onUploadImage } = props

    return (
      <div className="p-4 bg-blue-100" onClick={(e) => {alert("You clicked me!") 
        e.stopPropagation()}}>
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onUploadImage}>Upload Image</Button>
      </div>
    )
  }

  function Button(props) {
    const { onClick, children } = props

    return (
      <button onClick={onClick}>{children}</button>
    )
  }

  return (
    <ShapeEditor />
  )
}