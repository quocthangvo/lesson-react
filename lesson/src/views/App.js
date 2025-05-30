// import logo from "./logo.svg";
import "./App.css";

// function Feature() {
//   return (
//     <div className="feature">
//       <img src="#" alt="" />
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum has been the industry's standard dummy text ever since the
//         1500s,{" "}
//       </p>
//     </div>
//   );
// }

//parent component
function App() {
  return (
    <div className="App-ytb">
      {/* children component */}

      <YTBItem
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwCJbK3One15vWtdJWt6E2568PL6wLcKn7w&s"
        avt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
        title="Hello World and scrambled it to make a type specimen boo"
        auth="QuocThang"
      ></YTBItem>

      <YTBItem
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwCJbK3One15vWtdJWt6E2568PL6wLcKn7w&s"
        avt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
        title=""
        auth="QuocThang"
      ></YTBItem>

      <YTBItem
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwCJbK3One15vWtdJWt6E2568PL6wLcKn7w&s"
        avt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
        title=""
        auth="QuocThang"
      ></YTBItem>

      <YTBItem
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwCJbK3One15vWtdJWt6E2568PL6wLcKn7w&s"
        avt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
        title=""
        auth="QuocThang"
      ></YTBItem>
    </div>
  );
}

//props (thuộc tính)
function YTBItem(props) {
  console.log(props);
  return (
    <div className="ytb">
      <img src={props.image} alt="" className="ytb-image" />
      <div className="ytb-footer">
        <img src={props.avt} alt="" className="images" />

        <div class="ytb-content">
          <h3 className="ytb-title">{props.title || "Null"}</h3>
          <h4 className="ytb-auth">{props.auth}</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
