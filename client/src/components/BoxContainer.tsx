export default function BoxContainer( {children}) {
  return (
    <span
        style={{
          backgroundColor: "#1A181E",
          margin: "1.5rem 1.5rem 1.5rem 1.5rem",
          padding: "0.5rem" ,
          borderRadius: "0.4rem",
        }}
      >
      {children}
      </span>
  )
}
