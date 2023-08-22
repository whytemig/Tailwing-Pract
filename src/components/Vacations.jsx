import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Vacations = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-15">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Luxury Included Vacation for Two People</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolores vitae ipsum nesciunt perspiciatis ullam libero nulla eius,
            iusto fugit ipsam nostrum, consequuntur, animi sequi. Nihil
            repudiandae animi, doloribus reprehenderit rerum mollitia pariatur?
            Dolorum numquam minima laborum mollitia accusamus ad! Debitis ut
            inventore laboriosam consectetur. Ab, placeat aut. Nam numquam
            maxime architecto nostrum, voluptatem accusamus eum repellendus
            aspernatur possimus vitae quo, rem nemo. Aut iure, saepe minima nemo
            magni ullam, cupiditate illo quam soluta ex maxime? Esse dolorum
            nisi nulla, natus qui, tempora eveniet nemo facere quibusdam maxime
            repellendus. Eveniet ab modi inventore vero iste quasi ipsum a
            maiores molestias?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">Get An Additional 10% OFF</p>
          <p className="py-2">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2 m-2 rounded-full">
            BOOK NOW & SAVE
          </p>
        </div>

        <form className="w-full ">
          <div className="flex flex-col my-2">
            <label>DEstinations</label>
            <select className="border rounded-md p-2 py-2">
              <option>Grande Atigua</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>South Korea</option>
              <option>Thailand</option>
              <option>China</option>
            </select>
          </div>
              </form>
              <div className="flex flex-col my-2">
                  <label>Check-In</label>
                  <input type="date" className="border rounded-md p-2 py-2"/>
              </div>
              <div className="flex flex-col my-2">
                  <label>Check-Out</label>
                  <input type="date" className="border rounded-md p-2 py-2"/>
              </div>
              <button className="w-full my-4">Reates & Availability</button>
      </div>
    </div>
  );
};

export default Vacations;
