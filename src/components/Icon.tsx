import { getImageBg } from "@app/utils/getImageBg";
import { getImageUrl } from "@app/utils/getImageUrl";

type Props = {
  iconPath: string;
}

export default function Icon({ iconPath }: Props) {
  return (
    <div className={`icon-bg ${getImageBg(iconPath)}`}>
      <img src={getImageUrl(iconPath)} />
    </div>
  )
}