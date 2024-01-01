import { useContext } from "react";
import { AuthContext } from "../../AuhtProvider/AuthProvider";
import { useState } from "react";
import { Label, Radio } from "keep-react";
const SimpleRegistrationForm = () => {
  const { createAccountEmailPassword } = useContext(AuthContext);
  console.log(createAccountEmailPassword);
  const [gender, setGender] = useState("");
 


  const handleOptionChange = (e) => {
    setGender(e.target.value);
  };

 

  const handleRegester = (e) => {
    e.preventDefault();
    const fristName = e.target.fristname.value;
    const lastName = e.target.lastname.vlaue;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const userDetails = {
        fristName,
        lastName,
        email,
        
    }

    console.log(fristName);
  };
  return (
    <div>
      <section className="">
        <div className=" items-center px-5 py-12 lg:px-20 bg-neutral-300 rounded-3xl">
          <div className="flex flex-col w-full  p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-8">
              <section className="flex flex-col w-full h-full p-1 overflow-auto">
                <header className="flex flex-col items-center justify-center py-12 border-spacing-5 text-base transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg text-blueGray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
                    <span>Drag and drop your</span>&nbsp;
                    <span>files anywhere or</span>
                  </p>
                  <button className="w-auto px-2 py-1 my-2 mr-2 transition duration-500 ease-in-out transform border rounded-md text-blueGray-500 hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100">
                    Upload a file
                  </button>
                </header>
              </section>
              <div className="mt-6">
                <form onSubmit={handleRegester} className="space-y-6">
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-neutral-600">
                        {" "}
                        Frist name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="fristname"
                          type="text"
                          required=""
                          placeholder="Your frist name"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-neutral-600">
                        {" "}
                        Last name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          autoComplete="off"
                          name="lastname"
                          type="text"
                          required=""
                          placeholder="Your last name"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-neutral-600">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          required=""
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-neutral-600">
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          autoComplete="off"
                          name="password"
                          type="password"
                          required=""
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <fieldset className="ml-5 flex flex-row gap-3" id="radio">
                      <legend className="mb-3">Select your Gender</legend>
                      <div className="flex items-center gap-2">
                        <Radio
                          sizing="sm"
                          id="Male"
                          name="gender"
                          value="Male"
                          selected={gender}
                          onOptionChange={handleOptionChange}
                        />
                        <Label htmlFor="Male">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio
                          sizing="md"
                          id="Female"
                          name="gender"
                          value="Female"
                          selected={gender}
                          onOptionChange={handleOptionChange}
                        />
                        <Label htmlFor="Female">Female</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio
                          sizing="lg"
                          id="Others"
                          name="gender"
                          value="Others"
                          selected={gender}
                          onOptionChange={handleOptionChange}
                        />
                        <Label htmlFor="Others">Others</Label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        autoComplete="off"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label className="block ml-2 text-sm text-neutral-600">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-neutral-600 bg-white">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          ></path>
                        </defs>
                        <clipPath id="b">
                          <use overflow="visible"></use>
                        </clipPath>
                        <path fill="#FBBC05" d="M0 37V11l17 13z"></path>
                        <path
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M48 48L17 24l-4-3 35-10z"
                        ></path>
                      </svg>
                      <span className="ml-4"> Log in with Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleRegistrationForm;
