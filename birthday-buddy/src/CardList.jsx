const CardList = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <article className="person">
            <img src={person.img} alt={person.name} className="img" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default CardList;
