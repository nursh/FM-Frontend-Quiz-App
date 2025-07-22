import MoonDark from '@app/assets/images/icon-moon-dark.svg';
import MoonLight from '@app/assets/images/icon-moon-light.svg';
import SunDark from '@app/assets/images/icon-sun-dark.svg';
import SunLight from '@app/assets/images/icon-sun-light.svg';
import '@app/styles/switch.css';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {

  const theme: Theme = 'light';
  let sunLogo: string;
  let moonLogo: string;

  if (theme === 'light') {
    sunLogo = SunDark;
    moonLogo = MoonDark;
  } else {
    sunLogo = SunLight;
    moonLogo = MoonLight;
  }

  return (
    <div className="switch">
      <img src={sunLogo} />
      <label htmlFor="theme-switch">
        <input type="checkbox" name="theme-switch" id="theme-switch" />
      </label>
      <img src={moonLogo} />
    </div>
  )
}