<template>
  <div class="logo-bar">
    <a class="plain" href="https://www.wnyc.org/">
      <img
        alt="WNYC"
        title="WNYC"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/wnyc.svg"
      />
    </a>
    <a class="plain" href="https://www.wqxr.org/">
      <img
        alt="WQXR"
        title="WQXR"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/wqxr.svg"
      />
    </a>
    <a class="plain" href="https://gothamist.com/">
      <img
        alt="Gothamist"
        title="Gothamist"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/gothamist.svg"
      />
    </a>
    <a
      class="plain"
      href="https://www.wnyc.org/series/new-jersey-public-radio/"
    >
      <img
        alt="New Jersey Public Radio"
        title="New Jersey Public Radio"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/njpr.svg"
      />
    </a>
    <a class="plain" href="https://www.thegreenespace.org/">
      <img
        alt="The Greene Space"
        title="The Greene Space"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/the-greene-space-1.svg"
      />
    </a>
    <a class="plain" href="https://www.wnycstudios.org/">
      <img
        alt="WNYC Studios"
        title="WNYC Studios"
        src="https://nypublicradio.org/wp-content/uploads/2019/10/wnyc-studios.svg"
      />
    </a>
  </div>
</template>

<style lang="scss">
.logo-bar {
  margin: auto;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    // 3 items per line
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    margin: 0 1.25rem;
  }
}
</style>
