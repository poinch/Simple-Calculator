function KeyPad({ onClick }) {
  return (
    <div>
      <button
        className='btn'
        type="button"
        name="("
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        (
      </button>
      <button
        className='btn'
        type="button"
        name="CE"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        CE
      </button>
      <button
        className='btn'
        type="button"
        name=")"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        )
      </button>
      <button
        className='btn'
        type="button"
        name="C"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        C
      </button>
      <button
        className='btn'
        type="button"
        name="1"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        1
      </button>
      <button
        className='btn'
        type="button"
        name="2"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        2
      </button>
      <button
        className='btn'
        type="button"
        name="3"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        3
      </button>
      <button
        className='btn'
        type="button"
        name="+"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        +
      </button>
      <button
        className='btn'
        type="button"
        name="4"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        4
      </button>
      <button
        className='btn'
        type="button"
        name="5"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        5
      </button>
      <button
        className='btn'
        type="button"
        name="6"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        6
      </button>
      <button
        className='btn'
        type="button"
        name="-"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        -
      </button>
      <button
        className='btn'
        type="button"
        name="7"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        7
      </button>
      <button
        className='btn'
        type="button"
        name="8"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        8
      </button>
      <button
        className='btn'
        type="button"
        name="9"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        9
      </button>
      <button
        className='btn'
        type="button"
        name="*"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        x
      </button>
      <button
        className='btn'
        type="button"
        name="."
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        .
      </button>
      <button
        className='btn'
        type="button"
        name="0"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        0
      </button>
      <button
        className='btn'
        type="button"
        name="="
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        =
      </button>
      <button
        className='btn'
        type="button"
        name="/"
        onClick={(e) => onClick(e.currentTarget.name)}
      >
        ÷
      </button>

    </div>
  )
}

export default KeyPad
