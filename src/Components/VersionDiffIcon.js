import PropTypes from "prop-types";
import compareVersions from "compare-versions";
import Styles from "../Styles/colors.module.scss";

import { ReactComponent as IconGreater } from "../assets/arrow-circle-up.svg";
import { ReactComponent as IconLower } from "../assets/arrow-circle-down.svg";
import { ReactComponent as IconSame } from "../assets/check-circle.svg";
import { ReactComponent as IconIgnore } from "../assets/minus-circle.svg";

const VersionDiffIcon = ({ ver1, ver2 }) => {
  if (!ver1 || !ver2) return <IconIgnore className={Styles.iconIgnore} />;

  const compare = compareVersions(ver1, ver2);

  switch (compare) {
    case 0:
      return <IconSame className={Styles.iconSuccess} />;

    case 1:
      return <IconGreater className={Styles.iconWarning} />;

    case -1:
      return <IconLower className={Styles.iconSuccess} />;

    default:
      return <IconIgnore className={Styles.iconIgnore} />;
  }
};

VersionDiffIcon.propTypes = {
  ver1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ver2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VersionDiffIcon;
