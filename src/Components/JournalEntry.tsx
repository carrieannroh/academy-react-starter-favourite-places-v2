import { isPropertyDeclaration } from "typescript";

interface JournalEntryProps {
    image: string;
    title: string;
    location: string;
    mapLink: string;
    description: string;
  }
  
  function JournalEntry(props: JournalEntryProps): JSX.Element {
    return (
      <section>
        <img src={props.image} alt = "hello" width="500" height="500" /> 
        <h2>{props.title}</h2>
        <h3>
            {props.location} 
            <a href = {props.mapLink}> (maps link)</a>
         </h3>
        <p>{props.description}</p>
      </section>
    );
  }
  
  export default JournalEntry;
  