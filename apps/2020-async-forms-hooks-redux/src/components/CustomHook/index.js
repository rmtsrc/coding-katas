import React, { useState, useEffect } from 'react';

const styles = {
  common: {
    display: 'inline-block',
    height: '100%',
    padding: 20,
  },
  light: {
    'background-color': 'white',
    color: 'black',
  },
  dark: {
    'background-color': 'black',
    color: 'white',
  },
};

const systemColorScheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const invertColorScheme = currentColorScheme => (currentColorScheme === 'light' ? 'dark' : 'light');

const useLocalStorage = (key, initialValue) => {
  const getStateFromLocalStorage = () => localStorage.getItem(key) || initialValue;

  const [value, setValue] = useState(getStateFromLocalStorage);

  useEffect(() => localStorage.setItem(key, value), [key, value]);

  return [value, setValue];
};

const ColorScheme = () => {
  const [colorScheme, setColorScheme] = useLocalStorage('colorScheme', systemColorScheme);

  const changeColorScheme = () => setColorScheme(invertColorScheme(colorScheme));

  useEffect(() => {
    document.title = `Color Scheme: ${colorScheme}`;
  }, [colorScheme]);

  return (
    <div style={{ ...styles.common, ...styles[colorScheme || systemColorScheme] }}>
      <h1>Lorem Ipsum</h1>
      <section>
        <button onClick={changeColorScheme}>Change to the {invertColorScheme(colorScheme)} color scheme</button>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a enim dolor. Etiam vel ante leo. Morbi non
          magna libero. Aliquam et est ultricies, venenatis augue eget, tempor sapien. Fusce viverra ultricies metus sed
          finibus. Curabitur tortor tellus, porta bibendum massa in, blandit interdum massa. Aenean aliquam, velit nec
          tincidunt elementum, orci purus posuere ipsum, at eleifend lacus dolor ut nisl. Donec rhoncus tristique urna
          quis posuere. Pellentesque vitae lorem ante. Sed pharetra justo risus, sed tristique lorem accumsan vitae.
          Etiam sodales, dui sed bibendum facilisis, dolor enim fermentum felis, id euismod felis purus aliquet ipsum.
          Sed id nisi ut massa ultrices lacinia. Suspendisse aliquet, ligula tempus pretium scelerisque, est eros
          commodo elit, quis vehicula velit elit ut justo. Suspendisse potenti. Etiam vel est orci.
        </p>
        <p>
          Proin sit amet purus sed erat egestas accumsan vel in tortor. Curabitur sed venenatis tellus, lacinia sodales
          augue. Ut eu facilisis lectus. Etiam cursus fermentum lacus sit amet fringilla. In lacinia, ipsum in dapibus
          vestibulum, turpis mauris faucibus felis, non auctor ante dolor rutrum ligula. Proin magna nunc, volutpat sed
          sodales vel, pharetra et diam. Nullam fermentum quam non purus fringilla elementum. Integer a mauris congue,
          bibendum nisl sit amet, tempus diam. Aenean maximus fringilla eros sit amet sodales. Nam quis leo mattis,
          luctus nulla vitae, luctus dui. Phasellus libero orci, laoreet non nisl sit amet, scelerisque congue felis.
          Nullam viverra id mauris id cursus. Maecenas enim justo, suscipit at iaculis vitae, vestibulum vitae orci.
        </p>
        <p>
          Vivamus aliquam vitae est vitae semper. Vivamus id bibendum velit. Ut vehicula facilisis auctor. Pellentesque
          sed placerat nibh. Proin condimentum ultricies magna, nec vulputate erat condimentum non. Suspendisse
          elementum nunc in commodo tempus. Maecenas vitae nisl volutpat nunc scelerisque mollis vitae eget justo.
          Vivamus accumsan efficitur imperdiet. Sed sed turpis orci. Phasellus suscipit felis in ullamcorper dictum. Nam
          nibh nunc, mattis sit amet lacus eget, tempor gravida leo. Proin sagittis felis at neque tincidunt, ac
          sollicitudin orci sollicitudin. Duis a finibus purus, vel mattis magna. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Integer elementum ligula eget dignissim porta. Nam non tortor turpis. Sed elementum leo sed sapien blandit, in
          rhoncus mauris accumsan. Pellentesque sit amet mattis erat. Curabitur a tellus fringilla, pretium mauris
          vitae, bibendum lacus. Integer nec ante vel ante tempor tempus placerat eget augue. Nunc efficitur, libero sed
          vulputate fermentum, orci est tempus est, vel consectetur dolor tortor a risus. Vivamus luctus enim est, eu
          interdum leo commodo tempor. Nunc laoreet augue non diam tempus, sed eleifend tellus convallis. Suspendisse eu
          vulputate turpis. Curabitur vitae leo sit amet mi iaculis luctus. Vivamus dignissim libero a odio volutpat
          pulvinar. Etiam a arcu venenatis, ornare neque eu, vulputate nulla. Aliquam sagittis odio in lorem accumsan
          porta. Donec ultricies tortor eu ultricies placerat. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
        <p>
          Nam convallis diam massa, ut luctus tellus vestibulum ac. Mauris posuere euismod odio et consectetur. Morbi
          suscipit metus augue, at malesuada neque faucibus vel. Morbi eu elementum dui. Duis sed bibendum diam.
          Praesent egestas nibh at magna congue convallis. Vivamus id magna leo. Nulla tristique felis sed ante
          tincidunt imperdiet. Vestibulum vel convallis velit, nec dignissim est.
        </p>
      </section>
    </div>
  );
};

export default ColorScheme;
