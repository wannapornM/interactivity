export default function App() {
  function Toolbar(props) {
    const { onPlayMovie, onUploadImage } = props

    return (
      <div className="p-4 bg-blue-100" onClick={() => alert("You clicked me!")}>
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
    <div onClick={() => alert("Final div!")}>
      <Toolbar onPlayMovie={() => alert("Playing!")} onUploadImage={() => alert("Uploading!")} />
    </div>
  )
}