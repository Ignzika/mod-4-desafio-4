import Card from "react-bootstrap/Card";
import "./card.css";
import CardHeader from "react-bootstrap/esm/CardHeader";

const CardNav = ({ DyDData }) => {
  // consol log siempre nos mostrara que llega, esto puede aydar a saber si algo esta llegando (valga la redundancia) y como esta llegando al componente.

  console.log(DyDData.length);

  return (
    <>
      {!DyDData || DyDData.length === 0 ? (
        <div className="notFound">
          <h2> This spell is not the one thou are looking for </h2>
          <h3>þes ġealdor sy ne sé an unc anginn weard for </h3>
        </div>
      ) : (
        DyDData.map((eachSpell) => (
          <Card className="spellCard" key={eachSpell.slug + eachSpell.range}>
            <Card.Title className="titleName">{eachSpell.name}</Card.Title>

            {eachSpell.dnd_class ? (
              <Card.Header>{eachSpell.dnd_class} </Card.Header>
            ) : (
              <Card.Header>no class neded </Card.Header>
            )}
            <Card.Header>{eachSpell.school} </Card.Header>

            <Card.Body className="overflowY">
              <CardHeader>
                Duration: {eachSpell.duration} <br />
                Cast Time: {eachSpell.casting_time} <br />
                Range: {eachSpell.range} <br />
                Level : {eachSpell.spell_level}
              </CardHeader>

              <CardHeader>
                {eachSpell.components ? (
                  <div>Type: {eachSpell.components} </div>
                ) : (
                  <div>no neded casting type </div>
                )}
                <br />{" "}
                {eachSpell.material ? (
                  <div>Materials: {eachSpell.material}</div>
                ) : (
                  <div> no materials neded</div>
                )}
              </CardHeader>

              <Card.Text>
                {eachSpell.desc} <br />
              </Card.Text>

              <CardHeader>On higher levels:</CardHeader>
              <Card.Text>{eachSpell.higher_level}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};

export default CardNav;
