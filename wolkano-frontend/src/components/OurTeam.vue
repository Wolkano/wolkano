<template>
  <div class="mainDiv">
    <p>Team</p>
    <h2>Vårt team</h2>
    <p>Möt våra experter inom automation och webbdesign.</p>
    <div class="contactGrid">
      <div
        class="contactCard"
        v-motion-slide-visible-once-bottom
        :duration="500"
        :delay="100"
      >
        <img
          src="../assets/gabriel.png"
          alt="Porträtt av Gabriel Holmkvist med kort brunt hår och ett neutralt uttryck"
        />
        <h3>Gabriel Holmkvist</h3>
        <p class="role">Webbutvecklare</p>
        <p>
          Arbetar med utveckling av hemsidor och implementation av
          offert-formulär
        </p>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/gabriel-holmkvist-185236191/"
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="contactCard"
        v-motion-slide-visible-once-bottom
        :duration="500"
        :delay="300"
      >
        <img
          src="../assets/henrik.png"
          alt="Porträtt av Henrik Bengtsson med kort blont hår och ett neutralt uttryck"
        />
        <h3>Henrik Bengtsson</h3>
        <p class="role">VD</p>
        <p></p>
        <div class="icons">
          <a href="https://www.linkedin.com/in/bengtssonhenrik/" target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="contactCard"
        v-motion-slide-visible-once-bottom
        :duration="500"
        :delay="500"
      >
        <img
          src="../assets/magnus.png"
          alt="Porträtt av Magnus Bengtsson med kort blont hår och ett neutralt uttryck"
        />
        <h3>Magnus Bengtsson</h3>
        <p class="role">Back-end utvecklare</p>
        <p>Studerar Webbutveckling på Karlstad universitet.</p>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/magnus-bengtsson-b72a41227/"
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="contactCard"
        v-motion-slide-visible-once-bottom
        :duration="500"
        :delay="700"
      >
        <img
          src="../assets/rozbeh.png"
          alt="Porträtt av Rozbeh Kazemi med kort svart hår och ett leende"
        />
        <h3>Rozbeh Kazemi</h3>
        <p class="role">Försäljare</p>
        <p></p>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/rozbeh-kazemi-12268a118/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.mainDiv {
  color: black;
  h2 {
    color: $detail;
  }
  .contactGrid {
    color: black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 50px 100px;
    gap: 100px;
    justify-content: space-evenly;
    .contactCard {
      width: 20%;
      display: flex;
      flex-direction: column;
      .role {
        color: $detail;
      }
      img {
        max-height: 300px;
        object-fit: contain;
      }
      .icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        svg {
          width: 30px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .mainDiv {
    padding: 0 20px;
    .contactGrid {
      gap: 20px;
      padding: 50px 50px;
      flex-direction: column;
      .contactCard {
        width: 100%;
      }
    }
  }
}
</style>
