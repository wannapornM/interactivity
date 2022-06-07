export default function App() {
  function Toolbar(props) {
    const { onPlayMovie, onUploadImage } = props

    return (
      <div>
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
    <Toolbar onPlayMovie={() => alert("Playing!")} onUploadImage={() => alert("Uploading!")} />
  )
}