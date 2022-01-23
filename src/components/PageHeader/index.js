export default function PageHeader(props) {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h1>{props.header}</h1>
      {props.subHeader && <h3>{props.subHeader}</h3>}
    </div>
  );
}
