export function Post(props) {
  return (
    <div>
      <strong>Autor: {props.author}</strong>
      <br />
      <p>{props.content}</p>
    </div>
  )
}