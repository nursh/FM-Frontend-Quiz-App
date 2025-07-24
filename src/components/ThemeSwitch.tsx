import MoonDark from '@app/assets/images/icon-moon-dark.svg';
import MoonLight from '@app/assets/images/icon-moon-light.svg';
import SunDark from '@app/assets/images/icon-sun-dark.svg';
import SunLight from '@app/assets/images/icon-sun-light.svg';
import '@app/styles/switch.css';
import { useRef, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {

  const [theme, setTheme] = useState<Theme>('light');
  const switchRef = useRef<HTMLInputElement>(null);

  let sunLogo: string;
  let moonLogo: string;

  if (theme === 'light') {
    sunLogo = SunDark;
    moonLogo = MoonDark;
  } else {
    sunLogo = SunLight;
    moonLogo = MoonLight;
  }

  function switchTheme() {

    if (switchRef.current?.checked) {
      setTheme('dark');
      document.getElementById('root')!.classList.add('dark');
    } else {
      setTheme('light')
      document.getElementById('root')!.classList.remove('dark');
    }
  }

  return (
    <div className="switch">
      <img src={sunLogo} />
      <label htmlFor="theme-switch">
        <input type="checkbox" name="theme-switch" id="theme-switch" ref={switchRef} onChange={switchTheme} checked={theme === 'dark'} />
      </label>
      <img src={moonLogo} />
    </div>
  )
}