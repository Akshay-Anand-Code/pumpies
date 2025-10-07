import { HeroSection } from "@/sections/HeroSection";
import { BackgroundImages } from "@/sections/Header/components/BackgroundImages";
 

export const Header = () => {
  return (
    <div className="relative box-border caret-transparent">
      <HeroSection />
      <BackgroundImages
        alt="Cityscape Third Row"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/65.png"
        variant="aspect-[auto_1897_/_709] min-h-[600px] min-w-[1100px] w-[1897px] top-[500px] md:min-w-[1600px]"
      />
      <BackgroundImages
        alt="Cityscape Second Row"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/34.png"
        variant="aspect-[auto_1897_/_659] min-h-[600px] min-w-[1100px] w-[1897px] top-[700px] md:min-w-[1600px]"
      />
      <BackgroundImages
        alt="Cityscape First Row"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/30.png"
        variant="aspect-[auto_1897_/_418] min-h-[350px] min-w-[1100px] w-[1897px] top-[950px] md:min-w-[1600px]"
      />
      <img
        alt="Hero animation"
        src="/pictures/Scooter_pill.png"
        className="absolute box-border max-w-full aspect-[auto_1350_/_1350] min-h-[600px] object-cover w-full z-10 left-1/2 -translate-x-1/2 top-[520px] md:w-6/12 md:top-[420px]"
      />
      <BackgroundImages
        alt="Clouds Hero"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/46.png"
        variant="aspect-[auto_1920_/_550] ml-[-70%] min-h-[300px] min-w-[1200px] w-full z-30 top-[950px] md:ml-0"
      />
      <div className="relative bg-[linear-gradient(rgb(146,214,253)_0%,rgb(167,251,230)_80%)] box-border caret-transparent">
        <div className="relative box-border caret-transparent w-full mt-[150px]">
          <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center w-[90%] mx-auto pt-[100px] md:text-[100px] md:leading-[150px]">
            Welcome to PUMPIES
          </h1>
          <h2 className="text-lg font-bold box-border caret-transparent leading-[23px] opacity-[0.76] text-center w-[90%] z-[1000] mt-[2%] mx-auto md:text-xl md:leading-7 md:w-6/12">
            We strive to provide something for everyone. The PUMPIES brand
            produces content, clothing, online games and toys. So, whatever it
            is you’re looking for, we hope you can find it here with the PUMPIES
            family.
          </h2>
          <img
            alt="welcome section upper clouds"
            src="https://c.animaapp.com/mgg4tism1dKXdt/assets/44.png"
            className="text-transparent aspect-[auto_1920_/_463] box-border max-w-full min-h-[200px] min-w-[900px] w-full bottom-[200px]"
          />
          <div className="relative box-border caret-transparent h-[500px] mt-[-300px] w-full">
            <div className="absolute box-border caret-transparent h-full w-full overflow-hidden bottom-[50px]">
              <img
                alt="welcome section bonkz"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/38.png"
                className="absolute text-transparent aspect-[auto_1919_/_416] box-border mt-[-300px] max-w-full min-h-[100px] min-w-[900px] translate-y-[25.0%] w-full bottom-2.5 md:translate-y-[15.0%]"
              />
            </div>
            <img
              alt="welcome section lower clouds"
              src="https://c.animaapp.com/mgg4tism1dKXdt/assets/32.png"
              className="absolute text-transparent aspect-[auto_1920_/_258] box-border max-w-full min-h-[200px] min-w-[1100px] w-full bottom-0"
            />
          </div>
        </div>
        <div className="box-border caret-transparent h-[2500px] overflow-hidden mt-[100px] md:h-[2300px]">
          <div className="relative box-border caret-transparent h-full">
            <h1 className="text-[40px] font-bold box-border caret-transparent leading-[60px] text-center w-[90%] mx-auto md:text-[100px] md:leading-[150px]">
              Something for everyone
            </h1>
            <div className="absolute box-border caret-transparent h-[850px] w-fit mt-[50px] mx-0 pb-5 bottom-[150px] md:h-[700px] md:mx-[15%] md:bottom-[350px]">
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/31.png"
                className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/62.png"
                className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
              />
              <div className="relative box-border caret-transparent gap-x-[normal] flex flex-col h-full gap-y-[normal] w-full overflow-hidden mb-[5.5%] top-0 md:gap-x-[5%] md:flex-row md:gap-y-[5%]">
                <div className="[align-items:normal] box-border caret-transparent flex flex-col w-[90%] m-[5%] md:items-start md:m-[3%]">
                <h1 className="text-2xl font-bold box-border caret-transparent leading-9 text-center md:text-[39px] md:leading-[58.5px]">
                    PUMPIES Content
                  </h1>
                  <p className="text-base font-bold box-border caret-transparent leading-6 opacity-[0.76] text-center my-[5%] md:text-xl md:leading-[30px] md:text-left">
                    <span className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left">
                      Is content your thing?
                      <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
                      <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
                      If so, visit our
                      <a
                        href="https://www.instagram.com/bonkz___/'"
                        className="text-black text-base box-border caret-transparent leading-6 text-center underline md:text-xl md:leading-[30px] md:text-left"
                      >
                        Instagram
                      </a>
                      or
                      <a
                        href="https://www.tiktok.com/@bonkz___"
                        className="text-black text-base box-border caret-transparent leading-6 text-center underline md:text-xl md:leading-[30px] md:text-left"
                      >
                        TikTok
                      </a>
                      where we post weekly, feel good content for you to enjoy
                      by yourself or share with your loved ones.
                    </span>
                  </p>
                  <button className="text-xl font-bold bg-pink-300 caret-transparent hidden h-14 leading-7 text-center w-[272px] mx-auto p-0 md:ml-0">
                    PUMPIES Game
                  </button>
                </div>
                <img
                  alt="Content card character"
                  src="/pictures/Pill_tear_drink.png"
                  className="text-transparent self-auto aspect-[auto_1350_/_1080] box-border h-fit mb-[-10%] max-w-full w-[55%] mx-auto md:self-center md:w-[40%] md:mr-[5%] md:mb-0"
                />
              </div>
              <h1 className="absolute text-2xl font-bold box-border caret-transparent leading-9 left-[2%] bottom-[7%] md:text-[34px] md:leading-[51px]">
                02
              </h1>
            </div>
            <div className="relative box-border caret-transparent w-full mt-[50px] mx-auto md:w-[70%]">
              <div className="relative box-border caret-transparent h-[850px] w-full pb-5 md:h-[700px]">
                <img
                  alt="Gaming Card Background"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/31.png"
                  className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
                />
                <img
                  alt="Gaming Card Background"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/62.png"
                  className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
                />
                <div className="relative box-border caret-transparent gap-x-[normal] flex flex-col h-full gap-y-[normal] w-full overflow-hidden mb-[5.5%] top-0 md:gap-x-[5%] md:flex-row md:gap-y-[5%]">
                  <div className="[align-items:normal] box-border caret-transparent flex flex-col w-[90%] m-[5%] md:items-start md:m-[3%]">
                    <h1 className="text-2xl font-bold box-border caret-transparent leading-9 text-center md:text-[39px] md:leading-[58.5px]">
                      PUMPIES Gaming
                    </h1>
                    <p className="text-base font-bold box-border caret-transparent leading-6 opacity-[0.76] text-center my-[5%] md:text-xl md:leading-[30px] md:text-left">
                      <span className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left">
                        Is gaming your thing?
                        <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
                        <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
                        Take a look at our 90s style arcade game. Pay 2 Play for
                        a chance to win some $BONK at the end of the game week
                        if you can get yourself onto the leaderboard! Or you can
                        simply enjoy it for free using the Free Play mode. For
                        now it’s for desktop use only.
                      </span>
                    </p>
                    <button className="text-xl font-bold bg-pink-300 caret-transparent block h-14 leading-7 text-center w-[272px] mx-auto p-0 md:ml-0">
                      PUMPIES Game
                    </button>
                  </div>
                  <img
                    alt="Gaming card character"
                    src="/pictures/Navy_Pill.png"
                    className="text-transparent self-auto aspect-[auto_1080_/_1920] box-border h-fit mb-[-10%] max-w-full w-[45%] mx-auto md:self-center md:w-[30%] md:mr-[5%] md:mb-0"
                  />
                </div>
                <h1 className="absolute text-2xl font-bold box-border caret-transparent leading-9 left-[2%] bottom-[7%] md:text-[34px] md:leading-[51px]">
                  01
                </h1>
              </div>
              <div className="absolute box-border caret-transparent h-px w-full top-[70px]"></div>
            </div>
            <div className="absolute box-border caret-transparent w-full bottom-0">
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/48.png"
                className="absolute text-transparent aspect-[auto_1112_/_563] bottom-[-150px] box-border max-w-full translate-y-[34.1%] w-6/12 z-10 left-0 md:translate-y-[35.9%]"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/40.png"
                className="absolute text-transparent aspect-[auto_1676_/_440] box-border max-w-full translate-y-[34.1%] w-6/12 z-10 right-0 bottom-0 md:translate-y-[35.9%]"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/47.png"
                className="absolute text-transparent aspect-[auto_1686_/_402] box-border max-w-full translate-y-[27.7%] w-6/12 z-10 left-0 bottom-0 md:translate-y-[29.2%]"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/53.png"
                className="absolute text-transparent aspect-[auto_996_/_345] bottom-[-50px] box-border max-w-full translate-y-[27.7%] w-6/12 z-10 right-0 md:translate-y-[29.2%]"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/39.png"
                className="absolute text-transparent aspect-[auto_1920_/_336] box-border max-w-full translate-y-[12.8%] w-full z-10 -bottom-5 md:translate-y-[13.5%]"
              />
              <img
                alt="Gaming Card Background"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/45.png"
                className="absolute text-transparent aspect-[auto_1920_/_173] bottom-[-15px] box-border max-w-full w-full z-10"
              />
              <img
                alt="Character left"
                src="/pictures/Pizzas_pill.png"
                className="absolute text-transparent aspect-[auto_1080_/_1920] bottom-[-2%] box-border max-w-full translate-y-[27.7%] w-[17%] z-10 left-0 md:translate-y-[29.2%]"
              />
              <img
                alt="Character right"
                src="/pictures/Pills_birthday.png"
                className="absolute text-transparent aspect-[auto_800_/_800] box-border max-w-full scale-x-[-1px] w-[23%] z-10 right-0 bottom-[60px]"
              />
              <div className="absolute box-border caret-transparent bottom-[100px]"></div>
            </div>
            <div className="absolute box-border caret-transparent h-px w-full bottom-10 md:bottom-[100px]"></div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent mt-[10%] mb-[200px]">
        <h1 className="text-yellow-50 text-[49px] font-bold box-border caret-transparent leading-[73.5px] text-center w-full mt-5 md:text-[100px] md:leading-[150px]">
          1/1 Artists
        </h1>
        <p className="text-yellow-50 text-lg font-[510] box-border caret-transparent leading-[27px] opacity-[0.76] text-center w-[90%] mt-[4%] mx-auto md:text-[23px] md:leading-[34.5px] md:w-2/5">
          When creating the PUMPIES collection we wanted to showcase the
          incredible artistic talent we have on Solana. The collection includes
          93 1/1 PUMPIES, all hand drawn by Solana’s most gifted independent
          artists. We’d like to thank each and every one of them for their
          contribution to the collection and we invite you to explore and
          appreciate their work below.
        </p>
        <section className="text-white box-border caret-transparent w-full">
          <div className="[mask-image:radial-gradient(52%_5vw_at_50%_5vw,rgba(0,0,0,0)_calc(100%_-_2px),rgb(0,0,0))] box-border caret-transparent overflow-hidden mt-[2%] before:accent-auto before:bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-1/5 before:z-10 before:border-separate before:left-0 before:inset-y-0 before:font-font_74c027 after:accent-auto after:bg-[linear-gradient(270deg,rgba(0,0,0,0.8),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1/5 after:border-separate after:right-0 after:inset-y-0 after:font-font_74c027">
            <div className="relative box-border caret-transparent flex translate-x-[132.5px] -ml-2.5 md:translate-x-[585px]">
              {/* pictures set x2 */}
              <img alt="pic-1" src="/pictures/2.JPG" className="text-transparent aspect-[auto_1199_/_838] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-2" src="/pictures/IMG_2198-removebg-preview.png" className="text-transparent aspect-[auto_1280_/_1280] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-3" src="/pictures/Navy_Pill.png" className="text-transparent aspect-[auto_1200_/_1200] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-4" src="/pictures/Pill_tear_drink.png" className="text-transparent aspect-[auto_1280_/_1280] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-5" src="/pictures/Pills_birthday.png" className="text-transparent aspect-[auto_2560_/_2560] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-6" src="/pictures/Pizzas_pill.png" className="text-transparent aspect-[auto_2000_/_2000] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-7" src="/pictures/Scooter_pill.png" className="text-transparent aspect-[auto_2048_/_2048] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-1b" src="/pictures/2.JPG" className="text-transparent aspect-[auto_1199_/_838] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-2b" src="/pictures/IMG_2198-removebg-preview.png" className="text-transparent aspect-[auto_1280_/_1280] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-3b" src="/pictures/Navy_Pill.png" className="text-transparent aspect-[auto_1200_/_1200] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-4b" src="/pictures/Pill_tear_drink.png" className="text-transparent aspect-[auto_1280_/_1280] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-5b" src="/pictures/Pills_birthday.png" className="text-transparent aspect-[auto_2560_/_2560] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-6b" src="/pictures/Pizzas_pill.png" className="text-transparent aspect-[auto_2000_/_2000] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
              <img alt="pic-7b" src="/pictures/Scooter_pill.png" className="text-transparent aspect-[auto_2048_/_2048] box-border basis-[100px] shrink-0 h-[600px] max-w-full object-cover w-[5%] pl-2.5" />
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex w-fit m-auto">
            <button
              type="button"
              className="items-center bg-transparent caret-transparent flex h-[57.6px] justify-center text-center w-[57.6px] z-[1] p-0 rounded-[50%]"
            >
              <img
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent h-[45%] w-[45%]"
              />
            </button>
            <p className="font-[510] box-border caret-transparent">Ryanednan</p>
            <button
              type="button"
              className="items-center bg-transparent caret-transparent flex h-[57.6px] justify-center text-center w-[57.6px] z-[1] p-0 rounded-[50%]"
            >
              <img
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent h-[45%] w-[45%]"
              />
            </button>
          </div>
        </section>
      </div>
      <div className="relative box-border caret-transparent h-[5000px]">
        <div className="absolute box-border caret-transparent h-px w-full top-[150px]"></div>
        <div className="relative box-border caret-transparent w-full my-[150px]">
          <div className="items-center bg-pink-300 box-border caret-transparent flex h-[100px] ml-[-5%] w-[150%] overflow-hidden md:h-[200px]">
            <p className="text-[39px] font-[510] box-border caret-transparent leading-[58.5px] text-nowrap md:text-[100px] md:leading-[150px]">
              TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM
              TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM
              TEAM TEAM TEAM TEAM TEAM TEAM
            </p>
          </div>
          <div className="box-border caret-transparent flex flex-col h-auto justify-around w-[70%] mt-[200px] mx-auto md:flex-row md:h-[600px] md:w-4/5">
            <div className="relative box-border caret-transparent h-[450px] w-auto md:h-full md:w-[35%]">
              <a
                href="https://x.com/itsjust__H"
                className="absolute text-yellow-200 font-[510] bottom-[-35px] box-border caret-transparent block mt-5"
              >
                View X
              </a>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] top-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 top-[33.3333%]"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-[33.3333%]"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2]"></div>
              <div className="absolute bg-[url('https://source.unsplash.com/300x300?cat')] bg-no-repeat bg-cover shadow-[rgba(0,0,0,0.3)_0px_0px_50px_0px] box-border caret-transparent bg-center inset-0">
                <img
                  alt="Team Member H"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/35.png"
                  className="text-transparent aspect-[auto_2000_/_2000] box-border h-full max-w-full object-cover w-full"
                />
                <p className="absolute text-[39px] font-[510] box-border caret-transparent leading-[58.5px] left-[5%] top-[2%]">
                  H
                </p>
                <p className="absolute font-[510] box-border caret-transparent left-[5%] top-[15%]">
                  Founder
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent h-[450px] w-auto md:h-full md:w-[35%]">
              <a
                href="https://x.com/N3lly_San"
                className="absolute text-yellow-200 font-[510] bottom-[-35px] box-border caret-transparent block mt-5"
              >
                View X
              </a>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] top-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 top-[33.3333%]"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-[33.3333%]"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 bottom-0"></div>
              <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2]"></div>
              <div className="absolute bg-[url('https://source.unsplash.com/300x300?cat')] bg-no-repeat bg-cover shadow-[rgba(0,0,0,0.3)_0px_0px_50px_0px] box-border caret-transparent bg-center inset-0">
                <img
                  alt="Team Member H"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/33.png"
                  className="text-transparent aspect-[auto_512_/_512] box-border h-full max-w-full object-cover w-full"
                />
                <p className="absolute text-[39px] font-[510] box-border caret-transparent leading-[58.5px] left-[5%] top-[2%]">
                  Nelson
                </p>
                <p className="absolute font-[510] box-border caret-transparent left-[5%] top-[15%]">
                  Head of Design
                </p>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent h-px w-full mt-[150px]"></div>
        </div>
        <div className="relative bg-yellow-200 box-border caret-transparent hidden h-[1000px] w-screen overflow-hidden">
          <div className="box-border caret-transparent h-full w-full">
            <img
              alt="Flame Burn Section"
              src="https://c.animaapp.com/mgg4tism1dKXdt/assets/50.png"
              className="text-transparent aspect-[auto_864_/_887] box-border h-[33.3333%] max-w-full mt-[50px] mx-auto md:h-2/5"
            />
            <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center md:text-[100px] md:leading-[150px]">
              BONKz Burn
            </h1>
            <p className="text-base font-[510] box-border caret-transparent leading-6 text-center w-[70%] mt-5 mx-auto md:text-xl md:leading-[30px]">
              In the spirit of $BONK all of the funds raised during the mint
              were burned, reducing the supply thus making the token more
              valuable in theory. Since launch we have burned millions of US
              dollars worth of $BONK, putting a larger dent into the burning
              movement than any of the projects before us combined.
            </p>
            <div className="items-center box-border caret-transparent flex justify-around w-[90%] mt-[100px] mx-auto md:w-3/5">
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  2
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  7
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  5
                </span>
              </div>
              <img
                alt="Number Comma"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/49.png"
                className="text-transparent aspect-[auto_23_/_109] box-border max-w-full w-[3%]"
              />
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <img
                alt="Number Comma"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/49.png"
                className="text-transparent aspect-[auto_23_/_109] box-border max-w-full w-[3%]"
              />
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <img
                alt="Number Comma"
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/49.png"
                className="text-transparent aspect-[auto_23_/_109] box-border max-w-full w-[3%]"
              />
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
              <div className="relative box-border caret-transparent w-[10%]">
                <img
                  alt="Number Frame"
                  src="https://c.animaapp.com/mgg4tism1dKXdt/assets/42.png"
                  className="text-transparent aspect-[auto_121_/_199] box-border h-full max-w-full w-full"
                />
                <span className="absolute text-white text-[33.75px] font-bold box-border caret-transparent block leading-[50.625px] text-center top-[-10%] w-full md:text-[76.8px] md:leading-[115.2px]">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="sticky bg-pink-300 box-border caret-transparent text-center w-full z-[-1] mt-[150px] pb-[150px] px-[2%] top-0 md:text-left md:px-[10%]">
            <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center pt-[150px] md:text-[100px] md:leading-[150px] md:text-left">
              FAQ
            </h1>
            <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 text-center w-full mt-[50px] md:text-left">
              <div className="box-border caret-transparent opacity-45 text-center w-full pt-[30px] border-t-2 border-solid md:text-left">
                <div className="items-center box-border caret-transparent flex justify-center text-center md:justify-between md:text-left">
                  <h1 className="text-lg font-bold box-border caret-transparent leading-[27px] text-center md:text-[39px] md:leading-[58.5px] md:text-left">
                    Are BONKz Associated with $BONK?
                  </h1>
                  <img
                    src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-3.svg"
                    alt="Icon"
                    className="box-border caret-transparent hidden h-[25px] text-center w-6 md:block md:text-left"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent opacity-45 text-center w-full pt-[30px] border-t-2 border-solid md:text-left">
                <div className="items-center box-border caret-transparent flex justify-center text-center md:justify-between md:text-left">
                  <h1 className="text-lg font-bold box-border caret-transparent leading-[27px] text-center md:text-[39px] md:leading-[58.5px] md:text-left">
                    Where can I join the BONKz community?
                  </h1>
                  <img
                    src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-3.svg"
                    alt="Icon"
                    className="box-border caret-transparent hidden h-[25px] text-center w-6 md:block md:text-left"
                  />
                </div>
              </div>
              <div className="bg-black box-border caret-transparent h-0.5 opacity-45 text-center w-full md:text-left"></div>
            </div>
            <div className="box-border caret-transparent text-center md:text-left"></div>
          </div>
          <div className="bg-pink-300 box-border caret-transparent">
            <div className="bg-yellow-200 box-border caret-transparent -mt-2.5 pt-[150px] rounded-t-[30px] md:pt-[300px] md:rounded-t-[100px]">
              <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center ml-0 pb-[50px] md:text-[100px] md:leading-[150px] md:text-left md:ml-[10%] md:pb-0">
                BONKz
              </h1>
            </div>
            <div className="bg-zinc-900 box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-16 flex flex-wrap justify-between gap-y-16 w-4/5 mx-auto pt-[50px] pb-[150px]">
                <div className="text-yellow-200 box-border caret-transparent flex flex-col">
                  <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                    Socials
                  </p>
                  <a
                    href="https://x.com/bonkznft_"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Twitter (x)
                  </a>
                  <a
                    href="https://discord.gg/NJWPdSPhCM"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Discord
                  </a>
                  <a
                    href="https://www.instagram.com/bonkz___/"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@bonkz___"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    TikTok
                  </a>
                </div>
                <div className="text-yellow-200 box-border caret-transparent flex flex-col">
                  <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                    Marketplaces
                  </p>
                  <a
                    href="https://magiceden.io/marketplace/bonkznft"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Magic Eden
                  </a>
                  <a
                    href="https://www.tensor.trade/trade/bonkznft"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Tensor
                  </a>
                </div>
                <div className="text-yellow-200 box-border caret-transparent flex flex-col">
                  <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                    Applications
                  </p>
                  <a
                    href="https://reveal.bonkz.io/"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Reveal
                  </a>
                  <a
                    href="https://bonkz-the-game.io/"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Game
                  </a>
                  <a
                    href="https://bonkz-staking.io/"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Staking
                  </a>
                  <a
                    href="https://www.omni-store.io/bonkz"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Merch
                  </a>
                  <a
                    href="https://bonkz-claim.io/"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Burn
                  </a>
                </div>
                <div className="text-yellow-200 box-border caret-transparent flex flex-col">
                  <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                    Rarity
                  </p>
                  <a
                    href="https://howrare.is/bonkz"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    HowRare
                  </a>
                </div>
                <div className="text-yellow-200 box-border caret-transparent flex flex-col">
                  <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                    Legal
                  </p>
                  <a
                    href="https://bonkz.io/privacy"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="https://bonkz.io/terms"
                    className="font-[210] box-border caret-transparent block mb-4"
                  >
                    Terms of Use
                  </a>
                </div>
              </div>
              <div className="text-yellow-200 box-border caret-transparent flex justify-between pb-[50px] px-[50px]">
                <p className="font-[210] box-border caret-transparent">
                  Designed by OMNI
                </p>
                <p className="font-[210] box-border caret-transparent">
                  ©BONKz 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed box-border caret-transparent h-8 w-8 z-30 overflow-hidden left-auto right-[5%] top-[7%] md:left-[2%] md:top-[2%]">
        <button className="absolute bg-transparent caret-transparent block h-8 text-center w-8 z-30 p-0 left-0 top-0">
          <div className="items-end box-border caret-transparent flex flex-col h-3/6 justify-between w-full">
            <div className="bg-black box-border caret-transparent h-1/5 w-full rounded-lg"></div>
            <div className="bg-black box-border caret-transparent h-1/5 w-3/5 rounded-lg"></div>
          </div>
        </button>
        <button className="absolute bg-transparent caret-transparent block h-8 text-center translate-y-10 w-8 z-30 p-0 left-0 top-0">
          <img
            src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-4.svg"
            alt="Icon"
            className="box-border caret-transparent"
          />
        </button>
      </div>
    </div>
  );
};
