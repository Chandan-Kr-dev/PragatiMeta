
import { ThreeDMarqueeLiteBackground } from "./components/ui/3d-marquee";
import RoleBasedUserForm from "./signinformcomponent";
 const imageUrl = [
        "/img1.jpeg",
        "/img2.jpeg",
        "/img3.jpeg",
        "/img4.jpeg",
        "/img5.jpeg",
        "/img6.jpeg",
        "/img7.jpeg",
        "/img8.jpeg",
        "/img9.jpeg",
      ];
function Signformmarqueecomponent() {
  return (
    <div className="relative min-h-screen">
      
    <ThreeDMarqueeLiteBackground images={imageUrl} />

    
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <RoleBasedUserForm />
      </div>
      </div>
  );
}
export default Signformmarqueecomponent;