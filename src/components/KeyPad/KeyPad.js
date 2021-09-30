function KeyPad({ onClick }) {
  return (
    <div>
      <button
        type="button"
        name="1"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        1
      </button>
    </div>
  )
}

export default KeyPad
