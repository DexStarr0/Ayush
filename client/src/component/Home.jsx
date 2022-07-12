import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  useEffect(() => {
    homeData();
  }, []);
  const [seeYouBack, setSeeYouBack] = useState(false);
  const [user, setUser] = useState({ name: "" });
  //getting the user data from server
  const homeData = async () => {
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.status !== 200) {
        //updationg setSeeYouBack to false as user does not exit in database
        setSeeYouBack(false);
        throw new Error(data.error);
      }
      //updating user data in user hook
      setUser({ ...user, name: data.name });
      //updationg setSeeYouBack to true as user exit in database
      setSeeYouBack(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header class="bg-dark py-5">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center my-5">
                <h1 class="display-5 fw-bolder text-white mb-2b title">
                  Welcome {user.name} To Our World
                </h1>
                <p class="lead text-white-50 mb-4">
                  {seeYouBack
                    ? `How are you? It really is great to see you. I’ve missed your presence around here. Yay!`
                    : `“In order to write about life first you must live it.” – Ernest Hemingway`}
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-center">
                  <button type="submit" className="form-btn btn  ">
                    <span>
                      Get Started
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                  </button>
                  <button type="submit" className="form-btn btn  ">
                    <span>
                      Learn More
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
