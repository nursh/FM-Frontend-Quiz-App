import { getImageBg } from "@app/utils/getImageBg";

type Props = {
  iconPath: string;
}

export default function Icon({ iconPath }: Props) {
  function getImageUrl(imagePath: string) {
    const relativePath = imagePath.replace(/\./, "..");
    return new URL(relativePath, import.meta.url).href;
  }

  return (
    <div className={`icon-bg ${getImageBg(iconPath)}`}>
      <img src={getImageUrl(iconPath)} />
    </div>
  )
}