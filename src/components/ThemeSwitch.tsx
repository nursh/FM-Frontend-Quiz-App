import MoonDark from '@app/assets/images/icon-moon-dark.svg';
import MoonLight from '@app/assets/images/icon-moon-light.svg';
import SunDark from '@app/assets/images/icon-sun-dark.svg';
import SunLight from '@app/assets/images/icon-sun-light.svg';


export default function ThemeSwitch() {

  return (
    <div>
      <img src={SunDark} />
      <label htmlFor="theme-switch">
        <input type="checkbox" name="theme-switch" id="theme-switch" />
      </label>
      <img src={MoonDark} />
    </div>
  )
}