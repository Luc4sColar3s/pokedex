import { useEffect, useState } from "react";
import background from "./assets/background.png";
import boll from "./assets/boll.svg";
import bollBlack from "./assets/bollBlack.svg";
import { toast } from "react-toastify";

export default function App() {
  const [ligar, setLigar] = useState(0);
  const [pokeId, setPokeId] = useState(0);
  const [pokeDados, setPokeDados] = useState(null);
  const spinner = () => toast("yes");

  function handleLigarDesliga() {
    ligar === 0 ? setLigar(1) : setLigar(0);
  }

  function handlePokeId(event) {
    const { name } = event.target;
    setPokeId((prev) => {
      const novoId = name === "right" ? prev + 1 : prev - 1;
      return novoId <= 0 ? 1 : novoId;
    });
  }

  useEffect(() => {
    async function handleDataPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const data = await response.json();
      setPokeDados(data);
    }
    handleDataPokemon();
    console.log(pokeDados);
  }, [pokeId]);

  return (
    <div className="bg-red-800 flex justify-center items-center w-vh h-lvh">
      <div className="bg-[#797979] w-[350px] h-[600px] rounded-tl-[101px] relative border-[5px] border-[#232323] shadow-md shadow-black">
        <div className="w-[20px] h-[78px] absolute right-0 top-13 flex flex-col justify-between">
          {/* PISCA-PISCA */}
          <div className="bg-[#232323] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
            <div
              className={`${
                ligar === 1
                  ? "bg-[#33ff00] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-75"
                  : "bg-[#232323]"
              }`}
            ></div>
          </div>
          <div className="bg-[#000000] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
            <div
              className={`${
                ligar === 1
                  ? "bg-[#fbff00] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-150"
                  : "bg-[#232323]"
              }`}
            ></div>
          </div>
          <div className="bg-[#000000] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
            <div
              className={`${
                ligar === 1
                  ? "bg-[#ff0000] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-150"
                  : "bg-[#232323]"
              }`}
            ></div>
          </div>
        </div>
        <div className=" w-full h-2/3 flex flex-col justify-center items-center gap-[10px] mt-[40px]">
          {/* TELA */}
          <div
            className={`bg-[#232323] w-[273px] h-[232px] rounded-2xl overflow-hidden border-[5px] border-[#232323] mb-30 relative flex justify-center items-center `}
          >
            <div
              className={`absolute bg-red-950 w-10 h-6 top-7 right-14 z-10 rounded-full border-[#232323] border-[3px] flex justify-center items-center ${
                ligar === 1 && pokeDados ? "opacit-[100]" : "opacity-0"
              }`}
            >
              {ligar === 1 && pokeDados && (
                <div className="text-[9px] text-white flex justify-center items-center">
                  {pokeDados.id}
                </div>
              )}
            </div>
            <div
              className={`bg-red-800 w-[120px] h-[30px] absolute top-2 border-[#232323] border-[3px] flex justify-center items-center capitalize text-white text-[10px] rounded-tl-2xl rounded-br-2xl ${
                ligar === 1 && pokeDados ? "opacit-[100]" : "opacity-0"
              }`}
            >
              {pokeDados ? pokeDados.name : ""}
            </div>
            {pokeDados ? (
              <div className="h-22 absolute flex justify-center items-center overflow-hidden">
                <img
                  className={` transition-opacity  duration-1000 ease-in-out ${
                    ligar === 1 ? "opacit-[100]" : "opacity-0"
                  } h-full object-contain`}
                  src={
                    pokeDados.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default
                  }
                  alt={pokeDados.name}
                />
              </div>
            ) : (
              ""
            )}

            <div
              className={`bg-red-800  border-[3px] border-[#232323] absolute w-50 h-14 bottom-2 p-1 rounded-tl-2xl rounded-br-2xl text-white ${
                ligar === 1 && pokeDados ? "opacit-[100]" : "opacity-0"
              }`}
            >
              {ligar === 1 && pokeDados && (
                <div className="text-[6px] capitalize flex flex-col justify-center items-center gap-3">
                  <h3 className="font-bold bg-red-950 w-20 h-3 flex justify-center items-center rounded-2xl">
                    Habilidades
                  </h3>
                  <ul className="flex justify-center items-center gap-[5px]">
                    {pokeDados.abilities.map((hab, i) => (
                      <li key={i}>{"• " + hab.ability.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <img
              className={`w-full h-full object-cover transition-opacity  duration-500 ease-in-out ${
                ligar === 1 ? "opacit-[100]" : "opacity-0"
              }`}
              src={background}
              alt="background"
            />
          </div>
          <div className="w-[273px] flex justify-between items-start absolute bottom-40 z-10">
            {/* BOTÕES */}
            <button
              className={`${
                ligar === 1
                  ? "bg-[#DC0A2D] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer"
                  : "bg-[#5c0110] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer"
              } w-[70px] h-[40px] rounded-3xl border-[4px] border-[#232323]`}
              onClick={handleLigarDesliga}
            >
              {" "}
              <i className="bi bi-power text-white flex justify-center items-center"></i>
            </button>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div>
                <button
                  name="up"
                  className={`${
                    ligar === 1
                      ? "bg-[#DC0A2D] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer"
                      : "bg-[#5c0110]"
                  } w-[30px] h-[50px] rounded-tl-[21px] rounded-tr-3xl border-[4px] border-[#232323]`}
                >
                  <i className="bi bi-caret-up-fill text-white"></i>
                </button>
              </div>
              <div className="flex gap-[30px]">
                <button
                  name="left"
                  onClick={handlePokeId}
                  className={`${
                    ligar === 1
                      ? "bg-[#DC0A2D] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer justify-center items-center"
                      : "bg-[#5c0110]"
                  } w-[50px] h-[30px] rounded-tl-[21px] rounded-bl-[21px] border-[4px] border-[#232323] flex justify-center items-center`}
                >
                  <i className="bi bi-caret-left-fill text-white flex "></i>
                </button>
                <button
                  name="right"
                  onClick={handlePokeId}
                  className={`${
                    ligar === 1
                      ? "bg-[#DC0A2D] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer flex justify-center items-center"
                      : "bg-[#5c0110]"
                  } w-[50px] h-[30px] rounded-tr-[21px] rounded-br-[21px] border-[4px] border-[#232323]  flex justify-center items-center`}
                >
                  <i className="bi bi-caret-right-fill text-white flex"></i>
                </button>
              </div>
              <div>
                <button
                  name="down"
                  className={`${
                    ligar === 1
                      ? "bg-[#DC0A2D] hover:inset-shadow-sm inset-shadow-[#5c0110] cursor-pointer z-10"
                      : "bg-[#5c0110]"
                  } w-[30px] h-[50px] rounded-bl-[21px] rounded-br-[21px] border-[4px] border-[#232323] `}
                >
                  <i className="bi bi-caret-down-fill text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className={`w-[270px] absolute bottom-0`} src={bollBlack} alt="" />
        <img
          className={`${
            ligar === 1 ? "opacity-100 absolute z-9" : "opacity-40"
          } w-[270px] absolute bottom-0 `}
          src={boll}
          alt=""
        />
      </div>
    </div>
  );
}
