function Greeting() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
  const animalsList = animals.map((animal) => <li key={animal}>animal</li>)

  return (
    <div style={{ padding: "2rem"}}>
      {/* first test */}
      <h1>Test</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
      {/* second test */}
      <div>
        <h1>Animals: </h1>
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>{animal}</li>
          })}
        </ul>
      </div>
      {/* second test PRO */}
      <div>
        <h1>Animals: </h1>
        <ul>
          {animalsList}
        </ul>
      </div>

    </div>
  )
}

export default Greeting;
