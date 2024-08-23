function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-400">
        <p className="text-3xl font-bold underline flex justify-center pt-4 pb-[3rem]">Hello User, Sign up here!</p>
        <div className="w-full flex justify-center items-center">
          <form action="" method="post" className="border-2 w-[40%] border-black py-[2rem]">
            <div className="w-[80%] pl-2">
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="py-1 pl-1"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-col pt-2">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-1 pl-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="w-full flex justify-center pt-2">
                <button type="submit" className="px-5 py-1 border-2 border-black hover:cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-200 rounded-md">
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
