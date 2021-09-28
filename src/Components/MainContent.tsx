import JournalEntry from "./JournalEntry";
import tajmahal from "../images/tajmahal.jpg";
import cliff from "../images/cliff.jpg";
import hills from "../images/hills.jpg";
import bridges from "../images/bridges.jpg";
 
//places [
    //image:"tajmahal", title:{"our mother"}, }
]
function MainContent(): JSX.Element {
    return (
      <main>
        <JournalEntry
          image={tajmahal} 
          title={"Our Mother"}
          location={"Taj Mahal, India"}
          mapLink={"https://goo.gl/maps/b3btM4u3GQ3pbU6v6"}
          description={"Here is the Taj Mahal"}
        />

        <JournalEntry
          image={cliff}
          title={"here's a cliff"}
          location={"Cliff, cliff"}
          mapLink={"https://goo.gl/maps/bxNpTZfjv1ySppi96"}
          description={"Some nice cliffs bruh"}
        />
        
        <JournalEntry
          image={hills}
          title={"Hills"}
          location={"Hills, hills"}
          mapLink={"https://goo.gl/maps/Ayr1ouGu7biJs22A7"}
          description={"Follow the link to see chocolate hills in the Phillipines"}
        />
        
        <JournalEntry
          image={bridges}
          title={"Bridges"}
          location={"bridges, Bridges"}
          mapLink={"https://goo.gl/maps/53CyPanriUpAFSCo9"}
          description={"Here is a nice bridge, I think it's in Venice"}
        />
        
      </main>
    );
  }

export default MainContent;
