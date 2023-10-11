import appartements from "../../assets/logements.json"
import Rentings from "../../components/Rentings"
import Banner from "../../components/Banner"

function Home() {
    console.log(appartements)
    return (
        <div>
            <Banner text="Chez vous, partout et ailleurs" background="../../../firstbanner.png" />
            <div class="rentingz">
                <Rentings/>
                <Rentings/>
            </div>
        </div>
        
    )
  }
  
  export default Home