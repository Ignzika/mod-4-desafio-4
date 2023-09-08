import Form from "react-bootstrap/Form";
import "./buscador.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const SearchBar = ({ search, setSearch, DyDData, setDyDData }) => {

   //manejadores de cambios en buscador y filters
  const forOnChange = (e) => {
    setSearch(e.target.value);
  };

  const intSortAZ = () => {
    const AZ = [...DyDData].sort((a, b) => (a.name > b.name ? 1 : -1));
    setDyDData(AZ);
  };

  const intSortRange = () => {
    const range = [...DyDData].sort((a, b) =>
      a.target_range_sort > b.target_range_sort ? 1 : -1
    );
    setDyDData(range);
  };

  const intSortLevel = () => {
    const spellLevel = [...DyDData].sort((a, b) =>
      a.spell_level > b.spell_level ? 1 : -1
    );
    setDyDData(spellLevel);
  };

  return (
    <>
      <div id="filter">
        <DropdownButton
          title="Filters"
          id="bg-nested-dropdown"
          variant="secondary"
          size="lg"
          className="options"
        >
          <Dropdown.Item eventKey="1">
            <Button variant="outline-secondary" size="lg" onClick={intSortAZ}>
              A to Z
            </Button>
          </Dropdown.Item>

          <Dropdown.Item eventKey="2">
            <Button variant="outline-secondary" size="lg" onClick={intSortRange}>
              Range
            </Button>
          </Dropdown.Item>

          <Dropdown.Item eventKey="3">
            <Button variant="outline-secondary" size="lg" onClick={intSortLevel}>
              Spell level
            </Button>
          </Dropdown.Item>
        </DropdownButton>

        <div id="txtSearch">
          <Form.Label htmlFor="searchBar"></Form.Label>

          <Form.Control
            type="text"
            id="searchBar"
            aria-describedby="Search"
            value={search}
            onChange={forOnChange}
          />

          <Form.Text id="searchWords" muted>
            Search for what you need mortal
          </Form.Text>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
