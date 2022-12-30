const Jokes = ({ jokes }) => {
    return (
        <section id="jokes--container">
            {jokes.map(joke => {
                const { id, setup, punchline } = joke;

                return <article key={id} id="jokes">
                    {setup && <h3>Setup: {setup}</h3>}
                    <p>Punchline: {punchline}</p>
                    <hr />
                </article>
            }
            )}
        </section>
    )
}

export default Jokes;