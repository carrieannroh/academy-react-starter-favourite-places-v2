import { isPropertyDeclaration } from "typescript";

interface JournalEntryProps {
    image: string;
    title: string;
    placeName: string;
    countryName: string;
    mapLink: string;
    description: string;
  }
  
  function JournalEntry(props: JournalEntryProps): JSX.Element {
    return (
      <section>
        <img src={props.image} /> 
        <h2>{props.title}</h2>
        <h3>{props.placeName}</h3>
        <h4>{props.countryName} ({props.mapLink}) </h4>
        <p>{props.description}</p>
      </section>
    );
  }
  
  export default JournalEntry;
  