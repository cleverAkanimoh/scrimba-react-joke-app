const Jokes = ({ jokes }) => {
    return (
        <section id="jokes--container">
            {jokes.map(joke => {
                const { id, setup, punchline } = joke;

                return <article key={id} id="jokes">
                    <h3>{setup}</h3>
                    <p>{punchline}</p>
                    <hr />
                </article>
            }
            )}
        </section>
    )
}

export default Jokes;